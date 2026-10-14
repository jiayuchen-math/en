# Algebra, category theory, and combinatorics substantive audit

Audit date: 2026-10-14. Contributor: Codex, AI-assisted source audit. This is an editorial audit, **not external peer review**, a certification of correctness, or a publication approval.

## Outcome and scope

No definite false theorem, wrong worked example, or English–Chinese mathematical sense reversal was established in the reviewed snapshot. Three source-locator or source-scope defects need correction, one Chinese terminology citation should be made more explicit, and one boundary convention deserves clarification. These have different evidential strengths and are separated below.

Read `resources/content/SCHEMA.md` first. Read all 28 article bodies and metadata, and all 140 records in the three corresponding terminology files, including definitions in both languages, examples, distinctions, and source fields. The terminology scope includes the additional prerequisite concepts, not just the 28 matching article IDs.

| Area | Articles | Terminology records |
| --- | ---: | ---: |
| algebra | 14 | 70 |
| category-theory | 6 | 30 |
| combinatorics | 8 | 40 |
| Total | 28 | 140 |

Mathematical review was a substantive reading and independent checking of elementary calculations, hypotheses, variance, and conventions. External verification was targeted primary-source inspection, not an exhaustive reinspection of every citation. A `checked` date in an input record was not treated as proof that its source had been inspected. No content, terminology, build, or HTML file was edited; no build or publication operation was run. This review does not cover the separately owned number-theory, analysis, or geometry-topology work.

All 28 articles have matching terminology IDs. The reviewed contributor strings identify AI-assisted editorial compilation, and the terminology statuses are `Literature usage`; no external peer-review or normative standardization claim was found in these inputs.

## Confirmed citation findings

### F1 — P2: The dg-category article points to the wrong Keller subsection

Location: `resources/content/encyclopedia/algebra/differential-graded-category.md:2`, reference `keller-dg`, and the final reading link at line 47.

The metadata names “Section 2.1, Differential graded categories,” and the body repeats §2.1. In the explicitly linked v5 paper, §2.1 is **Notations**; §2.2 is **Differential graded categories**. The matching terminology record already points to §2.2 (`resources/data/terminology-algebra.json`, ID `differential-graded-category`, definition source).

Correction: change the article's definition locator and reading-link text to §2.2; retain §2.1 only as background for the grading and sign conventions. The displayed Leibniz sign and morphism-complex differential are consistent with the source; this finding concerns the locator, not the mathematics. Inspected evidence: [Keller, *On Differential Graded Categories*, v5, §§2.1–2.3, printed pp.2–4](https://arxiv.org/pdf/math/0601185v5).

### F2 — P2: Algebra terminology uses source bundles instead of concept-specific locators

Location: `resources/data/terminology-algebra.json`, the definition-source groups below. Representative first locator lines are 191, 521, 884, and 1519.

Forty-seven records repeat four broad locators spanning several chapters or widely separated sections. They do not identify which passage defines the individual concept. This falls short of the schema's requirement for a concrete inspected locator and makes evidence difficult to reproduce. It is a traceability defect; repetition alone does not establish that the mathematical definitions are false or that inspections were fabricated.

| Repeated definition-source locator | Records | Affected IDs |
| --- | ---: | --- |
| Hefferon, Chapters Two, Three, Five, “relevant definitions” | 10 | `vector-space`, `linear-map`, `linear-independence`, `vector-basis`, `vector-space-dimension`, `linear-map-rank`, `rank-nullity-theorem`, `eigenvalue-linear-map`, `characteristic-polynomial-linear-map`, `diagonalizable-linear-map` |
| Milne GT, Chapters 1, 4, 5 | 10 | `subgroup`, `cyclic-group`, `group-homomorphism`, `group-homomorphism-kernel`, `normal-subgroup`, `quotient-group`, `group-action`, `group-orbit`, `group-stabilizer`, `sylow-subgroup` |
| Milne CA, Sections 1–5 and 14 | 19 | `commutative-ring`, `ring-unit`, `zero-divisor`, `integral-domain`, `field`, `ring-ideal`, `quotient-ring`, `prime-ideal`, `maximal-ideal`, `polynomial-ring`, `irreducible-element`, `prime-element`, `unique-factorization-domain`, `principal-ideal-domain`, `euclidean-domain`, `noetherian-ring`, `localization-commutative-ring`, `local-ring`, `algebraic-prime-spectrum` |
| Milne FT, Chapters 1–3 plus unspecified finite-field discussion | 8 | `field-extension`, `algebraic-element`, `minimal-polynomial-field-extension`, `splitting-field`, `separable-field-extension`, `normal-field-extension`, `galois-extension`, `finite-field` |

