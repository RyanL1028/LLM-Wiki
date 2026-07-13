/* ===== AI API Helpers (DeepSeek + Mistral) ===== */

// --- DeepSeek (flashcard generation) ---
let _cachedApiKey = null;

async function getApiKey() {
  if (_cachedApiKey) return _cachedApiKey;
  try {
    var doc = await db.collection('siteConfig').doc('apiKey').get();
    if (doc.exists) _cachedApiKey = doc.data().key;
  } catch(e) {}
  return _cachedApiKey;
}

function clearCachedApiKey() { _cachedApiKey = null; }

async function aiGenerate(systemPrompt, userMessage) {
  var key = await getApiKey();
  if (!key) throw new Error('No API key configured. Go to editor settings.');
  var resp = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
    body: JSON.stringify({
      model: 'deepseek-chat',
      max_tokens: 2048,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage }
      ]
    })
  });
  if (!resp.ok) {
    var errText = await resp.text();
    throw new Error('API error ' + resp.status + ': ' + errText);
  }
  var data = await resp.json();
  return data.choices[0].message.content;
}

async function aiSuggestFlashcard(topic, subject, existingCards) {
  var examples = existingCards.slice(0, 3).map(function(c) {
    return JSON.stringify({ title: c.title, summary: c.summary, tags: c.tags, subject: c.subject });
  }).join('\n');
  var systemPrompt = 'You are an expert flashcard creator for students. Create concise, accurate flashcards. Return ONLY valid JSON with no other text. Format: { "title": "...", "summary": "...", "tags": ["...", "..."], "subject": "..." }';
  var userMsg = 'Topic: ' + topic + '\nSubject: ' + subject + '\nExisting examples:\n' + examples + '\n\nGenerate a new flashcard for this topic. The summary should be 1-3 sentences. Tags should be 2-5 lowercase kebab-case tags.';
  var result = await aiGenerate(systemPrompt, userMsg);
  return JSON.parse(result.trim());
}

async function aiImproveFlashcard(card, userEdits) {
  var systemPrompt = 'You are an expert flashcard editor. Improve the given flashcard based on the user\'s edits. Return ONLY valid JSON with the complete updated card fields: { "title": "...", "summary": "...", "tags": ["..."], "subject": "..." }';
  var userMsg = 'Original card:\n' + JSON.stringify(card, null, 2) + '\n\nUser edits:\n' + JSON.stringify(userEdits, null, 2) + '\n\nReturn the improved complete card as JSON.';
  var result = await aiGenerate(systemPrompt, userMsg);
  return JSON.parse(result.trim());
}

// =============================================================================
// --- Mistral AI Tutor (photo-based learning) ---
// =============================================================================
// Uses Mistral's Pixtral vision model to analyze photos of homework,
// worksheets, and textbooks. Students can snap a photo and ask questions.
// Default limit: 7 messages/day. UltimateAdmin can override per user.
// =============================================================================

var _mistralKey = null;

async function getMistralKey() {
  if (_mistralKey) return _mistralKey;
  try {
    var doc = await db.collection('siteConfig').doc('mistralApiKey').get();
    if (doc.exists) _mistralKey = doc.data().key;
  } catch(e) {}
  return _mistralKey;
}

/** Check and enforce daily message limit for the AI Tutor.
 *  Stores usage in aiUsage/{uid} with fields:
 *    mistralTutorCount  — messages used today
 *    mistralTutorDate   — the day these were used (YYYY-MM-DD)
 *    mistralTutorLimit  — override limit (UltimateAdmin can set higher)
 *  Returns { allowed: true } or { allowed: false, used, limit, reason }
 */
async function checkTutorLimit() {
  if (!appSession || !appSession.uid) return { allowed: false, reason: 'Sign in to use the AI Tutor.' };
  var uid = appSession.uid;
  var today = new Date().toISOString().slice(0, 10);
  var defaultLimit = 7;

  // Get user's override limit (if UltimateAdmin has set one)
  var limit = defaultLimit;
  try {
    var usageDoc = await db.collection('aiUsage').doc(uid).get();
    if (usageDoc.exists) {
      var d = usageDoc.data();
      var tutorData = d.mistralTutor || {};
      // If date differs, reset count
      if (tutorData.date === today) {
        var used = tutorData.count || 0;
        var userLimit = tutorData.limit || defaultLimit;
        if (used >= userLimit) {
          return { allowed: false, used: used, limit: userLimit, reason: 'Daily limit reached (' + used + '/' + userLimit + '). Try again tomorrow or ask an admin for more.' };
        }
        return { allowed: true, used: used, limit: userLimit };
      }
      // Different date — will reset below
    }
  } catch(e) { /* proceed with defaults */ }

  return { allowed: true, used: 0, limit: limit };
}

/** Increment the daily tutor usage count. Call AFTER a successful response. */
async function incrementTutorUsage() {
  if (!appSession || !appSession.uid) return;
  var uid = appSession.uid;
  var today = new Date().toISOString().slice(0, 10);
  var ref = db.collection('aiUsage').doc(uid);
  try {
    var doc = await ref.get();
    if (doc.exists && doc.data().mistralTutor && doc.data().mistralTutor.date === today) {
      await ref.update({ 'mistralTutor.count': firebase.firestore.FieldValue.increment(1) });
    } else {
      await ref.set({ mistralTutor: { count: 1, date: today, limit: 7 } }, { merge: true });
    }
  } catch(e) { console.warn('Tutor usage increment failed:', e); }
}

/**
 * AI Tutor — send a photo + question to Mistral's vision model.
 * @param {string} imageBase64 — base64-encoded image (without data: prefix)
 * @param {string} question — the user's question about the photo
 * @param {string} mimeType  — 'image/jpeg', 'image/png', etc.
 * @returns {string} the tutor's response
 */
async function aiTutorAsk(imageBase64, question, mimeType) {
  // Check rate limit
  var limit = await checkTutorLimit();
  if (!limit.allowed) throw new Error(limit.reason);

  var key = await getMistralKey();
  if (!key) throw new Error('AI Tutor is not configured yet. Ask an admin to add the Mistral API key.');

  var dataUrl = 'data:' + (mimeType || 'image/jpeg') + ';base64,' + imageBase64;

  var messages = [
    {
      role: 'system',
      content: 'You are a helpful, patient AI tutor for high school / IGCSE students. The student has uploaded a photo (homework, textbook page, worksheet, or handwritten notes) and will ask a question about it. Look carefully at the photo and provide a clear, step-by-step explanation. If the photo is blurry or you cannot read it, politely ask them to retake it. Use markdown formatting for readability.'
    },
    {
      role: 'user',
      content: [
        { type: 'text', text: question || 'Can you help me understand what\'s in this photo?' },
        { type: 'image_url', image_url: dataUrl }
      ]
    }
  ];

  var resp = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    },
    body: JSON.stringify({
      model: 'pixtral-12b-2409',
      max_tokens: 1024,
      messages: messages
    })
  });

  if (!resp.ok) {
    var errText = await resp.text();
    throw new Error('Mistral API error ' + resp.status + ': ' + errText.slice(0, 200));
  }

  var data = await resp.json();
  var reply = data.choices[0].message.content;

  // Increment usage after successful response
  await incrementTutorUsage();

  return reply;
}
