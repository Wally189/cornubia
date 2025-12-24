document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector('[data-toggle-today]');
  const panel = document.querySelector('[data-today-panel]');

  if (toggle && panel) {
    const setExpanded = (expanded) => {
      panel.classList.toggle('is-open', expanded);
      panel.setAttribute('data-open', String(expanded));
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.textContent = expanded ? 'Hide today' : 'Show today';
    };

    // start expanded on larger screens
    const shouldOpen = () => window.matchMedia('(min-width: 720px)').matches;
    setExpanded(shouldOpen());

    toggle.addEventListener('click', () => {
      const current = panel.getAttribute('data-open') === 'true';
      setExpanded(!current);
    });

    window.matchMedia('(min-width: 720px)').addEventListener('change', (e) => {
      setExpanded(e.matches);
    });
  }
});
