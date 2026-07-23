/* ===== Shared Utilities ===== */

function toUTC8(d) {
  return new Date((d || new Date()).getTime() + 8 * 60 * 60 * 1000);
}

function formatCooldown(ms) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  if (days > 0) return days + 'd ' + hours + 'h';
  return hours + 'h ' + Math.floor((ms % 3600000) / 60000) + 'm';
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function sanitize(summary, title) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const cleaned = summary.replace(new RegExp('\\b' + escaped + '\\b', 'gi'), '').trim();
  return cleaned.replace(/^(is|are|refers to|means|stands for|is short for)\s+/i, '')
    .replace(/^(,\s*)+/, '').replace(/\s{2,}/g, ' ').trim() || summary;
}

function randomChoices(correct, pool, count) {
  count = count || 4;
  const others = shuffle(pool.filter(c => c.id !== correct.id));
  const distractors = others.slice(0, count - 1);
  return shuffle([correct, ...distractors]);
}

function getCards() {
  var baseCards = typeof FLASHCARD_DATA !== 'undefined' ? FLASHCARD_DATA : [];
  if (typeof getCardOverrides !== 'function') return baseCards;
  var overrides = getCardOverrides();
  var customCards = overrides._customCards || [];
  var deletedIds = overrides._deletedIds || [];
  var cards = baseCards.map(function(c) {
    var ov = overrides[c.id];
    if (!ov) return c;
    return Object.assign({}, c, Object.fromEntries(Object.entries(ov).filter(function(e) { return e[1] !== undefined && e[0] !== '_customCards' && e[0] !== '_deletedIds'; })));
  });
  // Add custom cards (not deleted)
  customCards.forEach(function(cc) {
    if (deletedIds.indexOf(cc.id) === -1) cards.push(cc);
  });
  return cards;
}

function filterCards() {
  const cards = getCards();
  if (typeof currentSubject === 'undefined' || currentSubject === 'All') return [...cards];
  return cards.filter(c => c.subject === currentSubject);
}

/* ===== OTP helpers ===== */
function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function saveOtp(target, code) {
  const otps = JSON.parse(localStorage.getItem('llmwiki_otps') || '{}');
  otps[target] = { code: code, expires: Date.now() + 300000 };
  localStorage.setItem('llmwiki_otps', JSON.stringify(otps));
}

function verifyOtp(target, code) {
  const otps = JSON.parse(localStorage.getItem('llmwiki_otps') || '{}');
  const entry = otps[target];
  if (!entry) return 'No OTP found. Request a new code.';
  if (Date.now() > entry.expires) { delete otps[target]; localStorage.setItem('llmwiki_otps', JSON.stringify(otps)); return 'OTP expired. Request a new code.'; }
  if (entry.code !== String(code).trim()) return 'Incorrect OTP code.';
  delete otps[target];
  localStorage.setItem('llmwiki_otps', JSON.stringify(otps));
  return null;
}

/* ===== Password toggle ===== */
function togglePwVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

function pwToggleBtn(inputId) {
  return '<button type="button" class="pw-toggle" onclick="togglePwVisibility(\'' + inputId + '\')" tabindex="-1">Show</button>';
}
