# Learning editorial sources and checks

Editorial review date: 2026-10-17.

## Scope and authorship

This task added only `resources/data/learning-editorial.json` and this audit file. The JSON status is **Complete: 29 subjects**. It contains 59 comparisons and 58 continuation links. The extra comparison is the Etingof homological-algebra selection, which makes the inherited Baker-to-resolutions route explicit.

The prose is Codex-assisted editorial guidance, not Jiayu Chen's writing, personal experience, endorsement, or a compulsory curriculum. Reading strategies and continuation reasons are editorial judgments. Cited works retain their own terms.

Inputs read:

- `resources/data/course-study-guides.json`
- `notes/reading-notes/library/catalogue.json`
- `resources/data/learning-paths.mjs`

The catalogue supplies the 29 subject IDs. The learning-path node `sheaves` is a route step associated with algebraic geometry, not an additional subject.

## Date semantics

`reviewed: 2026-10-17` means the editorial text was reviewed on that date. It does not mean every source was freshly checked.

Of the 59 comparison records:

| Evidence | Records | Meaning |
| --- | ---: | --- |
| 2026-10-17 | 16 | Sources actually opened in this task: six pilot works and ten additional source checks with the limited scopes below. |
| 2026-10-16 | 28 | Existing course-study evidence, explicitly reused. |
| 2026-10-11 | 14 | Existing catalogue evidence, explicitly reused. |
| 2026-10-13 | 1 | Existing catalogue evidence for Bruin, explicitly reused. |

The 43 inherited checks are not counted as fresh checks. The source dates, original work identities, and access distinctions were preserved. Non-pilot primary locators are inherited from the course-study file; other unnumbered selections are explicitly topic-based. The JSON metadata records the fresh scopes and the inherited Etingof and Stein exceptions.

## Direct primary-source checks for the pilots

Both works in each pilot were opened directly on author or university sites on **2026-10-17**. Page references below follow the specified edition.

