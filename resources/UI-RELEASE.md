# Mathematics Resources UI release — 2026-10-15

This release changes presentation, navigation and loading, not the underlying mathematics, admissions facts or researcher records. The previous published commit is `d1af257459ac7d92362d7d214d47fed14f70744d`; this remains the rollback reference.

## Delivered

- A narrow personal home, wider resource directories with shared navigation, and a 720px article column with a wide-screen contents rail.
- A common light/dark theme, compact mobile filters, accessible disclosures, native page links, result counts and removable filter chips.
- Static 25-entry pages for the six main directories and country coverage; full source-backed details remain available without JavaScript. Library defaults to the 386 freely readable works, with a complete all-access series.
- A sharded, worker-backed search at `/en/resources/search/`, covering the six collections, three actual personal-note pages, and 70 guides/subject entrances. Encyclopedia/terminology pairs merge in all-types results but remain separate under type filters.
- Stable IDs, legacy anchor resolution, shareable directory/search filters and page numbers, and browser history/scroll restoration. Personal background answers stay in memory in the current document; they are not put in URLs or persistent storage.
- Existing Education removal, the absence of the Chinese-site link, and the centralized disclaimer remain intact. Weekly-note file locations and future week slots are retained.

## Counts and size gates

| Collection | Records | First HTML, bytes |
| --- | ---: | ---: |
| Library | 576 | 127,857 |
| Encyclopedia | 150 | 19,997 |
| Terminology | 513 | 19,761 |
| Learning links | 80 | 42,687 |
| Study routes | 225 | 284,916 |
| Researchers | 1,939 | 297,371 |

The complete unified-search shards total 1,435,149 uncompressed UTF-8 bytes, below 2 MiB; the manifest is additional and remains within the same limit. Detailed entry JSON is separate and fetched only for opened dynamic rows. The homepage does not load the search corpus. The retained subject pages are reading guides at their original addresses, rather than additional copies of the unified search database.

## Verification performed

- The unchanged legacy test suite was run against the legacy rendering stage: knowledge, source identities, controls, free reading, counts, admissions audit, country coverage and editorial copy.
- Cloud validation exposed only an LF/CRLF checkout difference in four old calculus source files. Their content was verified against the pre-redesign Git blob IDs. Hashing now canonicalizes those four known text files only, retaining the original independent baselines; no note file was edited.
- All 16 final portal gates passed, including independent pre-redesign hashes of notes/attachments, all 150 rendered encyclopedia bodies, 150 Markdown sources, nine terminology source files and existing business data. Counts, references, locators, review dates, application milestones and fee-status rules are retained.
- Browser checks covered 360, 390, 768, 1024 and 1440px, the dark theme, light-theme switching, article contents and mathematics without page-wide overflow. At 390px the first library result begins around 645px rather than below the first screen.
- Tested keyboard Escape/focus return, real-analysis plus free-access filtering, detail loading, clearing, page-two URLs, Back restoration, and an old researcher bookmark resolving to page 11.
- A sandboxed iframe with scripts disabled was used to follow that old bookmark through its static direct-entry link and open complete researcher details and sources. The temporary test wrapper was removed.
- Tested Chinese search, GCD, accent-insensitive Poincare duality, distinct senses of normal, concept merging and grouped results. A warm “normal” query updated results in approximately 18.1ms through the post-render animation frame in the local browser; this is a sample on this computer, not a cross-device guarantee.
- Tested admission and scholarship date filters independently, invalid date ranges, optional background matching and the Swedish documented fee-exemption explanation. No personal background answer appeared in the address bar.

Slow-network and browser-engine failure injection are covered by controller/service tests rather than a claim of exhaustive physical-device testing. External sources were not re-audited for new facts in this UI-only release. See `PORTAL-ACCEPTANCE.md` and `portal-report.json` for the reproducible gates and recorded byte counts.

## Build and maintenance

Run `node resources/build.mjs` for the final portal and `node resources/test-portal.mjs` for its acceptance checks. The `--legacy` build stage exists only to exercise the original business/interface tests; do not publish that intermediate stage. CI performs those tests, rebuilds the final portal, verifies committed generated files, and repeats the build to check determinism.

Retain `resources/data/stable-ui-ids.json` when editing catalogue titles. Do not allocate replacement IDs from a changed title. Source review dates are not UI build dates.
