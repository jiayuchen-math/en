# Knowledge content contract

New original content only: CC BY-SA 4.0. Do not copy source prose or textbook exercises.
Review date: actual date of primary-source inspection, initially 2026-10-14.

## Encyclopedia

One Markdown file per entry at `resources/content/encyclopedia/<area>/<id>.md`.
JSON front matter (not YAML): `---`, JSON object, `---`, then English Markdown.
Metadata:

```json
{"id":"continuous-function","title":"Continuous Function","chinese":"连续函数","aliases":[],"area":"analysis","topic":"real-analysis","level":"Undergraduate","summary":"One accurate sentence.","prerequisites":["limits"],"related":["uniform-continuity"],"references":[{"id":"source-id","label":"Author — title","url":"https://author.example/text.pdf","locator":"Section or theorem actually inspected","checked":"2026-10-14","note":"What it supports"}],"contributors":["Mathematics Resources editorial team"]}
```

Required H2 headings: Overview; Prerequisites; Definition and conventions;
Intuition; Examples and non-examples; Important properties; Connections and further reading.
Include 350–750 words of substantial original explanation, explicit hypotheses and at least one worked example or counterexample. Research overviews may replace a full technical definition with an explicitly scoped formulation and precise reference. Do not claim peer review or attribute generated articles to the site owner's personal work. Main builder creates Contents, Sources, translation links and contribution controls.

TeX uses `$...$` inline or `$$` display blocks. KaTeX standard commands only; `\\mathbb`, `\\operatorname`, `\\begin{aligned}` accepted. No `\\label`, `\\ref`, custom macros, HTML, TikZ, or remote scripts. Use ordinary Markdown links for citations; references must have concrete locators. Prerequisites/related IDs may refer to terminology IDs; builder only links existing entries.

## Terminology

Each area owns `resources/data/terminology-<area>.json`, a JSON array.
One record per concept/sense, not per spelling or language variant.

```json
{"id":"continuous-function","english":"continuous function","chinese":"连续函数","aliases":["連續函數"],"area":"analysis","topic":"real-analysis","level":"Undergraduate","definitionEn":"A self-contained definition with assumptions.","definitionZh":"对应的中文短释义。","example":"An actual mathematical example; TeX allowed.","distinction":"A specific relevant contrast or convention; not generic boilerplate.","translationStatus":"Literature usage","definitionSources":[{"label":"Author — title","url":"https://author.example/text.pdf","locator":"Section actually inspected","checked":"2026-10-14"}],"translationSources":[{"label":"Chinese university notes / published terminology","url":"https://official.example/chinese.pdf","locator":"Exact chapter / section / entry containing the Chinese name","checked":"2026-10-14"}],"contributors":["Mathematics Resources editorial team"]}
```

translationStatus: `Standardized` only with explicit normative terminology evidence;
otherwise `Literature usage`, `Community usage`, or `Terminology unsettled`.
Definition and translation evidence are separate. An English-only source cannot prove a Chinese translation. Do not fabricate locators or dates. Records without inspected evidence remain drafts and are not included in published counts.

Areas: foundations, algebra, analysis, geometry-topology, number-theory, probability,
combinatorics, dynamics, category-theory. Topics must be existing library topic IDs.
Levels: Undergraduate, Graduate, Research. IDs are lowercase ASCII hyphenated and globally unique.
