# Mathematics Resources

Static GitHub Pages content; no server, service account or paid dependency is required by the published site.

The source catalogues are in `data/library-source.mjs`, `data/links-source.mjs` and `data/programs-source.mjs`. The builder exports JSON and full HTML so every entry remains accessible without JavaScript. Shared client-side controls provide combined filtering and 25-entry pages when JavaScript is available.

Build and validate with Node.js:

```text
node resources/build.mjs
node resources/check.mjs
node resources/test-controls.mjs
```

`data/library-original.json` is the October 8, 2026 preservation baseline: original entries must remain unchanged at the start of their subject lists. New records are appended. The two old permitted PDF archives and course-note files are not rewritten.

The one-time editorial review date is October 11, 2026. A reviewed programme link does not mean every intake, fee, funding condition or international route was verified. Unknown fields are marked explicitly, and old-cycle notices are labelled historical. The site is a programme-discovery directory, not a complete current admissions database. Waterloo’s conflicting official deadlines and Bonn’s general-versus-specific calls are documented rather than silently reconciled.

`audit-links.mjs` is an optional network diagnostic. It records blocked requests, TLS failures and redirects locally; these do not by themselves establish a dead link. No certificate validation is disabled. Confirm failed requests through the author/institution or ordinary browser. Links provide access at the original source; inclusion does not grant republication rights.

Counts are distinct works/programme pathways, not versions, chapters, translations or repeated subject tags. Two-volume Ayoub and Joyce works each count once; Stacks Project is counted once across its two legacy classifications. Joint degree programmes count once.
