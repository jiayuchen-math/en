# Mathematics knowledge collection

This directory stores the new encyclopedia's original English Markdown explanations, the contribution contract, and internal source-review records. Terminology data is stored separately in `../data/terminology-*.json`. The generated reading pages live at `/en/resources/encyclopedia/` and `/en/resources/terminology/`.

The first-edition corpus contains 100 encyclopedia articles and 500 distinct terminology senses. Aliases and translations do not count as separate senses.

| Area | Articles | Terminology senses |
| --- | ---: | ---: |
| Foundations and logic | 10 | 50 |
| Algebra and algebraic geometry | 14 | 70 |
| Analysis, measure and PDE | 18 | 90 |
| Geometry and topology | 18 | 90 |
| Number theory | 12 | 60 |
| Probability | 8 | 40 |
| Combinatorics | 8 | 40 |
| Dynamical systems | 6 | 30 |
| Category theory | 6 | 30 |

Article levels are 60 Undergraduate, 30 Graduate and 10 Research. Research introductions specify the construction or model being discussed rather than claiming to provide full research proofs. Internal AI-assisted drafting, source inspection and correction records are available in `reviews/`; these are not external peer review. Individual sources retain their actual inspection dates, including October 14 and 15, 2026. A later local validation does not advance every source date.

## Build and check

```text
npm ci --prefix resources --ignore-scripts --no-audit --no-fund
node resources/build.mjs
node resources/test-knowledge.mjs --release
node resources/check.mjs
node resources/test-controls.mjs
```

`--release` checks the exact first-edition totals and distribution. Later additions may use `--minimum`, which preserves the first edition's per-area minimums. The checks cover stable IDs, bilingual and alias search, combined filters, pagination, source-role separation, generated content, formula rendering, internal links, safe external tabs and the unchanged library free-reading default. They do not mathematically prove an article or independently inspect a source URL.

Commit the generated pages with the source change. The read-only GitHub workflow validates the build and checks that generated knowledge files are committed; it does not merge or publish a visitor's contribution automatically. [CONTRIBUTING.md](CONTRIBUTING.md) describes editorial review, and [SCHEMA.md](SCHEMA.md) defines source metadata.

## Licence boundaries

New original encyclopedia and terminology explanations use CC BY-SA 4.0 with the recorded contributors. Existing personal notes, third-party books, citations and the rest of the website are not relicensed by this addition. KaTeX's bundled styles and fonts retain the MIT licence included alongside those assets. External books remain linked at their original sources.
