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

The latest batch adds 53 foundation-and-breadth works across 13 non-AG subjects, for 239 distinct works. The 29 subject paths use explicit dependency nodes and editorial skip advice; marking a node familiar is reversible, does not hide anything and is not stored or uploaded.

Study & Careers defaults to all 149 routes: 88 masters, 45 doctorates, 9 undergraduate, 3 preparatory, 2 postdoctoral and 2 visiting routes. The latter categories are not counted as degrees. Continents and country/territory tags replace collection-quota groups. Joint degrees are counted once and tagged by verified full-partner countries.

The 11 original reviewed windows plus 2 new Latin American windows retain source dates. Application, scholarship, test registration and supporting-document dates are distinct. The client clock supplies a status, not a live portal check. Date-only uncertainty is retained on the source jurisdiction’s calendar day; no exact closing hour or annual recurrence is invented. Programmes without a known window remain visible by default. Date range filters exclude unknown dates only when a range is requested.

The optional background tool is a local explanation layer, not official eligibility assessment. It does not upload, save, rank by nationality or hide unmatched programmes by default. Only explicitly known broad qualifications and a specific KAIST citizenship rule are encoded. Fee rules are limited to Swedish exemptions, the historical 2026–27 Dutch statutory category and Oxford undergraduate status guidance. A student permit never automatically grants home fees; incomplete rules remain unknown. Published rates have their own year and charging period. Admission, fees, funding and immigration are separate.

The first researcher directory contains 20 source-linked affiliations across five continents. Current student vacancies are not confirmed. Two researchers have qualifying public completion records in October 11, 2023–October 11, 2026; year-only boundary records are not assumed in-range. Degree completion is not recruitment, a different institution is not rewritten as the supervisor’s current institution, and no destination job is invented.

Run `node resources/test-controls.mjs` for combined filters, pagination, date-only/timezone boundaries, fee-status edge cases and public-record checks. Structural validation covers full static entries and internal links. `build-report.json` reports actual counts, not targets. Network failures and editorial source corrections are documented in `REVIEW-2026-10-11.md`.

Library and Reading Notes are sibling sections of Mathematics Resources. Old library URLs are retained, but the Library's top-level return link goes to the resources hub. Site-wide external HTTP(S) anchors open a new tab with `noopener noreferrer`; internal links keep normal navigation. Building updates only those anchor attributes in unrelated note pages, not their prose or formulas.
