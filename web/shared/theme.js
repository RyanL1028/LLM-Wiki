/* ===== Theme ===== */
function applyTheme() {
  document.body.classList.toggle('dark', LS.get('llmwiki_theme', 'light') === 'dark');
}
function toggleTheme() {
  LS.set('llmwiki_theme', document.body.classList.contains('dark') ? 'light' : 'dark');
  applyTheme();
  if (typeof renderTopbar === 'function') renderTopbar();
}