| Subject and source | Verified reading selection | Scope and limits |
| --- | --- | --- |
| Algebraic geometry: [Milne, Algebraic Geometry](https://www.jmilne.org/math/CourseNotes/AG.pdf) | Version 6.10: chapter 2, sections a-e and h-j; chapter 4, sections a and d. Optional chapter 3, a-f. | Title, version, contents and variety-first scope inspected. Chapter exercise locations checked; solution coverage not audited. |
| Algebraic geometry: [Vakil, The Rising Sea](https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf) | October 21, 2025 edition: 2.1-2.4, 3.1-3.5, 4.1-4.3; category review 1.1-1.3. | Contents and actual Exercises 2.2.A and 2.2.D-E inspected. This is the 2025 author edition, not the separate 2024 catalogue archive. |
| Real analysis: [Lebl, Basic Analysis I](https://www.jirka.org/ra/realanal.pdf) | Version 6.3, May 15, 2026: 2.1-2.4, 3.2-3.4, 6.1-6.2. The final pair starts on printed pp. 227 and 234. | Title, edition, licence, contents and exercise bodies inspected, including the sum/product contrast in 6.1.4-6.1.6. Public solutions not verified. |
| Real analysis: [Trench, Introduction to Real Analysis](https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf) | Free Hyperlinked Edition 2.04: 2.1-2.2, printed pp. 30-72; 4.1-4.2, pp. 179-199; 4.4, pp. 234-256. | Edition, contents, selected-answer location and instructor-manual restriction inspected. Selected answers begin on printed p. 549; the complete instructor manual requires faculty verification. |
| Probability: [Grinstead-Snell, CHANCE version](https://math.dartmouth.edu/~prob/prob/prob.pdf) | July 4, 2006 adaptation: 4.1-4.2, 6.1-6.3, 8.1, 9.1-9.2, 11.1 and 11.3-11.4. | Adaptation credits and contents checked. The [authors' page](https://chance.dartmouth.edu/Doob/probability_book/book.html) distinguishes public odd-numbered answers from complete solutions supplied to instructors by request. The linked odd-answer PDF opened; cross-edition exercise matching was not audited. |
| Probability: [Lawler, Notes on Probability](https://www.math.uchicago.edu/~lawler/probnotes.pdf) | March 21, 2016 notes: sections 1-3, PDF pp. 1-12; Exercise 4.1 on PDF p. 13. | Title, prerequisites, independence material and actual exercises inspected. Graduate measure/integration preparation is explicit. The [university author page](https://www.math.uchicago.edu/~lawler/reu2023.html) confirms its role alongside graduate analysis. Public worked solutions not verified. |

## Additional fresh checks: limited scope

These ten checks do not turn every exercise, section or access claim into a fresh full-text audit.

| Work | What was opened on 2026-10-17 |
| --- | --- |
| [forall x: Calgary](https://forallx.openlogicproject.org/) | Official project page: topics, full HTML/PDF routes and solutions-booklet link. Individual answers and coverage not audited. |
| [Hefferon, Linear Algebra](https://hefferon.net/linearalgebra/) | Author page: coverage, free download route, calculus prerequisite and author's statement about worked solutions. Complete exercise-to-solution coverage not independently audited. |
| [Milne, Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf) | Full PDF and contents: version 5.10, September 2022; chapters 1-3 and later chapter 9 selection identified. |
| [Altman-Kleiman, A Term of Commutative Algebra](https://dspace.mit.edu/entities/publication/b9217cf9-50c8-4367-9d8a-01d69d686b8d) | MIT repository record: authors and listed WWCM.pdf download. The direct PDF request returned HTTP 429; full text and solutions were not inspected today. The JSON makes this limit explicit. |
| [The Stacks Project](https://stacks.math.columbia.edu/) | Official index and contents: chapter 12 Homological Algebra and chapter 13 Derived Categories. Individual tags and solution coverage not audited. |
| [Etingof, Lie Groups and Lie Algebras I](https://math.mit.edu/~etingof/lnlg.pdf) | Author PDF and contents: lecture 1, 1.1-1.7; lecture 2, 2.1-2.6. Later representation reading needs a separate selection. |
| [Dyatlov, Distributions, Elliptic Regularity, and Applications to PDEs](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf) | Author PDF dated October 2, 2026 and contents: 1.2-1.4 and 2.1-2.4, including listed exercise sections. Worked solutions not audited. |
| [Petrunin-Zamora Barrera, What Is Differential Geometry?](https://arxiv.org/pdf/2012.11814) | Author text: credits, version 7 dated December 31, 2025, licence and opening contents. Exercise solutions not audited. |
| [Milne, Class Field Theory](https://www.jmilne.org/math/CourseNotes/CFT.pdf) | Author PDF: version 4.03, August 6, 2020; local/global abelian class-field scope. No fresh exact chapter assignment or exercise audit. |
| [Stanley, Algebraic Combinatorics](https://math.mit.edu/~rstan/algcomb/algcomb.pdf) | MIT author draft: title Topics in Algebraic Combinatorics, February 1, 2013, contents and walk-counting Theorem 1.1. Chapter 1, printed pp. 9-20, selected. The published-book catalogue title is retained, with the different draft title and pagination explicitly identified. |

## Selection and access decisions

- Dembo's existing probability-note URL failed to open. The final comparison instead uses Lawler's existing catalogue work, whose university PDF opened.
- Wilf's catalogue download page failed to open; the alternate university hostname returned HTTP 403. The final comparison instead uses Stanley's existing catalogue work. No fresh free-access claim is made for Wilf.
- Author/project landing pages, repository records, complete PDFs, previews, selected answers and instructor-only materials remain distinct. Publisher previews are never described as complete free books.
- Baker's phrase “alternative text” refers to the existing Etingof homological-algebra selection. That work is now a separate comparison; the Stacks reference is a third option.
- Stein's modular-form range and exercise locations reuse the course-study alternative and practice evidence dated 2026-10-16, rather than the older catalogue check.
- Practice attached to another work or edition is explicitly identified, including Etingof, Stanford EE261, Stein and the separate combined CLP-1 edition.

## Local verification

Read-only checks passed:

- Valid JSON, version 1, exactly the 29 catalogue subjects and every required field.
- Two comparisons per subject, with three for homological algebra: 59 total.
- Combined opening/readingApproach lengths of 130-151 whitespace-separated words.
- All 58 continuation IDs resolve to existing topics; no self-links.
- Every comparison title, author and work URL matches an existing catalogue or course-study record.
- Every work/source URL is an existing credential-free HTTPS reference. This is a structural/reference check, not a claim that all inherited links were freshly fetched.
- Every older checked date is backed by an existing record; every 2026-10-17 date has an actual primary-source check and documented scope.
- All 29 comparison sections and continuation sections rendered successfully in memory with the current renderer; generated files were not written.

No build was run by this task. Existing source, renderer, build and generated pages were not edited. No commit or GitHub write was made.
