/* ===== Shared Data Functions ===== */

async function loadUsers() {
  if (!appSession) { _usersCache = []; return; }
  try {
    var snap = await db.collection('users').get();
    _usersCache = snap.docs.map(function(d) { return { uid: d.id, ...d.data() }; });
  } catch(e) { _usersCache = []; }
}
function getUsers() { return _usersCache; }

function progressKey() {
  var s = appSession;
  return s ? 'progress_' + s.uid : null;
}

function defaultProgress() {
  return { mastered: {}, scores_speed: [], scores_goldquest: { highScore: 0 }, scores_tower: { bestStage: 0 }, scores_matching: { bestTime: 999 }, scores_memory: { bestMoves: 999, bestTime: 999 }, scores_scramble: { highScore: 0 }, scores_snakequiz: { highScore: 0 }, scores_crossword: { bestTime: 999, bestHints: 999 }, scores_restaurant: { highScore: 0, totalServed: 0, bestCombo: 0 }, scores_climber: { highScore: 0, bestHeight: 0 }, streak: 0, lastStudyDate: null };
}

function recordStudyActivity() {
  var p = getProgress();
  var today = toUTC8().toISOString().slice(0, 10);
  if (p.lastStudyDate === today) return;
  var yesterday = new Date(toUTC8().getTime() - 86400000).toISOString().slice(0, 10);
  if (p.lastStudyDate === yesterday) { p.streak = (p.streak || 0) + 1; }
  else { p.streak = 1; }
  p.lastStudyDate = today;
  saveProgress(p);
}
function getStreak() { return getProgress().streak || 0; }

var _progressCache = null;

async function loadProgress(uid) {
  if (!uid) {
    _progressCache = {
      mastered: LS.get('llmwiki_mastered', {}),
      scores_speed: LS.get('llmwiki_scores_speed', []),
      scores_goldquest: LS.get('llmwiki_scores_goldquest', { highScore: 0 }),
      scores_tower: LS.get('llmwiki_scores_tower', { bestStage: 0 }),
      scores_matching: LS.get('llmwiki_scores_matching', { bestTime: 999 }),
      scores_memory: LS.get('llmwiki_scores_memory', { bestMoves: 999, bestTime: 999 }),
      scores_scramble: LS.get('llmwiki_scores_scramble', { highScore: 0 }),
      scores_snakequiz: LS.get('llmwiki_scores_snakequiz', { highScore: 0 }),
      scores_crossword: LS.get('llmwiki_scores_crossword', { bestTime: 999, bestHints: 999 }),
      scores_restaurant: LS.get('llmwiki_scores_restaurant', { highScore: 0, totalServed: 0, bestCombo: 0 }),
      scores_climber: LS.get('llmwiki_scores_climber', { highScore: 0, bestHeight: 0 }),
      streak: 0, lastStudyDate: null
    };
    return;
  }
  try {
    var doc = await db.collection('progress').doc(uid).get();
    _progressCache = doc.exists ? { ...defaultProgress(), ...doc.data() } : defaultProgress();
  } catch (e) { _progressCache = defaultProgress(); }
}

function getProgress() {
  if (_progressCache) return _progressCache;
  _progressCache = {
    mastered: LS.get('llmwiki_mastered', {}),
    scores_speed: LS.get('llmwiki_scores_speed', []),
    scores_goldquest: LS.get('llmwiki_scores_goldquest', { highScore: 0 }),
    scores_tower: LS.get('llmwiki_scores_tower', { bestStage: 0 }),
    scores_matching: LS.get('llmwiki_scores_matching', { bestTime: 999 }),
    scores_memory: LS.get('llmwiki_scores_memory', { bestMoves: 999, bestTime: 999 }),
    scores_scramble: LS.get('llmwiki_scores_scramble', { highScore: 0 }),
    scores_snakequiz: LS.get('llmwiki_scores_snakequiz', { highScore: 0 }),
    scores_crossword: LS.get('llmwiki_scores_crossword', { bestTime: 999, bestHints: 999 }),
    scores_restaurant: LS.get('llmwiki_scores_restaurant', { highScore: 0, totalServed: 0, bestCombo: 0 }),
    scores_climber: LS.get('llmwiki_scores_climber', { highScore: 0, bestHeight: 0 }),
    streak: 0, lastStudyDate: null
  };
  return _progressCache;
}

async function saveProgress(p) {
  _progressCache = p;
  if (!appSession) {
    LS.set('llmwiki_mastered', p.mastered);
    LS.set('llmwiki_scores_speed', p.scores_speed);
    LS.set('llmwiki_scores_goldquest', p.scores_goldquest);
    LS.set('llmwiki_scores_tower', p.scores_tower);
    LS.set('llmwiki_scores_matching', p.scores_matching);
    LS.set('llmwiki_scores_memory', p.scores_memory);
    LS.set('llmwiki_scores_scramble', p.scores_scramble);
    LS.set('llmwiki_scores_snakequiz', p.scores_snakequiz);
    LS.set('llmwiki_scores_crossword', p.scores_crossword);
    LS.set('llmwiki_scores_restaurant', p.scores_restaurant);
    LS.set('llmwiki_scores_climber', p.scores_climber);
    return;
  }
  try {
    await db.collection('progress').doc(appSession.uid).set(p, { merge: true });
  } catch (e) { console.error('saveProgress failed:', e); }
}