Fifteen further records share two broader Clark bundles: nine basic module entries reuse §§2.1, 2.2, 2.4, and six homological entries reuse §§2.3, 2.5, 2.7 plus Sections 3 and 6. Those named subsections provide more direction, but should also be narrowed where the definition can be identified. Thus 62 of 70 definition records use grouped locators; the 47 above are the clearest cases needing repair. Several translation-source groups likewise end in “各相应 definition 与 index 项” or list several unrelated sections; replace those with the particular definition, index entry, or terminology passage actually inspected.

Concrete replacements independently located in this audit include:

- `group-action`: Chapter 4, Definition 4.1 in [Milne, *Group Theory*](https://www.jmilne.org/math/CourseNotes/GT.pdf).
- `localization-commutative-ring`: §5, construction preceding Proposition 5.1 and Proposition 5.1; `local-ring`: §2, paragraph following Definition 2.6, in [Milne, *A Primer of Commutative Algebra*](https://www.jmilne.org/math/xnotes/CA.pdf).
- `galois-extension`: Chapter 3, “Separable, normal, and Galois extensions,” Definition 3.9 for the finite convention; Chapter 7's opening paragraph for the general algebraic convention (see F4 below). For the finite correspondence, Theorem 3.17. `finite-field`: Chapter 4, “Finite fields,” rather than Chapters 1–3, in [Milne, *Fields and Galois Theory*](https://www.jmilne.org/math/CourseNotes/FT.pdf).
- `short-exact-sequence-modules`: §2.3, Exercise 2.8 for splitting; `flat-module`: §2.7, opening definition, in [Clark, *MATH 8030 Introduction to Homological Algebra*](https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf).

A concrete support concern within this group is `euclidean-domain`: I did not locate its Euclidean-function definition in the cited Milne range, including the inspected factorization section. The definition itself is standard. Li's author source explicitly supplies the division condition under label `prop:Euclidean-ring`, in “唯一分解性,” but allows a general well-ordered codomain. It can support the record's integer-valued specialization if that convention is stated, or the editor can inspect another primary source stating that convention directly. Also replace the generic Chinese locator with that specific label. Evidence: [Li, Volume I, chapter5.tex, `prop:Euclidean-ring`](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex). This is a support limitation, not a claim that the definition occurs nowhere in Milne.

### F4 — P2: The general Galois-extension definition needs Milne's infinite-extension locator

Location: `resources/content/encyclopedia/algebra/galois-extension.md:2` and its “Definition and conventions” section; `resources/data/terminology-algebra.json`, ID `galois-extension`, definition source at line 1717.

Both entries define Galois for an arbitrary algebraic extension, but their locators point to Chapters 2–3. Milne's Definition 3.9 explicitly includes **finite** in that chapter's convention. The general algebraic normal-and-separable convention used by the entries appears in the opening paragraph of Chapter 7, “Infinite Galois Extensions,” printed p.93. The entries' mathematics is correct; the existing locator omits the passage that supports their stated scope.

Correction: add Chapter 7, opening definition paragraph, to both definition-source locators, keeping Chapter 3 for the explicitly finite correspondence and examples. This avoids asking a reader to reconcile a finite definition with an entry that permits infinite extensions. Inspected evidence: [Milne, *Fields and Galois Theory*, Definition 3.9, printed p.37; Chapter 7 opening, printed p.93](https://www.jmilne.org/math/CourseNotes/FT.pdf).

## Terminology evidence improvement

### F3 — P3: Cite an explicit chain/cochain naming passage for the chain-complex record

Location: `resources/data/terminology-algebra.json:2162`, ID `chain-complex-modules`; translation locator at line 2186.

The cited Volume I passage “正合列入门” defines **复形** and discusses decreasing and increasing indices. It supports the mathematical construction, but the inspected defining passage does not explicitly name the decreasing version **链复形**, which is the record's chosen Chinese term. The record's definition and example are correct; this is a weakness in direct evidence for the displayed name, not a wrong translation.

Correction: add or replace the translation citation with Li's Volume II author source, Chapter 2, remark labelled `rem:cochain-vs-chain`, headed “链复形的同调.” It explicitly distinguishes increasing-index 上链复形 from decreasing-index 链复形. This replacement was inspected, not merely suggested from memory. Sources: [Li, Volume I, chapter6.tex, `sec:exactseq-module`](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter6.tex) and [Li, Volume II, chapter2.tex, `rem:cochain-vs-chain`](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter2.tex).

## Boundary clarification, not an established theorem error

### C1 — P3: Explicitly exclude a trivial augmenting path

Location: `resources/data/terminology-combinatorics.json:1355–1356`, ID `graph-augmenting-path`; compare ID `graph-path`, distinction at line 434. The short prerequisite explanation in `resources/content/encyclopedia/combinatorics/halls-marriage-theorem.md:62` has the same omission.

The path entry expressly allows a one-vertex path of length zero. The augmenting-path entry says that edges alternate and endpoints are unmatched, without expressly requiring positive length or endpoints in opposite bipartite parts. If the initial and terminal vertices of a trivial path are counted as its endpoints, an isolated unmatched vertex passes those conditions vacuously, but switching its empty edge set does not increase the matching. If “two endpoints” already means two distinct vertices, the intended definition is correct; therefore this is reported as a convention ambiguity, not a definite false statement.

Suggested wording in English: “a path of positive length whose edges alternate outside and inside M and whose endpoints are unmatched.” Add “长度为正” in Chinese. Equivalently require one endpoint in each of the disjoint bipartite parts. The cited source makes this distinction explicitly by permitting trivial alternating paths while requiring an augmenting path to end in the opposite part. Evidence: [Diestel, English sample, §2.1, PDF p.3](https://diestel-graph-theory.com/Sample.pdf) and [Chinese fifth-edition sample, §2.1, printed pp.33–34](https://diestel-graph-theory.com/Chinese/ChineseSample5.pdf).

## Checks that produced no finding

The following concrete concerns were checked and cleared. They should not be converted into requested content changes:

- **Localization example:** inverting 2 in Z/6Z really gives Z/3Z. The class of 3 vanishes, and reduction modulo 3 makes 2 a unit and has the required universal property. An early audit suspicion that the quotient should be Z/2Z was incorrect and is withdrawn. The general construction and kernel criterion were checked against [Milne, CA, §5, construction and Proposition 5.1](https://www.jmilne.org/math/xnotes/CA.pdf).
- **Pullback translation:** Li's Chapter 2 has a separate universal-construction definition naming it “纤维积或拉回,” following `def:completeness`. The record's citation identifies that passage, not the earlier Hom-precomposition usage. No translation-sense mismatch was found. [Li, chapter2.tex, “完备性,” fiber-product definition](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).
- **Higher-category Chinese locator:** the phrase 高阶范畴理论 is present in the final “研究介绍” paragraph of Xu Fei's university page. A search-within-page result initially missed it; reading the late portion of the page confirmed the exact locator. It is valid name-usage evidence, not evidence for a technical quasi-category definition. [Xu Fei, university faculty page, “研究介绍,” final paragraph](https://math.stu.edu.cn/jsdw/zrjs/xf.htm).
- **Higher-category mathematical scope:** the article expressly restricts to the quasi-category model of (infinity,1)-categories and requires accessible left exact localization for the topos bridge. The horn non-example is valid. Inspected Lurie's author arXiv version at Definitions 1.1.2.4 and 6.1.0.4 and Examples 1.1.2.5–1.1.2.6. [Lurie, *Higher Topos Theory*, author arXiv PDF](https://arxiv.org/pdf/math/0608040).
- **Additive-combinatorics hypotheses:** the article restricts the inverse theorem to finite nonempty integer sets, separates parameter volume from cardinality, and does not infer small doubling of the whole set merely from large energy. The displayed set has energy 44. Its Freiman formulation agrees with the inspected source. [Green, §§3.5–4.1, Proposition 3.12 and Theorem 4.1](https://people.maths.ox.ac.uk/greenbj/papers/C3.10-Oxford-2025.pdf).
- **Matching terminology:** saturating one bipartite part is distinguished from a perfect matching, and maximum from maximal. The Chinese slides explicitly distinguish 完备匹配 from 完美匹配 on slides 6–7; slide 9 states Hall's condition. [Nanjing University, *二部图中的匹配*, PDF pp.6–9](https://cs.nju.edu.cn/shiyh/DM2018/parts/25.pdf).

Other independently checked calculations include the diagonalization example, the modular Jordan representation, the nonsplit Z/4Z extension, the tensor-product quotient, Hall's neighbor counts, the inclusion–exclusion count 20, the OGF coefficient 4 and recurrence solution, the clique expectation 252/512, and the C5 coloring for R(3,3). None produced a mathematical correction. The finite normal/separable hypotheses, dg signs, Yoneda variance, and adjunction triangle identities were also reviewed without a definite defect.

## Article inventory

Each ID below corresponds to `resources/content/encyclopedia/<area>/<id>.md` and was read in full.

| Area | IDs |
| --- | --- |
| algebra | `algebraic-prime-spectrum`, `diagonalizable-linear-map`, `differential-graded-category`, `finite-group-linear-representation`, `galois-extension`, `group-action`, `group`, `integral-domain`, `left-module`, `linear-map`, `localization-commutative-ring`, `short-exact-sequence-modules`, `tensor-product-modules`, `vector-space` |
| category-theory | `adjunction`, `categorical-limit`, `functor`, `higher-category`, `natural-transformation`, `yoneda-lemma` |
| combinatorics | `additive-combinatorics`, `extremal-graph-theory`, `finite-simple-graph`, `halls-marriage-theorem`, `inclusion-exclusion-principle`, `ordinary-generating-function`, `probabilistic-method`, `ramsey-number` |

## External verification limits and handoff

Additional primary passages inspected included [Riehl's functor/naturality and limit definitions, adjunction unit/counit lemmas and preservation theorem](https://emilyriehl.github.io/files/context.pdf); [Leinster's Yoneda discussion](https://arxiv.org/pdf/1612.09375); [Zhao's Mantel/Turan sections](https://yufeizhao.com/gtacbook/gtacbook.pdf); [Morris's Ramsey definition and recurrence](https://opentext.uleth.ca/PDF/Combinatorics.pdf); and Keller–Trotter's graph, inclusion–exclusion, generating-function, matching, and probabilistic-method sections at the article URLs. These are targeted checks, not claims that every theorem in those books was verified.

The browser could not retrieve the exact IAS HTT PDF after repeated attempts. Lurie's author arXiv PDF supplied the mathematical checks instead; the IAS homepage still lists the HTT link. Do not read this as a finding that the IAS URL is universally broken. Li's EAlg-Notes PDF and Volume II PDF also failed direct retrieval in this audit. Search snippets were not counted as full inspections; the accessible Volume II author source supplied the explicit chain/cochain passage.

The other Chinese syllabi, course descriptions, and journal terminology sources were not all independently reopened. Bibliographic editions and every definition number were not exhaustively verified. No judgment about copyright compliance, originality detection, rendered mathematics, build inclusion, or publication counts is made here. Later edits to the inputs require a new check of affected passages.

Handoff: correct F1; replace the broad locators in F2 with evidence actually inspected, addressing the Euclidean-source support gap; add F4's general Galois-definition locator and F3's explicit Chinese naming passage; and consider C1's positive-length clarification. Preserve the existing AI-assisted editorial attribution. None of these recommendations authorizes calling this material externally peer reviewed.

## Correction resolutions — 2026-10-15

Contributor: Codex, AI-assisted source audit and editorial correction. This is **not external peer review** or publication approval. The 2026-10-14 report above is retained as the historical read-only audit; the following edits were subsequently authorized by the user.

### Resolved findings

- **F1 resolved:** the dg-category article now identifies Keller §2.2 in both metadata and its reading-link text. Its already-correct terminology citation was left unchanged. Keller's inspection date remains 2026-10-14; it was not newly inspected for this repair.
- **F2 resolved:** all **62** bundled algebra definition-source records now identify particular inspected definitions, named source labels, or precisely described author passages. All **56** generic Chinese-name locators were replaced. The two evidence roles remain separate arrays, including when the same Chinese primary text supports both. In total, 63 algebra records changed: 62 definition-source arrays and 59 Chinese-name arrays (the latter include the unital-ring name and the newly reinspected Galois, finite-field, and Ext passages). No records were added or removed.
- **Euclidean support gap resolved:** `euclidean-domain` now cites Li's `prop:Euclidean-ring` and the adjacent `eg:polynomial-PID`. Its distinction explicitly restricts Li's general well-ordered codomain to the record's nonnegative-integer convention. The bilingual definition and the polynomial-degree example were preserved.
- **F3 resolved:** both evidence roles for `chain-complex-modules` cite Volume II, chapter2.tex, `rem:cochain-vs-chain`, headed 链复形的同调. This explicitly names the decreasing-index version and states the square-zero differential condition.
- **C1 resolved:** positive length is explicit in both terminology definitions and the Hall article's prerequisite explanation. Their existing Diestel inspection dates remain 2026-10-14. The one-vertex path convention was not changed.
- **F4 resolved within the same owned algebra sources:** `galois-extension` terminology now cites Li's `def:Galois-ext`, which does not impose finiteness. The article adds that inspected general-definition source; its Milne reference is separately scoped to Definition 3.9's finite convention and Theorem 3.17's finite correspondence, retaining the 2026-10-14 date for Milne. The article's mathematics and finite-correspondence restriction were not rewritten.

### Primary passages actually inspected for these replacements

New inspections were performed on **2026-10-15**. Raw-source locators use labels actually present in the retrieved author files, or the actual heading and a distinctive defining clause when the author supplied no label. No printed section numbers were inferred from chapter placement.

| Author source | Records / exact passage anchors |
| --- | --- |
| [Li, Volume I, chapter4.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter4.tex) | The definition headed 子群和正规子群 for subgroup and normal subgroup; `def:cyclic-group`; the multiplication-preservation proposition in 同态和商群 for group homomorphisms; the following definition `Ker(φ)=φ^{-1}(1)`; the definition headed 商群; `def:monoid-action` specialized to a group; the separate 轨道 and 稳定化子 clauses; the Sylow p-subgroup definition immediately after the exact-prime-power convention following Cauchy's theorem. |
| [Li, Volume I, chapter5.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) | The initial (含幺)环 definition for the unital Chinese name; the 相反环 definition's commutativity clause; the 可逆元 and nonzero 零因子 paragraph; the 整环 definition and `def:field`; `def:ideals`; the 商环 definition; `def:ring-ideal` for prime ideals and names, with the proof of `prop:existence-maximal-ideal` explicitly identifying maximal elements of the **proper** ideals for the maximal-ideal definition; the 多项式环 definition and finite-coefficient construction `def:monoidal-ring`; `def:UFD` and the following 素元 paragraph; `def:PID`; `prop:Euclidean-ring` and `eg:polynomial-PID`; the 局部化 construction and its universal-property proposition following `eqn:localization-zero`. |
| [Li, Volume I, chapter6.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter6.tex) | Module axioms and the 向量空间 definition's field specialization; the linear-independence and finite-generation definition following `prop:free-module-property`; the vector-basis definition-theorem and `def:dimension-vector-space`; `def:submodule`, the 商模 and 模同态 definitions; `def:free-module`; `def:balanced-product` and `def:tensor-product`; `def:tor-ann`, **second item**, for the whole-module annihilator; item 2 of the proof of `prop:module-cat-completeness` for finite-support direct sums; the 短正合列 definition and immediately following explanation; `def:inj-proj-modules` and the later explicit lifting diagram; the immediately following 平坦模 definition; the complex-definition homology quotient and indexed formula; `def:ACC-DCC-mod` and `prop:fg-noetherian`; the commutative specialization immediately after `def:noncommutative-local-ring`. |
| [Li, Volume I, chapter7.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter7.tex) | `def:algebraic-element`, its nonzero evaluation-kernel clause, and the unique least-degree monic 极小多项式 clause, specialized to extension fields. The old generic chapter8 Chinese citation for algebraic elements was not reused. |
| [Li, Volume I, chapter8.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter8.tex) | Opening 域扩张 paragraph in 扩张的几种类型; the root-generation definition of 分裂域 in `sec:splitting-field`; `def:normal-ext`, condition N.1; the 可分元 and later algebraic 可分扩张 definitions. |
| [Li, Volume I, chapter9.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter9.tex) | `def:Galois-ext` for the unrestricted algebraic normal/separable convention; 有限域 opening and `prop:finite-field-uniqueness` for characteristic and prime-power cardinality. |
| [Li, Volume II, chapter2.tex](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter2.tex) | `rem:cochain-vs-chain`, the decreasing-index condition and explicit 链复形 / 上链复形 naming. |
| [Li, Volume II, chapter3.tex](https://raw.githubusercontent.com/wenweili/AlJabr-2/master/chapter3.tex) | `sec:Ext-Tor`, the projective-resolution description before `def:Ext-classical`, that definition-proposition, and its immediately following module-category specialization. This replaces the broad Clark definition locator and the Volume II PDF's chapter-level Chinese Ext locator. |
| [Li, Elementary Algebra author PDF](https://wwli.asia/downloads/books/EAlg-Notes.pdf) | Linear maps: Definition 4.5.1, printed p.129 / PDF p.139. Rank–nullity: Theorem 4.8.4, printed p.146 / PDF p.156. Characteristic polynomials: Definition 5.8.2, Proposition 5.8.3 and following basis-independence paragraph, printed pp.213–214 / PDF pp.223–224. Eigenvalues and diagonalizability: Definitions 7.1.2–7.1.3, printed p.286 / PDF p.296. |
| [Xiamen University, §4.4 线性映射的像与核, official course-team notes](https://gdjpkc.xmu.edu.cn/FileDown.aspx?DownLink=Q2008122206553837948.pdf&dID=102) | Definition 1, PDF p.1, explicitly defines rank as the dimension of the image without a finite-dimensional restriction in that definition. Corollary 3, PDF pp.2–3, explicitly names 线性映射的维数公式. This supplies the Chinese name that Li's inspected rank–nullity theorem does not itself name. |
| [Milne, Commutative Algebra](https://www.jmilne.org/math/xnotes/CA.pdf) | §14, Definition before Proposition 14.1 and the Zariski-topology paragraph immediately after its proof, printed/PDF p.63, for the full topological prime-spectrum definition. The existing specific Xu Chinese-name evidence retains its 2026-10-14 date. |

The PDF-reading skill was used to check garbled text extraction against rendered author pages, including the eigenvalue/diagonalization and characteristic-polynomial definitions, the rank–nullity hypothesis, and the official Chinese theorem name. Li's Elementary Algebra PDF, unavailable to the browser in the original audit, was successfully retrieved and inspected in memory on 2026-10-15; the browser still failed direct retrieval. No PDF or rendered-page artifact was written into the repository. This does not claim inspection of the entire PDF.

Specific Chinese evidence for minimal polynomials, Noetherian rings, local rings, and prime spectra was not re-dated: those original narrowly located sources remain at 2026-10-14. Likewise, the eight algebra definition-source records outside the 62 bundled records were not gratuitously replaced. This resolution is not an assertion that every retained citation in all three areas was newly reopened.

### Saved-file verification and handoff

Parsed the three saved terminology arrays after correction: **70 algebra / 30 category-theory / 40 combinatorics**, with unchanged ID order and record counts. Compared algebra records against the pre-edit snapshot: only definition/Chinese-name source arrays changed, plus the explicit Euclidean convention in its distinction. No algebra definition, example, translation status, alias or contributor was rewritten. Category terminology is byte-for-byte unchanged. Combinatorics differs only in the two augmenting-path definition fields.

Checked that all referenced author labels in the new raw-source locators exist in the actually retrieved chapter, and that neither `relevant definitions` nor generic `各相应 definition/定义` bundles remain in the algebra source fields. This mechanical label check complements the passage reading; it is not mathematical verification by itself.

Changed-source scope is confined to `terminology-algebra.json`, `terminology-combinatorics.json`, the dg and Galois algebra articles, the Hall article, and this appended report. Existing AI-assisted editorial contributor strings are preserved. No content from other writers, build code, generated HTML, index or publication artifact was edited by this correction pass. No build, upload, or publication was run. Main retains final implementation review, build and publication responsibility.

