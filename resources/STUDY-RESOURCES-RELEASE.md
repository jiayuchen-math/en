# Study resources: undergraduate routes and advanced reading

This release adds short direction introductions, specific subject study plans,
and external concept-reading guides. It does not replace the original articles
or turn external links into purportedly authored encyclopedia articles.

## Content boundaries

- Twelve direction introductions live in the two
  `content/direction-introductions-*.json` files. Their bodies are Markdown,
  rendered with the existing build-time KaTeX renderer.
- Twenty-nine subject plans live in `data/course-study-guides.json`. Each
  selects a primary text, a limited set of alternatives, public practice,
  concrete readiness tasks, and skip guidance.
- Sixty distinct external reading guides live in the two
  `data/concept-readings-*.json` files. These have a separate content kind and
  independent source records; they do not need a fabricated long article or
  an unsupported new Chinese terminology record.
- Existing terminology IDs are reused when the mathematical sense matches.
  Search merges the concept with that terminology record and preserves both
  destinations. Sources, authors, aliases, and documented translations remain
  searchable.

The portal report distinguishes original articles, external reading guides,
terminology senses, direction introductions, and subject study plans. The
original 150 articles, 513 senses, 576 library resources, 80 learning links,
225 programme routes, and 1,939 researcher profiles remain protected by the
pre-existing immutable checks. New content has additional validation rather
than a regenerated protection baseline.

## Verification

Run from the repository root:

```text
node resources/build.mjs --legacy
node resources/test-knowledge.mjs --minimum
node resources/check.mjs
node resources/test-controls.mjs
node resources/test-open-library.mjs
node resources/test-admissions-audit.mjs
node resources/test-country-coverage.mjs
node resources/test-editorial-copy.mjs
node resources/build.mjs
node resources/test-portal.mjs
node resources/test-goal-paths.mjs
node resources/test-study-content.mjs
node resources/build-site.mjs
node resources/test-site-migration.mjs
```

Check a second build for deterministic output. Before publication, compare with
the current GitHub head, retain concurrent changes, and preserve every old note,
PDF, TeX, image, original article body, and terminology source. After publication,
confirm the Pages deployment and sample live paths. This release does not add
an ongoing monitoring service.

## Verification record — 2026-10-16

- Published content target validated locally: 12 direction introductions,
  29 subject study plans, 60 external concept-reading guides. Original article
  and terminology counts remain 150 and 513; library count remains 576.
- External-guide distribution: algebraic geometry 24; higher categories and
  homotopy 6; analysis/PDE 6; geometry/topology 6; number theory 5;
  probability 4; combinatorics, logic, and dynamics 3 each.
- Legacy checks passed; all 17 portal acceptance groups, goal-path tests,
  study-content tests, and deployment URL/byte-preservation checks passed.
- An independent repeated-build fingerprint comparison found no differences.
- Isolated browser checks passed at 360, 390, 768, 1024, and 1440 pixels in
  light/dark modes, including filtering, first-click navigation, Back-state
  restoration, reset, accented/acronym/Chinese search, no results, keyboard
  navigation, no-JavaScript formulas/pagination, and old `/en/` addresses.
- Browser testing found and fixed a pre-existing blur/change redraw that could
  swallow the first click on a filtered result. Unchanged controls no longer
  trigger another redraw on blur.
- Public solutions are not inferred from the availability of exercises.
  Unverified solution coverage remains identified in the relevant study plan;
  an inaccessible Sarig continuation was excluded from verified readings.

## Reading polish and mathematical illustrations — 2026-10-16

- All twelve introductions gain content-specific subheadings and working
  contents links, without replacing the original paragraphs.
- Thirteen original study checks, across proof writing, calculus, linear
  algebra, real analysis and algebraic geometry, gain separate hints and worked
  solutions. Prompt matching is validated so an edited question cannot silently
  retain an unrelated solution. These are not answer keys for external textbooks.
- Four groups of original inline vector illustrations explain nonreduced
  points, smooth versus singular tangent spaces, pointwise versus uniform
  convergence, and contractible versus noncontractible loops. They have native
  accessible names/descriptions, theme-aware colours, captions and stacked
  narrow-screen panels. No external image service or client rendering script
  is required, and existing media protection is unchanged.
- The new “Reading a mathematics text” guide is reachable from Learning Paths
  and unified search. It discusses examples, reconstructing proofs, using hints,
  and keeping a precise record of remaining gaps.
- Local content, 17-group portal acceptance, URL/media preservation, and browser
  checks passed, including 360–1440px light/dark views, section anchors, keyboard
  solution disclosures, and no-JavaScript figures/formulas/solutions.
