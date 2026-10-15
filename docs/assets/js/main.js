(() => {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle-btn');

  function updateThemeButton() {
    if (!button) return;
    const dark = root.classList.contains('theme-dark');
    button.querySelector('.icon-sun').style.display = dark ? 'inline' : 'none';
    button.querySelector('.icon-moon').style.display = dark ? 'none' : 'inline';
    button.title = dark ? '切换为浅色' : '切换为深色';
    button.setAttribute('aria-label', button.title);
  }

  updateThemeButton();
  button?.addEventListener('click', () => {
    root.classList.toggle('theme-dark');
    const theme = root.classList.contains('theme-dark') ? 'dark' : 'light';
    try { localStorage.setItem('theme', theme); } catch (_) {}
    updateThemeButton();
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;
      event.preventDefault();
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 20,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });
    });
  });
})();
