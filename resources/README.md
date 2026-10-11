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

The second expansion adds 36 non-AG works across analysis/PDE, probability/dynamics, geometry/topology, number theory, algebra/logic and foundational/discrete study. `library-access.mjs` derives access badges without modifying legacy records. An open PDF may have personal-use-only terms: these labels describe acquisition routes, not open redistribution licences. Publisher samples and incomplete author excerpts are not complete free books.

`application-windows.mjs` holds 11 explicitly sourced windows. Study & Careers initially shows the 8 windows open on the review date; `All programmes` or `?applications=all` restores all 121 pathways. The browser uses its clock to remove expired windows; it does not contact or monitor admission portals or invent a new year's dates. Where the closing hour is unknown, the shortcut conservatively excludes the UTC deadline day; where the opening hour is unknown, it starts on the following UTC day. Actual admission and scholarship cutoffs remain on the official source. Future scheduled windows are not a promise that a portal will open or remain open. Resetting filters shows all programmes.

Library and Reading Notes are sibling sections of Mathematics Resources. Old library URLs are retained, but the Library's top-level return link goes to the resources hub. Site-wide external HTTP(S) anchors open a new tab with `noopener noreferrer`; internal links keep normal navigation. Building updates only those anchor attributes in unrelated note pages, not their prose or formulas.
