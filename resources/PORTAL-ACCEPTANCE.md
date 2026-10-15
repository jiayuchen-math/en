# Portal acceptance

The portal is a presentation change. The six source collections remain library **576**, encyclopedia **150**, terminology **513**, links **80**, programs **225**, and researchers **1,939**. Source facts, source links, review dates, uncertainty, personal notes and rendered mathematics must survive unchanged.

## Automated gates

Run commands below from the repository root. The QA script resolves files relative to itself and also works from another current directory. It only reads files and prints results; it never runs a build or writes snapshots, reports or fixtures.

```text
node resources/test-portal.mjs --baseline
node resources/test-portal.mjs --business-only
node resources/test-portal.mjs
```

`--baseline` prints the current and embedded pre-portal SHA-256 group fingerprints. `--business-only` runs the protection, source identity, pure search and business-rule gates without requiring portal outputs. The default additionally requires generated portal outputs and tests their actual contents. Missing outputs fail acceptance; they are not silently skipped.

The embedded baseline was captured before the portal build on October 15, 2026. It covers 31 note/source files, 24 PDF/TeX/image files, all 150 encyclopedia Markdown files, all nine terminology JSON files, 60 existing business-data files (including the catalogue), and all 150 rendered `.article-body` fragments. The PDF/TeX/image and note groups intentionally overlap. Each file is hashed as bytes, then sorted `relative-path + NUL + file-sha256` lines are joined with LF and hashed again. Article-body lines use the concept ID in place of the path. New generated registry files are allowed alongside the frozen business inputs. Course/reading entrance pages may receive the shared shell; course note bodies and original source files may not change. Preserve source line endings as well as content.

The report's own hashes are checked against actual files and against the independent embedded pre-portal baseline. A report calculated after an accidental content edit cannot establish preservation by itself. Do not replace baseline hashes just to make a changed source pass.

Expected generated contracts:

- `resources/portal-report.json`: `counts`, `directories[{id,url,records,pages,firstPageBytes}]`, `indexBytes`, `directoryIndexBytes`, `protected[[file,sha256]]`, `knowledgeSources[[file,sha256]]`, and `limits`. The six directory IDs are the collection names above.
- `supplementaryDirectories` in that report lists `exposition` and `coverage` with the same directory metadata. A separate QA loop verifies their source-derived membership, stable identities, detail/source retention, 25-row static pagination, old bookmarks, reachable page links and first-page sizes. Exposition reuses canonical library URLs and IDs; coverage uses the existing country IDs and count-audit source data. These derivative views do not increase the six core counts, the core `directoryIndexBytes`, or unified search collections.
- `resources/catalogue-data/{id}/index.json`: `{records,filters,defaults}`. Records have unique stable `id`, `title`, `subtitle`, `summary`, `url`, `fields`, and (where inline detail is provided) a `detail` JSON URL. Program records also retain application-window, separate milestone and background payloads.
- Detail shards map each record ID to its complete original HTML. Full HTML and sources are also present in native `<details>` on the static page. Encyclopedia and terminology records may link directly to their preserved standalone full articles instead of duplicating article bodies in detail shards.
- `resources/data/stable-ui-ids.json`: persistent `library` and `links` maps from original resource URL to assigned ID; library keys remove one trailing slash. Other collections retain their original source IDs. Reordering must not allocate new identities. Retain the registry across builds and require an unchanged registry diff on repeat builds.
- `resources/search/manifest.json`: `{version,collections:[{id,label,url,index}]}`. Every referenced shard is an array accepted by `search-core.js`. All six core collections must appear and match directory IDs/counts exactly; notes/guides are additional collections.

Static pagination uses 25 complete records per page, including the final partial page. Page one keeps the original route. Later pages use `original-stem-page-N.html`. Library default pages show only free works; its complete series uses `catalogue-all-page-N.html`, including `catalogue-all-page-1.html`. Record/search URLs must land on the page actually containing their row. The default library's page count is therefore the free-work count divided by 25, while its report `records` remains 576. Legacy program/researcher bookmarks on the original route must retain an anchor for every old ID; a no-JavaScript legacy anchor index may link to the actual page.

The script checks every static row, pagination link, detail shard, source URL, source locator, original program/researcher/concept identity and search result URL. It also checks retained business text and program milestone separation. It compares every rendered encyclopedia article body byte for byte with its pre-portal baseline and with the existing Markdown/math renderer. Source and translation evidence remain distinct. External links retain the existing new-tab and `noopener noreferrer` contract.

Fact checks account for the already-existing `cleanPageCopy` presentation pass; they do not demand the old shell's HTML strings. Static and lazy details must contain the same full text and links, but may use different wrappers. Contact-source links are required whenever a public email is displayed; extra recorded contact-source links without an email are allowed. No email is inferred from a source URL. Direct knowledge checks additionally retain the existing taxonomy/source validation, distinct terminology senses, reading-route integrity, count-report consistency, safe Markdown/math rendering, duplicate-heading anchors, bundled math fonts and local stylesheet checks.