function hasLegacyData() {
  if (!appSession) return false;
  var u = appSession.username;
  return !!(LS.get('llmwiki_progress_' + u) || LS.get('llmwiki_exam_history_' + u) || LS.get('llmwiki_ai_marks_' + u));
}

async function migrateLegacyData() {
  if (!appSession) return;
  var u = appSession.username;
  var uid = appSession.uid;
  var msg = document.getElementById('export-area');
  var lsProg = LS.get('llmwiki_progress_' + u);
  if (lsProg) {
    var existing = defaultProgress();
    try { var doc = await db.collection('progress').doc(uid).get(); if (doc.exists) existing = { ...defaultProgress(), ...doc.data() }; } catch(e) {}
    for (var id in lsProg.mastered || {}) { existing.mastered[id] = Math.max(existing.mastered[id] || 0, lsProg.mastered[id]); }
    if ((lsProg.scores_matching && lsProg.scores_matching.bestTime || 999) < existing.scores_matching.bestTime) existing.scores_matching.bestTime = lsProg.scores_matching.bestTime;
    if ((lsProg.scores_goldquest && lsProg.scores_goldquest.highScore || 0) > existing.scores_goldquest.highScore) existing.scores_goldquest.highScore = lsProg.scores_goldquest.highScore;
    if ((lsProg.scores_tower && lsProg.scores_tower.bestStage || 0) > existing.scores_tower.bestStage) existing.scores_tower.bestStage = lsProg.scores_tower.bestStage;
    existing.scores_speed = [...existing.scores_speed, ...(lsProg.scores_speed || [])].sort(function(a,b){ return b.score - a.score; }).slice(0, 10);
    await db.collection('progress').doc(uid).set(existing, { merge: true });
    localStorage.removeItem('llmwiki_progress_' + u);
  }
  var lsExam = LS.get('llmwiki_exam_history_' + u);
  if (lsExam && lsExam.length) {
    try { var edoc = await db.collection('examHistory').doc(uid).get(); var eexisting = edoc.exists ? (edoc.data().entries || []) : []; await db.collection('examHistory').doc(uid).set({ entries: [...eexisting, ...lsExam] }, { merge: true }); localStorage.removeItem('llmwiki_exam_history_' + u); } catch(e) {}
  }
  var lsAiMarks = LS.get('llmwiki_ai_marks_' + u);
  var lsAiExtra = LS.get('llmwiki_ai_extra_' + u);
  var lsAiSa = LS.get('llmwiki_ai_standalone_' + u);
  var lsAiSaExtra = LS.get('llmwiki_ai_standalone_extra_' + u);
  if (lsAiMarks || lsAiSa) {
    try { var adoc = await db.collection('aiUsage').doc(uid).get(); var aexisting = adoc.exists ? adoc.data() : { examUses: [], examExtra: 0, saUses: [], saExtra: 0, erUses: [], erExtra: 0 }; if (lsAiMarks) { aexisting.examUses = [...(aexisting.examUses || []), ...JSON.parse(lsAiMarks)]; aexisting.examExtra = Math.max(aexisting.examExtra || 0, parseInt(lsAiExtra) || 0); } if (lsAiSa) { aexisting.saUses = [...(aexisting.saUses || []), ...JSON.parse(lsAiSa)]; aexisting.saExtra = Math.max(aexisting.saExtra || 0, parseInt(lsAiSaExtra) || 0); } await db.collection('aiUsage').doc(uid).set(aexisting, { merge: true }); localStorage.removeItem('llmwiki_ai_marks_' + u); localStorage.removeItem('llmwiki_ai_extra_' + u); localStorage.removeItem('llmwiki_ai_standalone_' + u); localStorage.removeItem('llmwiki_ai_standalone_extra_' + u); } catch(e) {}
  }
  if (typeof loadAiUsage === 'function') await loadAiUsage(uid);
  if (typeof loadExamHistory === 'function') await loadExamHistory(uid);
  if (msg) { msg.innerHTML = '<p style="color:#059669;margin-top:8px">Local data migrated to cloud successfully!</p>'; setTimeout(function() { msg.innerHTML = ''; renderAccount(document.getElementById('main')); }, 1500); }
}

