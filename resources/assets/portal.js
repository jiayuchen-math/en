// The native details element supplies Enter/Space and no-JavaScript access.
// theme.js owns the theme button and preference; this file only handles UI.
(() => {
  const navigation = document.querySelector('[data-portal-nav]');
  if (navigation) {
    const summary = navigation.querySelector(':scope > summary');
    const desktop = window.matchMedia('(min-width: 1024px)');
    const sync = () => {
      if (!desktop.matches && navigation.contains(document.activeElement)) summary.focus();
      navigation.open = desktop.matches;
      summary.setAttribute('aria-expanded', String(navigation.open));
    };
    const close = (returnFocus = true) => {
      if (desktop.matches || !navigation.open) return;
      navigation.open = false;
      summary.setAttribute('aria-expanded', 'false');
      if (returnFocus) summary.focus();
    };
    navigation.addEventListener('toggle', () => {
      if (desktop.matches && !navigation.open) navigation.open = true;
      summary.setAttribute('aria-expanded', String(navigation.open));
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a[href]')) close(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !event.defaultPrevented && navigation.open && !desktop.matches) {
        event.preventDefault();
        close();
      }
    });
    document.addEventListener('click', event => {
      if (!navigation.contains(event.target)) close(navigation.contains(document.activeElement));
    });
    desktop.addEventListener('change', sync);
    sync();
  }

  // Optional article/filter disclosures retain their native behavior. Escape
  // closes only the innermost disclosure containing keyboard focus.
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || event.defaultPrevented || !(event.target instanceof Element)) return;
    const disclosure = event.target.closest('details[open]');
    if (!disclosure || disclosure === navigation || !disclosure.matches(
      '[data-portal-disclosure], .portal-entry details, .entry details, .article-body details, details.more-filters, .more-filters details',
    )) return;
    const summary = disclosure.querySelector(':scope > summary');
    if (!summary) return;
    event.preventDefault();
    disclosure.open = false;
    summary.focus();
  });
})();