Size limits are **350 KiB (358,400 bytes)** for the first HTML page of each directory series and **2 MiB (2,097,152 bytes)** for all search shards plus the manifest, uncompressed UTF-8 bytes. `report.indexBytes` counts shards only; `report.directoryIndexBytes` counts the six directory data indexes. These quantities are recomputed from disk. Directory indexes and lazily loaded detail shards are not counted as search shards.

Direct rule tests cover exact opening/closing instants, local deadline-day uncertainty, missing windows, rolling dates, fee permit/expiry/country/year boundaries, documented background gaps, KAIST's existing route rule, public-student record precision and the existing review window, and learning-path cycles. Pure search tests use the actual shared module for accent folding, Chinese, acronyms, relevance ordering, separate “normal” senses, concept merging, exact area filtering, empty results, grouped results, and 25-row pagination. Generated search data is additionally exercised for GCD, SDE, Poincaré duality, “normal”, étale titles, and the Liouville/Chicago researcher case. These are regression checks of the existing recorded rules and data, not a fresh external factual review.

Directory privacy tests call the actual `portal-catalogue-core.js` functions. They supply every named background control with a synthetic answer and legacy `bg.*` URL parameters, including duplicate/unknown parameters. `fieldNames` excludes personal parameters; `readState` ignores legacy answers and starts with a fresh empty background; `stateURL` strips legacy parameters and produces the same public URL with or without local answers. Public filters and pagination still survive. Answers must remain in the current document's memory: do not save them in URLs, history state or browser storage; reloading clears them. The pure-function checks establish the URL/state contract, while browser storage/reload behavior belongs in manual acceptance. The generated program index and HTML must also expose all seven application statuses and all four background-match states, with one control for each field.

## CI stage order

Keep the existing tests unchanged. Several intentionally parse the legacy single-page `.entry` markup or emulate its old catalogue controller. They cannot validate the new paged directory by running against its HTML. In particular, `test-controls.mjs` imports `test-resources.mjs`; `test-knowledge.mjs`, `test-open-library.mjs`, `test-admissions-audit.mjs`, `test-country-coverage.mjs`, and `check.mjs` also have legacy generated-page assumptions.

Parent-owned CI sequence:

1. Install the existing locked dependencies.
2. Run `node resources/build.mjs --legacy`.
3. Run the unchanged legacy suite: `node resources/check.mjs`, `node resources/test-controls.mjs`, `node resources/test-knowledge.mjs --minimum`, `node resources/test-open-library.mjs`, `node resources/test-library-counts.mjs`, `node resources/test-admissions-audit.mjs`, `node resources/test-country-coverage.mjs`, and `node resources/test-editorial-copy.mjs`.
4. Run `node resources/build.mjs` to generate the final portal, then `node resources/test-portal.mjs`.
5. Check committed generated output for drift only after that final build, including the new portal report, manifest/shards, detail/index JSON, registry, pagination pages and shell output. Repeat the full build and require no further diff, including registry changes. Do not run a legacy rebuild after this gate.
6. Complete the browser acceptance below before marking the UI accepted.

The sidecar does not change build wiring, workflows, assets, or existing tests. The parent owns those changes and running builds.

The legacy stage reconstructs its legacy presentation from committed portal output, including the library entrance's original `/en/resources/index.html` backlink with the text `← Mathematics Resources`. The parent reports that the unchanged legacy checks now pass after this restoration. Keep this behavior in legacy rendering; no broad skip flag or weakened assertion is needed. The final portal gate checks shared navigation and real reachable routes separately. The sidecar does not independently run or modify the build/CI stages.

## Browser acceptance — parent required

Automated filesystem checks and pure-function tests do not establish keyboard behavior, responsive layout, loading behavior or visual math quality. Record browser/version, viewport, page, action, expected result, actual result and pass/fail for these checks:

- Desktop (1440×900), narrow laptop (1024×768), tablet (768×1024), phone (390×844 and 320×740), plus 200% zoom: shared top navigation/sidebar, active section, breadcrumbs, row summaries and article contents remain usable without page-wide horizontal overflow. Long formulas may scroll inside their own container. Test light/dark modes and persistence.
- Keyboard only: skip link, menu disclosure, search, filter chips, More filters, row details, previous/next and article contents. Tab order and focus indicators are visible. Enter/Space opens native disclosures; Escape closes the relevant disclosure and returns focus appropriately. Menu focus remains sensible across a viewport change. A row/page change announces result count and moves focus as designed without trapping it.
- Disable JavaScript and reload: follow previous/next through every collection; open full details and sources; use the library default free series and its all-access series; follow an old program/researcher bookmark whose row is on a later page. Notes/PDF/TeX links and future weekly-note slots still work. Source review dates, funding/admission distinctions and uncertainty remain visible.
- With JavaScript enabled: all filters/search work across the full dataset, rather than only the first 25 rows. Check free-library default, “all access”, conjunctions, clear/reset, no results, page clamping after filters, shareable query URLs, browser Back/Forward, country cross-listing (Italy / ALGANT), admission versus scholarship dates (January 6, 2027), invalid date ranges, background explanations and unknown windows. Avoid sending contact messages.
- Background privacy: enter synthetic answers, change filters/pages and use Back/Forward. Confirm that answers stay out of URLs, copied links, history state and persistent browser storage. Reload clears them. Open an obsolete `bg.*` link: it must not prefill answers, and personal parameters must be removed before catalogue requests.
- Network tools: opening the homepage/ordinary directory does not fetch every search shard or all detail shards. Searching loads only as needed. Expanding a row loads the appropriate detail shard once. Reload and test a slow connection, a failed shard request and retry, worker failure/main-thread fallback, and JavaScript disabled. Errors must be announced and browsing links remain available.
- Unified search: test English, Chinese, accents, GCD/HTT/SDE, author/institution/topic queries, grouped versus selected-type results, exact area filtering, separate senses of “normal”, linked terminology/encyclopedia results, no results and results beyond page one. Open a result from a later directory page and confirm it reaches the correct row.
- Compare standalone old/new math visually, including inline/display equations, fractions, matrices, long equations, Chinese terminology, source locators and contents anchors. The byte-level `.article-body` gate is necessary but does not prove CSS and viewport rendering.

Acceptance status must distinguish automated pass/fail from pending manual checks. Do not claim browser acceptance from this script alone.

## Parent-reported browser results — October 15, 2026

The parent reports passing actual browser checks at widths 360, 390, 768, 1024 and 1440 pixels, with no page overflow. At 390 pixels the first library row began at vertical position 644 pixels. Desktop article content stayed within 720 pixels, beside a 216-pixel contents column. Viewport heights, browser/version, zoom and theme cases were not included in this report.

The parent also reports eight free Real Analysis results, detail loading with retained sources, Back restoring scroll position 386, working page-two routing, Escape returning navigation focus, and the old `#dominic-vella` bookmark automatically reaching page 11. These are parent-observed results, not browser actions performed by this sidecar. Unreported checklist cases above remain unverified here.

## Final sidecar review — October 15, 2026

Status: **automated acceptance passed; assigned QA files frozen for publication**. The final run of `node resources/test-portal.mjs` completed with **16 passed checks, zero failures, exit code 0**. The earlier 15-check result gained the requested background-privacy regression; no existing check was removed. The script also passes Node syntax validation.

The independently captured pre-portal fingerprints remain unchanged for protected notes, PDF/TeX/images, all 150 encyclopedia Markdown sources, all nine terminology JSON files, the 60 existing business-data files, and all 150 rendered article bodies. Counts remain library 576, encyclopedia 150, terminology 513, links 80, programs 225 and researchers 1,939. Exposition and coverage pass their separate derivative-view checks without increasing these counts or duplicating search collections.

The final regression also checks recorded admission milestones when an opening window is absent: the summary retains the recorded label/date rather than saying “Deadline not verified”, and static rows retain that summary. Exact milestone payloads and original application-window data remain unchanged, so a known admission date does not create an inferred opening window. Source-data fingerprints and search/directory identity checks pass; this presentation change does not revise recorded years.

Measured at final review: the largest core directory first page is 297,371 bytes; the largest supplementary first page is 48,413 bytes; the library all-access first page is 55,253 bytes. Each is below 358,400 bytes. After the final access-label preview update, search shards total 1,435,149 bytes plus a 1,222-byte manifest, totaling 1,436,371 bytes, below 2,097,152 bytes. The report's 28 protected-file entries and 150 knowledge-source entries match disk; the independent baseline covers the additional protected categories described above.

The final access-label update was independently checked across all 576 library search previews: each begins with its directory record's reading-access and link-access labels, including all 156 institutional/purchase entries. Search previews may add these labels and shorten descriptions; source parity requires the original IDs, titles and destinations, not identical preview strings. The existing test already permits this presentation difference and was not weakened or edited for the update. Protected-file and knowledge-source report paths are in ASCII/code-unit order after the generator's deterministic walk change; cross-platform repeat-build verification remains with parent CI.

Browser evidence and its scope are recorded in the parent-reported section above. The parent owns publication, CI builds, repeat-build verification and any remaining browser cases. This sidecar changed only `resources/test-portal.mjs` and `resources/PORTAL-ACCEPTANCE.md`, performed no builds and made no publication changes. No further edits to these two files are planned after this review.