async function importAnonProgress() {
  if (!appSession) return;
  var anonMastered = LS.get('llmwiki_mastered', {});
  var anonMatch = LS.get('llmwiki_scores_matching', { bestTime: 999 });
  var anonGold = LS.get('llmwiki_scores_goldquest', { highScore: 0 });
  var anonTower = LS.get('llmwiki_scores_tower', { bestStage: 0 });
  var anonSpeed = LS.get('llmwiki_scores_speed', []);
  var prog = getProgress();
  for (var id in anonMastered) { prog.mastered[id] = Math.max(prog.mastered[id] || 0, anonMastered[id]); }
  if (anonMatch.bestTime < prog.scores_matching.bestTime) prog.scores_matching.bestTime = anonMatch.bestTime;
  if (anonGold.highScore > prog.scores_goldquest.highScore) prog.scores_goldquest.highScore = anonGold.highScore;
  if (anonTower.bestStage > prog.scores_tower.bestStage) prog.scores_tower.bestStage = anonTower.bestStage;
  prog.scores_speed = [...prog.scores_speed, ...anonSpeed].sort(function(a,b){ return b.score - a.score; }).slice(0, 10);
  await saveProgress(prog);
  localStorage.removeItem('llmwiki_mastered');
  localStorage.removeItem('llmwiki_scores_matching');
  localStorage.removeItem('llmwiki_scores_goldquest');
  localStorage.removeItem('llmwiki_scores_tower');
  localStorage.removeItem('llmwiki_scores_speed');
  if (typeof renderAccount === 'function') renderAccount(document.getElementById('main'));
}

async function checkNewNotifications() {
  if (!appSession) return;
  var s = getSession();
  if (!s) return;
  var lastCheck = LS.get('llmwiki_lastCheck', 0);
  var now = Date.now();
  LS.set('llmwiki_lastCheck', now);
  try {
    var hwSnap = await db.collection('homework').get();
    hwSnap.forEach(function(doc) {
      var d = doc.data();
      var hwTime = new Date(d.created || 0).getTime();
      if (hwTime > lastCheck && lastCheck > 0) {
        var isForMe = d.assignedTo === 'all' || d.assignedTo === s.username ||
          (d.assignedTo && d.assignedTo.startsWith('class:') && (function() {
            var cid = parseInt(d.assignedTo.slice(6));
            var cls = getClasses().find(function(c) { return c.id === cid; });
            return cls && cls.students && cls.students.includes(s.username);
          })());
        if (isForMe) { addNotification('homework', 'New homework: ' + d.title, '#homework'); }
      }
    });
  } catch(e) {}
  try {
    var tSnap = await db.collection('supportTickets').get();
    tSnap.forEach(function(doc) {
      var d = doc.data();
      if (d.createdBy === s.username && d.replies && d.replies.length) {
        var lastReply = d.replies[d.replies.length - 1];
        var replyTime = new Date(lastReply.date || 0).getTime();
        if (replyTime > lastCheck && lastCheck > 0 && lastReply.author !== s.username) {
          addNotification('reply', 'New reply on ticket: ' + d.title, '#support');
        }
      }
    });
  } catch(e) {}
  updateNotifBadge();
}

async function loadAnnouncements() {
  if (!appSession) { var banner = document.getElementById('announce-banner'); if (banner) banner.remove(); document.body.classList.remove('has-banner'); return; }
  try {
    var snap = await db.collection('classAnnouncements').get();
    var dismissed = LS.get('llmwiki_dismissed_announcements', []);
    var s = getSession();
    if (!s) return;
    var visible = [];
    snap.forEach(function(doc) {
      var d = doc.data();
      if (dismissed.includes(doc.id)) return;
      if (d.targetRole && d.targetRole !== s.role) return;
      if (d.targetClass) { var cls = getClasses().find(function(c) { return c.id === d.targetClass; }); if (!cls || !cls.students || !cls.students.includes(s.username)) return; }
      visible.push({ id: doc.id, ...d });
    });
    if (!visible.length) { var banner = document.getElementById('announce-banner'); if (banner) banner.remove(); document.body.classList.remove('has-banner'); return; }
    var bannerEl = document.getElementById('announce-banner');
    if (!bannerEl) { bannerEl = document.createElement('div'); bannerEl.id = 'announce-banner'; var topbar = document.querySelector('.topbar'); if (topbar) topbar.insertAdjacentElement('afterend', bannerEl); else document.body.prepend(bannerEl); }
    var a = visible[0];
    bannerEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;gap:8px"><span>' + a.message + ' <small style="opacity:0.7">— ' + a.author + '</small></span><button onclick="dismissAnnouncement(\'' + a.id + '\')" style="background:transparent;border:none;color:#fff;cursor:pointer;font-size:1.1rem">&times;</button></div>';
    document.body.classList.add('has-banner');
  } catch(e) {}
}

function dismissAnnouncement(id) {
  var dismissed = LS.get('llmwiki_dismissed_announcements', []);
  dismissed.push(id);
  LS.set('llmwiki_dismissed_announcements', dismissed);
  loadAnnouncements();
}
