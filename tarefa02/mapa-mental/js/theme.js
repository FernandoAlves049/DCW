// Alternância de tema claro/escuro com persistência
(function() {
  const STORAGE_KEY = 'mm_theme';
  const root = document.documentElement; // <html>

  // Aplica tema salvo antes da pintura (caso script seja injetado no <head> inline)
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') root.classList.add('dark');
  } catch (_) {}

  // Função global para alternar (usada pelos botões)
  window.toggleTheme = function() {
    const isDark = root.classList.toggle('dark');
    try { localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (_) {}
    // Atualiza ícone do botão (se existir)
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.innerHTML = isDark ? '<span class="icon">☀️</span>' : '<span class="icon">🌙</span>';
  };

  // Ajusta ícone conforme estado inicial
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      const isDark = root.classList.contains('dark');
      btn.innerHTML = isDark ? '<span class="icon">☀️</span>' : '<span class="icon">🌙</span>';
    }
  });
})();
