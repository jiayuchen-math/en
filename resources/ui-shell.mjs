import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

// Resolve relative to this module, never the caller's working directory. Hash
// bytes rather than timestamps so identical inputs produce identical pages.
const asset = name => `/en/resources/assets/${name}?v=${createHash('sha256')
  .update(readFileSync(new URL(`./assets/${name}`, import.meta.url)))
  .digest('hex').slice(0, 12)}`;

const sections = [
  { id: 'overview', label: 'Overview', href: '/en/resources/' },
  { id: 'library', label: 'Library', href: '/en/notes/reading-notes/library/catalogue.html' },
  { id: 'encyclopedia', label: 'Encyclopedia', href: '/en/resources/encyclopedia/' },
  { id: 'terminology', label: 'Terminology', href: '/en/resources/terminology/' },
  { id: 'paths', label: 'Learning paths', href: '/en/resources/library-paths/' },
  { id: 'links', label: 'Links', href: '/en/resources/links/' },
];
const study = { id: 'study-careers', label: 'Study & Careers', href: '/en/resources/study-careers/' };
const studySections = [
  { id: 'programs', label: 'Programs', href: study.href },
  { id: 'researchers', label: 'Researchers', href: `${study.href}researchers.html` },
  { id: 'guides', label: 'Guides', href: `${study.href}guides.html` },
];
const notes = { id: 'notes', label: 'Notes', href: '/en/notes/mathematical-notes/page.html' };
const search = { id: 'search', label: 'Search', href: '/en/resources/search/' };
const normalize = value => {
  const pathname = new URL(value || '/en/resources/', 'https://shell.invalid/en/').pathname;
  return pathname.replace(/-(?:all-)?page-\d+(?=\.html$|\/?$)/, '').replace(/\/index\.html$/, '/');
};
const sectionFor = pathname => {
  if (/^\/en\/notes\/reading-notes\/library(?:\/|\.html$)/.test(pathname)) return sections[1];
  if (pathname.startsWith(study.href)) {
    return studySections.find(section => section.href !== study.href && normalize(section.href) === pathname)
      || (pathname === study.href ? studySections[0] : study);
  }
  if (pathname === search.href) return search;
  return sections.slice(2).find(section => pathname.startsWith(section.href))
    || (pathname.startsWith('/en/notes/') ? notes : sections[0]);
};
const link = (section, current, exact = true) => `<a href="${section.href}"${section.id === current ? ` class="is-active"${exact ? ' aria-current="page"' : ''}` : ''}>${escape(section.label)}</a>`;

function breadcrumbs(title, pathname, section, kind) {
  if (kind === 'home') return '';
  const crumbs = [{ label: 'Home', href: '/en/' }];
  if (section.id === 'notes') crumbs.push(notes);
  else {
    crumbs.push(sections[0].id === section.id && pathname === sections[0].href
      ? { label: 'Resources' } : { label: 'Resources', href: sections[0].href });
    if ([study.id, ...studySections.map(item => item.id)].includes(section.id)) {
      if (pathname !== study.href) crumbs.push(study);
    }
    if (section.id !== 'overview' && section.id !== 'study-careers' && normalize(section.href) !== pathname) crumbs.push(section);
  }
  if (crumbs.at(-1).href || crumbs.at(-1).label !== title) {
    // A section's own page is represented by its supplied page title.
    if (!crumbs.at(-1).href) crumbs.pop();
    crumbs.push({ label: title });
  }
  return `<nav class="portal-breadcrumbs" aria-label="Breadcrumb"><ol>${crumbs.map(crumb => `<li>${crumb.href ? `<a href="${crumb.href}">${escape(crumb.label)}</a>` : `<span aria-current="page">${escape(crumb.label)}</span>`}</li>`).join('')}</ol></nav>`;
}

function scriptTag(script) {
  const options = typeof script === 'string' ? { src: script, defer: true } : script;
  if (!options?.src) throw new TypeError('Shell scripts need a src URL.');
  const source = String(options.src);
  if (!source.startsWith('/en/') && !/^https?:\/\//.test(source)) {
    throw new TypeError(`Shell script URLs must be absolute /en/ paths or HTTP(S) URLs: ${source}`);
  }
  return `<script src="${escape(source)}"${options.type ? ` type="${escape(options.type)}"` : ''}${options.defer !== false ? ' defer' : ''}${options.async ? ' async' : ''}></script>`;
}

/** Body, toc and head are trusted, already-rendered HTML; prose is never rewritten.
 * scripts accepts absolute URL strings or {src, type, defer, async} descriptors.
 */
export function shell({ title, body, url, kind = 'directory', active = '', toc = '', head = '', scripts = [] }) {
  if (!['home', 'directory', 'article'].includes(kind)) throw new TypeError(`Unknown shell kind: ${kind}`);
  const pathname = normalize(url || (kind === 'home' ? '/en/' : '/en/resources/'));
  const section = sectionFor(pathname);
  const current = active || section.id;
  const inStudy = [study.id, ...studySections.map(item => item.id)].includes(current);
  const topCurrent = kind === 'home' ? 'home' : current === 'search' ? 'search' : current === 'notes' ? 'notes' : 'resources';
  const sidebar = kind === 'home' ? '' : `<aside class="portal-sidebar" aria-label="Resources navigation">
<details class="portal-navigation" id="portal-navigation" data-portal-nav open>
<summary>Browse resources</summary>
<nav aria-label="Resource sections"><ul>${sections.map(item => `<li>${link(item, current)}</li>`).join('')}
<li class="portal-nav-group${inStudy ? ' is-active-group' : ''}">${link(study, current, current === study.id)}<ul>${studySections.map(item => `<li>${link(item, current)}</li>`).join('')}</ul></li>
</ul></nav></details></aside>`;
  const contents = kind === 'article' && toc ? `<aside class="portal-toc" aria-label="On this page"><div class="portal-toc-inner"><p class="portal-toc-label">On this page</p>${toc}</div></aside>` : '';
  const top = [
    { id: 'home', label: 'Home', href: '/en/' },
    { id: 'resources', label: 'Resources', href: '/en/resources/' }, notes, search,
  ];
  const pageScripts = [...scripts];
  if (pathname.startsWith('/en/resources/library-paths/') && !pageScripts.some(script =>
    String(typeof script === 'string' ? script : script?.src).split(/[?#]/)[0] === '/en/resources/assets/paths.js',
  )) pageScripts.push(asset('paths.js'));
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escape(title)} · Jiayu Chen</title>
${head}
<link rel="stylesheet" href="${asset('portal.css')}">
<script src="${asset('theme.js')}"></script>
<script src="${asset('portal.js')}" defer></script>
${pageScripts.map(scriptTag).join('\n')}
</head><body class="portal portal-${kind}${contents ? ' portal-has-toc' : ''}">
<a class="skip-link" href="#portal-main">Skip to content</a>
<header class="portal-topbar"><nav aria-label="Main navigation">${top.map(item => link(item, topCurrent)).join('')}<button id="theme-toggle" type="button" aria-label="Switch color theme">Theme</button></nav></header>
<div class="portal-layout">${sidebar}
<main class="portal-main" id="portal-main" tabindex="-1">
${breadcrumbs(title, pathname, section, kind)}
<header class="portal-page-header"><h1>${escape(title)}</h1></header>
<div class="portal-content-layout">${contents}<div class="portal-body"><!-- portal-content:start -->${body ?? ''}<!-- portal-content:end --></div></div>
<footer class="portal-footer">© Jiayu Chen · <a href="/en/disclaimer.html">Disclaimer</a></footer>
</main></div>
</body></html>
`;
}

export default shell;
