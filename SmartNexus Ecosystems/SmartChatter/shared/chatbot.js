/* ===== AI Study Chatbot (Mistral) =====
 * Floating chat widget — blue bubble bottom-right.
 * Tap to open a slide-up panel. Ask study questions.
 * Attach photos of homework/textbooks for vision-powered help.
 * 7 messages/day (UltimateAdmin can override).
 * Chat history persists in localStorage.
 */
(function() {
  'use strict';

  var STORAGE_KEY = 'llmwiki_chatbot_msgs';
  var MAX_HISTORY = 30;
  var _sending = false;
  window._chatbotPhoto = null; // exposed for inline onclick

  var SYSTEM_PROMPT = [
    'You are a friendly, knowledgeable AI study tutor for students using Smart Study.',
    'Powered by Mistral AI. Your role is to help students understand academic concepts.',
    '',
    'Guidelines:',
    '- Give clear, accurate explanations suitable for high school / IGCSE students.',
    '- Use concrete examples and analogies when helpful.',
    '- Break down complex topics into digestible steps.',
    '- For math/science questions, show your reasoning step by step.',
    '- If a student uploads a photo of homework/textbook, analyze it carefully and explain.',
    '- If the photo is blurry or unreadable, ask them to retake it.',
    '- Do NOT do graded homework for students. Guide them to find their own answers.',
    '- Keep responses concise but thorough. Use markdown formatting.',
    '- If asked about non-academic topics, politely redirect to study-related topics.'
  ].join('\n');

  /* ===== CSS Injection ===== */
  var css = ''
    + '#chatbot-root { position:fixed; bottom:20px; right:20px; z-index:9999; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; font-size:0.9rem; }'
    + '#chatbot-bubble { width:56px; height:56px; border-radius:50%; background:var(--accent); color:#fff; border:none; cursor:pointer; box-shadow:0 4px 14px rgba(0,0,0,0.18); display:flex; align-items:center; justify-content:center; font-size:1.5rem; transition:transform 0.15s,box-shadow 0.15s; position:relative; }'
    + '#chatbot-bubble:hover { transform:scale(1.08); box-shadow:0 6px 20px rgba(0,0,0,0.22); }'
    + '#chatbot-bubble:active { transform:scale(0.95); }'
    + '#chatbot-panel { display:none; position:absolute; bottom:68px; right:0; width:400px; height:540px; max-height:calc(100vh - 100px); background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); box-shadow:0 8px 30px rgba(0,0,0,0.15); overflow:hidden; flex-direction:column; animation:cbSlideUp 0.2s ease-out; }'
    + '#chatbot-panel.open { display:flex; }'
    + '@keyframes cbSlideUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }'
    + '#chatbot-header { display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid var(--border); background:var(--surface); flex-shrink:0; }'
    + '#chatbot-header .cb-title { font-weight:600; font-size:0.92rem; color:var(--text); display:flex; align-items:center; gap:6px; }'
    + '#chatbot-close { background:transparent; border:none; color:var(--muted); font-size:1.3rem; cursor:pointer; padding:2px 6px; border-radius:4px; line-height:1; }'
    + '#chatbot-close:hover { color:var(--text); background:var(--bg); }'
    + '#chatbot-clear { background:transparent; border:none; color:var(--muted); font-size:0.72rem; cursor:pointer; padding:4px 8px; border-radius:4px; }'
    + '#chatbot-clear:hover { color:#ef4444; }'
    + '#chatbot-usage { font-size:0.65rem; color:var(--muted); margin-right:8px; }'
    + '#chatbot-usage .low { color:#ef4444; font-weight:600; }'
    + '#chatbot-msgs { flex:1; overflow-y:auto; padding:12px 14px; display:flex; flex-direction:column; gap:10px; scroll-behavior:smooth; }'
    + '.cb-msg { display:flex; flex-direction:column; max-width:88%; animation:cbMsgIn 0.2s ease-out; }'
    + '@keyframes cbMsgIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }'
    + '.cb-msg-user { align-self:flex-end; align-items:flex-end; }'
    + '.cb-msg-ai { align-self:flex-start; align-items:flex-start; }'
    + '.cb-bubble { padding:9px 13px; border-radius:16px; font-size:0.86rem; line-height:1.5; word-wrap:break-word; overflow-wrap:break-word; }'
    + '.cb-msg-user .cb-bubble { background:var(--accent); color:#fff; border-bottom-right-radius:4px; }'
    + '.cb-msg-ai .cb-bubble { background:var(--bg); color:var(--text); border:1px solid var(--border); border-bottom-left-radius:4px; }'
    + '.cb-bubble img { max-width:200px; max-height:200px; border-radius:8px; margin-bottom:6px; display:block; }'
    + '.cb-bubble p { margin:0 0 6px; } .cb-bubble p:last-child { margin-bottom:0; }'
    + '.cb-bubble ul, .cb-bubble ol { margin:4px 0; padding-left:18px; }'
    + '.cb-bubble li { margin:2px 0; }'
    + '.cb-bubble code { background:rgba(0,0,0,0.08); padding:1px 4px; border-radius:3px; font-size:0.8rem; }'
    + '.cb-bubble pre { background:rgba(0,0,0,0.06); padding:8px 12px; border-radius:6px; overflow-x:auto; font-size:0.8rem; margin:6px 0; }'
    + '.cb-bubble strong { font-weight:600; } .cb-bubble em { font-style:italic; }'
    + '.cb-photo-preview { position:relative; display:inline-block; margin:4px 0; }'
    + '.cb-photo-preview img { width:80px; height:80px; object-fit:cover; border-radius:8px; border:1px solid var(--border); }'
    + '.cb-photo-remove { position:absolute; top:-6px; right:-6px; width:18px; height:18px; border-radius:50%; background:#ef4444; color:#fff; border:none; cursor:pointer; font-size:0.6rem; line-height:18px; text-align:center; padding:0; }'
    + '#chatbot-typing { display:none; padding:0 14px 4px; }'
    + '#chatbot-typing .cb-dots { display:inline-flex; gap:4px; padding:8px 13px; background:var(--bg); border:1px solid var(--border); border-radius:16px; border-bottom-left-radius:4px; }'
    + '#chatbot-typing .cb-dots span { width:7px; height:7px; background:var(--muted); border-radius:50%; animation:cbBounce 1.2s infinite ease-in-out; }'
    + '#chatbot-typing .cb-dots span:nth-child(2) { animation-delay:0.2s; }'
    + '#chatbot-typing .cb-dots span:nth-child(3) { animation-delay:0.4s; }'
    + '@keyframes cbBounce { 0%,60%,100% { transform:translateY(0); } 30% { transform:translateY(-6px); } }'
    + '#chatbot-input-wrap { display:flex; gap:6px; padding:8px 10px; border-top:1px solid var(--border); background:var(--surface); flex-shrink:0; align-items:center; }'
    + '#chatbot-photo-btn { width:34px; height:34px; border-radius:50%; background:transparent; border:1.5px solid var(--border); color:var(--muted); cursor:pointer; font-size:0.9rem; flex-shrink:0; display:flex; align-items:center; justify-content:center; transition:0.15s; }'
    + '#chatbot-photo-btn:hover { border-color:var(--accent); color:var(--accent); }'
    + '#chatbot-photo-btn.has-photo { background:var(--accent); color:#fff; border-color:var(--accent); }'
    + '#chatbot-photo-btn input { display:none; }'
    + '#chatbot-input { flex:1; border:1px solid var(--border); border-radius:20px; padding:8px 14px; font-size:0.86rem; font-family:inherit; background:var(--bg); color:var(--text); outline:none; transition:border-color 0.15s; }'
    + '#chatbot-input:focus { border-color:var(--accent); }'
    + '#chatbot-input::placeholder { color:var(--muted); }'
    + '#chatbot-send { width:36px; height:36px; border-radius:50%; background:var(--accent); color:#fff; border:none; cursor:pointer; font-size:1rem; flex-shrink:0; display:flex; align-items:center; justify-content:center; transition:opacity 0.15s; }'
    + '#chatbot-send:disabled { opacity:0.5; cursor:default; }'
    + '@media (max-width:600px) {'
    + '  #chatbot-root { bottom:10px; right:10px; }'
    + '  #chatbot-bubble { width:48px; height:48px; font-size:1.3rem; }'
    + '  #chatbot-panel { width:calc(100vw - 20px); height:calc(100vh - 80px); max-height:calc(100vh - 80px); bottom:62px; right:-2px; border-radius:16px 16px 0 0; }'
    + '}';

  var style = document.createElement('style');
  style.id = 'chatbot-css';
  style.textContent = css;
  document.head.appendChild(style);

  /* ===== DOM Creation ===== */
  var root = document.createElement('div');
  root.id = 'chatbot-root';
  root.innerHTML = ''
    + '<button id="chatbot-bubble" title="Ask AI study questions" aria-label="Open study AI chat">'
    +   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
    +     '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>'
    +   '</svg>'
    + '</button>'
    + '<div id="chatbot-panel">'
    +   '<div id="chatbot-header">'
    +     '<span class="cb-title">🤖 AI Study Tutor</span>'
    +     '<span id="chatbot-usage"></span>'
    +     '<div style="display:flex;align-items:center;gap:2px">'
    +       '<button id="chatbot-clear" title="Clear chat">Clear</button>'
    +       '<button id="chatbot-close" title="Close" aria-label="Close chat">&times;</button>'
    +     '</div>'
    +   '</div>'
    +   '<div id="chatbot-msgs"></div>'
    +   '<div id="chatbot-typing"><div class="cb-dots"><span></span><span></span><span></span></div></div>'
    +   '<div id="chatbot-input-wrap">'
    +     '<label id="chatbot-photo-btn" title="Attach photo">'
    +       '📷'
    +       '<input type="file" accept="image/*" capture="environment" id="chatbot-photo-input">'
    +     '</label>'
    +     '<div id="chatbot-photo-preview-area" style="display:none;margin-right:6px"></div>'
    +     '<input id="chatbot-input" type="text" placeholder="Ask a study question..." maxlength="2000" autocomplete="off">'
    +     '<button id="chatbot-send" title="Send" aria-label="Send">'
    +       '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
    +         '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>'
    +       '</svg>'
    +     '</button>'
    +   '</div>'
    + '</div>';
  document.body.appendChild(root);

  /* ===== Helpers ===== */
  function loadMessages() { return LS.get(STORAGE_KEY, []); }
  function saveMessages(msgs) { LS.set(STORAGE_KEY, msgs.slice(-MAX_HISTORY)); }
  function addMessage(role, content, image) {
    var msgs = loadMessages();
    msgs.push({ role: role, content: content, image: image || null, time: Date.now() });
    if (msgs.length > MAX_HISTORY) msgs = msgs.slice(-MAX_HISTORY);
    saveMessages(msgs);
    return msgs;
  }
  function formatTime(ts) {
    var d = new Date(ts);
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }
  function simpleMarkdown(text) {
    var html = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, function(m, lang, code) { return '<pre><code>' + code.trim() + '</code></pre>'; });
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/^### (.+)$/gm, '<strong>$1</strong>');
    html = html.replace(/^## (.+)$/gm, '<strong>$1</strong>');
    html = html.replace(/^# (.+)$/gm, '<strong>$1</strong>');
    html = html.replace(/^[*-] (.+)$/gm, '<li>$1</li>');
    html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/<p>(<(?:ul|pre)[\s\S]*?<\/(?:ul|pre)>)<\/p>/g, '$1');
    return html;
  }
  function scrollToBottom() { var el = document.getElementById('chatbot-msgs'); if (el) el.scrollTop = el.scrollHeight; }
  function showTyping() { document.getElementById('chatbot-typing').style.display = ''; scrollToBottom(); }
  function hideTyping() { document.getElementById('chatbot-typing').style.display = 'none'; }

  function renderMessages() {
    var msgs = loadMessages();
    var container = document.getElementById('chatbot-msgs');
    container.innerHTML = '';
    for (var i = 0; i < msgs.length; i++) {
      var msg = msgs[i];
      var isUser = msg.role === 'user';
      var div = document.createElement('div');
      div.className = 'cb-msg ' + (isUser ? 'cb-msg-user' : 'cb-msg-ai');
      var bubble = document.createElement('div');
      bubble.className = 'cb-bubble';
      var content = '';
      if (msg.image) content += '<img src="' + msg.image + '" alt="Attached photo">';
      content += simpleMarkdown(msg.content);
      bubble.innerHTML = content;
      div.appendChild(bubble);
      var time = document.createElement('div');
      time.style.cssText = 'font-size:0.6rem;color:var(--muted);margin-top:2px;padding:0 4px;';
      time.textContent = formatTime(msg.time);
      div.appendChild(time);
      container.appendChild(div);
    }
    scrollToBottom();
  }

  function updateSendButton() {
    var btn = document.getElementById('chatbot-send');
    var input = document.getElementById('chatbot-input');
    btn.disabled = _sending || (!input.value.trim() && !window._chatbotPhoto);
  }

  function updateUsageDisplay() {
    if (typeof checkTutorLimit !== 'function') return;
    checkTutorLimit().then(function(limit) {
      var el = document.getElementById('chatbot-usage');
      if (!el || !limit.limit) return;
      var remaining = Math.max(0, limit.limit - (limit.used || 0));
      if (remaining <= 2) el.innerHTML = '<span class="low">' + remaining + '/' + limit.limit + ' left</span>';
      else el.textContent = remaining + '/' + limit.limit + ' today';
    }).catch(function() {});
  }

  /* ===== Mistral API ===== */
  // _chatbotGetMistralKey avoids name clash with ai.js getMistralKey
  async function _chatbotGetMistralKey() {
    // Try global cached var from ai.js first
    if (typeof _mistralKey !== 'undefined' && _mistralKey) return _mistralKey;
    // Try calling the ai.js function (it handles caching + Firestore fetch)
    try {
      if (typeof getMistralKey === 'function') {
        var key = await getMistralKey();
        if (key) return key;
      }
    } catch(e) {}
    // Direct Firestore fallback
    try {
      var doc = await db.collection('siteConfig').doc('mistralApiKey').get();
      if (doc.exists) return doc.data().key;
    } catch(e) {}
    return null;
  }

  async function callMistral(messages, photoData) {
    var key = await _chatbotGetMistralKey();
    if (!key) throw new Error('AI Tutor is not configured yet.');

    // Check rate limit
    if (typeof checkTutorLimit === 'function') {
      var limitCheck = await checkTutorLimit();
      if (!limitCheck.allowed) throw new Error(limitCheck.reason);
    }

    var model = photoData ? 'pixtral-12b-2409' : 'mistral-small-latest';
    var userContent;

    if (photoData) {
      // Find the last user message text (without the photo)
      var lastMsg = messages[messages.length - 1];
      var text = lastMsg ? lastMsg.content : '';
      userContent = [
        { type: 'text', text: text || 'Can you help me understand this?' },
        { type: 'image_url', image_url: 'data:' + photoData.mimeType + ';base64,' + photoData.base64 }
      ];
    } else {
      userContent = messages[messages.length - 1].content;
    }

    var apiMessages = [{ role: 'system', content: SYSTEM_PROMPT }];
    for (var i = 0; i < messages.length - 1; i++) {
      apiMessages.push({ role: messages[i].role, content: messages[i].content });
    }
    apiMessages.push({ role: 'user', content: userContent });

    var resp = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({ model: model, max_tokens: 1024, messages: apiMessages })
    });

    if (!resp.ok) {
      var errText = await resp.text();
      throw new Error('API error ' + resp.status + ': ' + errText.slice(0, 200));
    }

    var data = await resp.json();
    var reply = data.choices[0].message.content;

    // Increment usage
    if (typeof incrementTutorUsage === 'function') {
      await incrementTutorUsage().catch(function() {});
    }

    return reply;
  }

  /* ===== Core Actions ===== */
  function openPanel() {
    var panel = document.getElementById('chatbot-panel');
    panel.classList.add('open');
    renderMessages();
    updateUsageDisplay();
    document.getElementById('chatbot-input').focus();
  }

  function closePanel() { document.getElementById('chatbot-panel').classList.remove('open'); }

  function togglePanel() {
    var panel = document.getElementById('chatbot-panel');
    panel.classList.contains('open') ? closePanel() : openPanel();
  }

  function _removePhoto() {
    window._chatbotPhoto = null;
    document.getElementById('chatbot-photo-input').value = '';
    document.getElementById('chatbot-photo-preview-area').style.display = 'none';
    document.getElementById('chatbot-photo-btn').classList.remove('has-photo');
    updateSendButton();
  }

  function attachPhoto(event) {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function() {
      var dataUrl = reader.result;
      window._chatbotPhoto = {
        base64: dataUrl.split(',')[1],
        mimeType: dataUrl.split(';')[0].split(':')[1] || 'image/jpeg'
      };
      var preview = document.getElementById('chatbot-photo-preview-area');
      preview.style.display = '';
      preview.innerHTML = '<div class="cb-photo-preview"><img src="' + dataUrl + '" alt="Photo"><button class="cb-photo-remove" onclick="_chatbotRemovePhoto()">×</button></div>';
      document.getElementById('chatbot-photo-btn').classList.add('has-photo');
      updateSendButton();
    };
    reader.readAsDataURL(file);
  }
  // Expose for inline onclick
  window._chatbotRemovePhoto = _removePhoto;

  async function sendMessage() {
    if (_sending) return;
    var input = document.getElementById('chatbot-input');
    var text = input.value.trim();
    var photo = window._chatbotPhoto;
    if (!text && !photo) return;

    input.value = '';
    window._chatbotPhoto = null;
    document.getElementById('chatbot-photo-preview-area').style.display = 'none';
    document.getElementById('chatbot-photo-btn').classList.remove('has-photo');
    document.getElementById('chatbot-photo-input').value = '';
    _sending = true;
    updateSendButton();

    var imageDataUrl = photo ? 'data:' + photo.mimeType + ';base64,' + photo.base64 : null;
    addMessage('user', text || 'Can you help with this?', imageDataUrl);
    renderMessages();
    showTyping();

    try {
      var allMsgs = loadMessages();
      var response = await callMistral(allMsgs, photo);
      hideTyping();
      addMessage('assistant', response, null);
      renderMessages();
      updateUsageDisplay();
    } catch(e) {
      hideTyping();
      addMessage('assistant', '⚠️ ' + e.message, null);
      renderMessages();
    }
    _sending = false;
    updateSendButton();
  }

  /* ===== Event Binding ===== */
  function init() {
    document.getElementById('chatbot-bubble').addEventListener('click', togglePanel);
    document.getElementById('chatbot-close').addEventListener('click', closePanel);
    document.getElementById('chatbot-clear').addEventListener('click', function() {
      if (confirm('Clear all chat history?')) { LS.set(STORAGE_KEY, []); renderMessages(); }
    });
    document.getElementById('chatbot-send').addEventListener('click', sendMessage);
    document.getElementById('chatbot-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    document.getElementById('chatbot-input').addEventListener('input', updateSendButton);
    document.getElementById('chatbot-photo-input').addEventListener('change', attachPhoto);

    document.addEventListener('click', function(e) {
      var panel = document.getElementById('chatbot-panel');
      var bubble = document.getElementById('chatbot-bubble');
      if (panel.classList.contains('open') && !panel.contains(e.target) && !bubble.contains(e.target)) {
        closePanel();
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.getElementById('chatbot-panel').classList.contains('open')) {
        closePanel();
      }
    });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
})();
