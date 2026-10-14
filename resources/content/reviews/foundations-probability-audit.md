# Foundations, probability, and dynamics substantive audit

Inspection date: 2026-10-14. Internal editorial audit, AI-assisted; **not external peer review**. New review prose is CC BY-SA 4.0. This report records proposed corrections only; no encyclopedia articles, terminology data, build files, generated HTML, or publication state were changed.

## Scope and method

Read `resources/content/SCHEMA.md` first. Read all 24 assigned encyclopedia articles and the definitions, Chinese definitions, examples, distinctions, aliases, and source metadata of all 120 records in the three matching terminology files.

| Area | Encyclopedia articles | Terminology records |
| --- | ---: | ---: |
| foundations | 10 | 50 |
| probability | 8 | 40 |
| dynamics | 6 | 30 |
| Total | 24 | 120 |

The encyclopedia IDs reviewed were:

- Foundations: `set`, `universal-quantifier`, `direct-proof`, `proof-by-contradiction`, `mathematical-induction`, `equivalence-relation`, `set-cardinality`, `first-order-completeness`, `first-order-compactness`, `continuum-hypothesis`.
- Probability: `probability-space`, `conditional-probability`, `independent-events`, `random-variable`, `almost-sure-convergence`, `martingale`, `brownian-motion`, `stochastic-differential-equation`.
- Dynamics: `invariant-measure`, `ergodic-transformation`, `strong-mixing`, `topological-transitivity`, `devaney-chaos`, `dynamical-flow`.

Checked mathematical formulations, hypotheses, example calculations, English/Chinese agreement, and whether selected concrete source locators actually support their assigned statements. Primary-source browsing was targeted at substantive risks and locator discrepancies, not an exhaustive reinspection of every external reference attached to all 120 records. Remote PDF checks used extracted text; this was not a rendering or accessibility audit. A stored `checked` date was not treated as proof that this auditor had inspected that source.

Priority convention: P2 = mathematical statement or missing hypothesis requiring correction; P3 = terminology distinction or evidence-locator correction. No P0/P1 finding was established. Six findings follow.

## Findings

### FPD-01 — P2 — `suspension-flow`: positive roofs alone do not guarantee a global flow

Location: `resources/data/terminology-dynamics.json`, record `suspension-flow`, `definitionEn` (line 846) and `definitionZh` (line 847). The related `dynamical-flow` article correctly requires existence at all real times; this term does not supply enough hypotheses to meet that convention.

The English definition permits any homeomorphism of any space with a positive continuous roof. On a noncompact base, positivity need not prevent infinitely many roof crossings in finite elapsed time. The Chinese definition also omits invertibility of the base and a condition preventing finite-time escape.

Counterexample derived for this audit: take the discrete space $X=\mathbb Z$, the homeomorphism $T(k)=k+1$, and the continuous positive roof $r(k)=2^{-|k|}$. Starting at the bottom over zero, the successive forward roofs have total length

$$
\sum_{k=0}^{\infty}r(T^k0)=\sum_{k=0}^{\infty}2^{-k}=2.
$$

At time two the trajectory has crossed infinitely many columns and has no destination point in the stated quotient. This constructs local evolution, not the claimed action for every real time.

Primary evidence: [Sarig, Lecture Notes on Ergodic Theory](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf), §1.6.5, immediately before Definition 1.20, printed p.30 / PDF p.38, explicitly assumes a roof bounded away from zero. The source is a measurable suspension **semiflow** construction; the topological global-flow extension needs its own stated conditions.

Fix: restrict the term to a homeomorphism of a nonempty compact metric space with continuous $r:X\to(0,\infty)$. Compactness supplies a positive minimum. Alternatively, retain a noncompact base and explicitly require divergent forward and backward roof sums along every orbit. Match the Chinese assumptions, for example: “对非空紧致度量空间上的同胚及正连续顶函数，将各柱顶与下一柱底粘合，并沿高度前进所得到的实数时间流。” Keep the semiflow variant distinct.

### FPD-02 — P2 — `brownian-motion`: specify vanishing mesh in the quadratic-variation claim

Location: `resources/content/encyclopedia/probability/brownian-motion.md`, Important properties, line 88.

The article asserts convergence in probability of squared-increment sums over deterministic “refining partitions,” without specifying that their mesh tends to zero. If “refining” means nested partitions, as it ordinarily can, that hypothesis is insufficient.

Counterexample derived for this audit: partition $[0,1]$ by keeping $[0,1/2]$ intact and bisecting only $[1/2,1]$ at each stage. These partitions are strictly nested refinements, but their largest interval always has length $1/2$. The sums converge in probability to

$$
B_{1/2}^{\,2}+\frac12,
$$

not to one. The second-half sum tends to $1/2$; the first increment retains a nonconstant square.

Primary evidence: [Lawler, Stochastic Calculus: An Introduction with Applications](https://www.math.uchicago.edu/~lawler/finbook.pdf), §2.8, Theorem 2.8.2, printed p.65 / PDF p.71, requires $\|\Pi_n\|\to0$ for convergence in probability. Its stronger almost-sure statement adds a separate condition.

Fix: replace the phrase with “deterministic partitions whose mesh tends to zero.” No nestedness is needed for the stated convergence in probability. Preserve the article's caution about stronger pathwise assertions. The core Brownian definition and covariance/scaling examples are unaffected.

### FPD-03 — P2 — `birkhoff-ergodic-theorem`: Chinese definition drops measure preservation

Location: `resources/data/terminology-dynamics.json`, record `birkhoff-ergodic-theorem`, `definitionZh`, line 189; also its `definitionSources`.

The English definition explicitly assumes a probability-preserving $T$. The Chinese definition asserts the limit of integrable orbit averages without naming that assumption or the underlying probability measure. Under the schema's self-contained-definition requirement, this broadens the theorem beyond its valid scope.

Counterexample derived for this audit: give $[0,1]$ Lebesgue probability, let $T(x)=0$, and take $f(x)=x$. Then the averages are $x/n\to0$. The exact invariant sigma-algebra is trivial, so $E[f\mid\mathcal I]=1/2$. Thus the proposed conditional-expectation conclusion fails without preservation.

Primary evidence: [Sarig](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf), §2.3.1, Theorem 2.3, printed p.40 / PDF p.48, states the conditional-expectation conclusion for a probability-preserving transformation. The record currently cites [Bruin](https://www.mat.univie.ac.at/~bruin/ET3.pdf), §4, Theorem 4 and its proof; that passage gives an invariant limit and the ergodic constant case, but does not explicitly identify the general limit as the displayed conditional expectation.

Fix: use, for example, “在概率空间 $(X,\mathcal B,\mu)$ 上，若 $T$ 保持 $\mu$ 且 $f\in L^1(\mu)$，则轨道平均几乎处处收敛于 $E[f\mid\mathcal I]$，其中 $\mathcal I$ 为不变σ代数；若 $T$ 遍历，极限为 $\int f\,d\mu$。” Add Sarig §2.3.1, Theorem 2.3 as direct definition evidence; Bruin may remain for the complementary formulation. The `ergodic-transformation` article already supplies the preservation hypothesis correctly.

### FPD-04 — P3 — `partial-order` and `dynamical-periodic-point`: aliases merge different objects

Locations: `resources/data/terminology-foundations.json`, record `partial-order`, alias `poset`, line 1488; `resources/data/terminology-dynamics.json`, record `dynamical-periodic-point`, aliases `periodic orbit` and `周期轨道`, lines 460–461.

A partial order is a relation; a poset is the underlying set equipped with that relation. A periodic point is a point; its periodic orbit is the set of visited points. Treating the corresponding object names as spelling aliases conflicts with the schema's one-record-per-concept/sense rule and can return the wrong mathematical type in a translation lookup.

Primary evidence: [Li, chapter1.tex](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex), section “序结构与序数,” definition labelled `def:partial-order`, distinguishes the pair $(P,\leq)$ / 偏序集 from its relation / 偏序. [陈绥阳–褚蕾蕾, 动力系统基础及其方法](https://www.ecsponline.com/yz/BBC6874D396194DA3981A0BBFCD9F78AE000.pdf), §2.2, Definition 2.2.1, printed p.13 / PDF p.19, distinguishes 周期点 from the orbit through that point / 周期轨道.

Concrete example: rotation by $1/3$ on the circle has three distinct points per orbit. Those are three periodic points but one periodic orbit; the two objects cannot be interchanged in a counting statement.

Fix: remove these aliases from the current records. If those concepts are needed, add separate `partially-ordered-set` and `dynamical-periodic-orbit` records with their own bilingual definitions and evidence. Mention the association in the existing `distinction` fields rather than asserting synonymy. Do not change the valid current relation/point definitions.

### FPD-05 — P3 — `well-order`: definition evidence points to the wrong section

Location: `resources/data/terminology-foundations.json`, record `well-order`, `definitionSources[0].locator`, line 1535.

The locator says 第1章「ZFC 公理一览」. The actual definition occurs in the next section, “序结构与序数,” at the source label `def:well-ordered`. The translation-source locator in the same record already identifies that passage correctly. This is a reproducible locator mismatch, not a wrong mathematical definition.

Primary evidence: [Li's author source](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex), “序结构与序数,” definition labelled `def:well-ordered`, supplies the nonempty-subset condition.

Fix: replace the definition locator with `第1章「序结构与序数」，定义 def:well-ordered（良序集；每个非空子集有极小元）`. Keep the distinction that a least element of the whole set alone is insufficient.

### FPD-06 — P3 — `first-order-term`, `first-order-formula`, `atomic-formula`: syntax evidence is mislocated

Location: `resources/data/terminology-foundations.json`, these three records' `definitionSources[0].locator` (records begin at lines 737, 702, and 770 respectively).

All three use the same locator, “§7.2 The Universal Quantifier; §7.3 The Existential Quantifier.” Those sections assume terms and formulas while developing quantification. The introduction of terms and the basic term/formula distinction occurs in §7.1; the cited quantifier sections do not define atomic formulas.

Primary evidence: [Logic and Proof, Chapter 7](https://leanprover-community.github.io/logic_and_proof/first_order_logic.html), §7.1 “Functions, Predicates, and Relations,” introduces compound terms and assertions built using predicates. For a precise inductive definition covering all three records, [Yang, 数理逻辑，第11讲](https://logic.fudan.edu.cn/doc/Course/2021/mathlogic11h.pdf), PDF pp.13–14 defines terms, and PDF pp.15–16 defines well-formed formulas and identifies atomic formulas. These passages were inspected and are already correctly located in the three translation-source fields.

Fix: point `first-order-term` to §7.1 for its existing English source, and include the inspected Yang syntax passages in `definitionSources` for precise construction rules, particularly `atomic-formula`. Definition evidence may be Chinese; the schema requires separate roles for evidence, not English-only definition sources. Preserve the correct current bilingual definitions and their equality-present convention.

## Checks with no additional finding

No additional substantive mathematical error was established in the other encyclopedia formulations or worked calculations reviewed. In particular:

- The foundations articles distinguish logic completeness from theory completeness, set size from order, and classical reductio from constructive negation. The arithmetic examples and the explicit real-line/interval bijection check out. [Avigad, Logic and Computation](https://www.andrew.cmu.edu/user/avigad/Teaching/landc_notes.pdf), §6.3, Theorems 6.3.1–6.3.2 and §7.2, Theorem 7.2.1, supports the completeness/compactness formulations. [Lambie-Hanson](https://www.math.cmu.edu/~clambieh/ch.pdf), PDF pp.58–63 and 71–79, supports the scoped CH and relative-consistency discussion.
- Conditional-probability and factory-defect calculations are correct; the independence example is pairwise but not mutual. The moving-event and rare-large-value examples correctly separate convergence modes. [Weber](https://www.statslab.cam.ac.uk/~rrw1/prob/prob-weber.pdf), §§5.2–5.3 and 6.1–6.4, and [Lawler's probability notes](https://www.math.uchicago.edu/~lawler/probnotes.pdf), §§1–4 and 6.2, were inspected for the relevant definitions.
- Martingale stopping is explicitly bounded, and the convex-transform statement requires integrability. Uniform integrability is correctly distinguished from mere $L^1$ boundedness. [Durrett, fifth edition](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf), Theorems 4.2.6 and 4.6.7, supports these qualifications.
- The SDE overview distinguishes strong/weak solutions and Itô/Stratonovich integration, states the classical Lipschitz/growth assumptions, and has the correct geometric-Brownian exponent. [Lawler's stochastic-calculus text](https://www.math.uchicago.edu/~lawler/finbook.pdf), §3.5, equation (3.21) and its Picard construction, and [Friz–Hairer](https://hairer.org/notes/RoughPaths.pdf), Chapter 9, Theorem 9.3, support the existence framework and smooth-noise-approximation distinction respectively.
- The dynamics articles distinguish invariance, ergodicity, mixing, transitivity, and chaos, and state the compactness/no-isolated-points restrictions where needed. [Teschl](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf), §§6.1–6.3 and §11.3, Lemma 11.3, supports the local/global-flow distinction and sensitivity implication. Bruin §2, Theorem 1, and §12, Definition 13, support the stated compact-space invariant-measure existence and fixed-event mixing definitions.
- The Poisson-process Chinese definition's $\lambda(t-s)$ formula already enforces stationary increment laws; omission of the separate word “stationary” is not an established translation error. [Peking University, 泊松过程](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/poisson.html), §3.1, Definition 3.2, uses the same elapsed-time formulation. The Chinese suspension name 扭扩 is documented in the publisher preview, §2.1, Remark 2.1.1, printed p.11; its unfamiliarity alone is not a finding.

## Limits and handoff

This is a substantive internal audit of the assigned material, not a certificate that every remote source or Chinese name has been independently validated. Publisher contents and university syllabi can support literature naming without proving a full mathematical definition or normative standardization. No blanket upgrade of translation status or source-verification counts is warranted by this review.

Recommended editorial order: correct FPD-01–03, then resolve the distinct-concept aliases and the source locators in FPD-04–06. All fixes remain proposals for the responsible writers. No content, build, HTML, or publishing action was taken by this audit.

## Authorized correction resolutions — 2026-10-14

The user subsequently authorized implementation of FPD-01–06 in the owned source files. The original findings and read-only audit statements above describe the pre-correction inspection; this appended section records the implemented resolutions and supersedes the earlier proposal-only handoff. This remains an internal editorial review, not external peer review.

| Finding | Resolution |
| --- | --- |
| FPD-01 | Resolved. Both suspension definitions now require a homeomorphism of a nonempty compact metric base and a continuous positive roof. The distinction explains the positive minimum preventing finite-time escape. Sarig §1.6.5, Definition 1.20 and its preceding lower-bound assumption are explicitly described as measurable semiflow construction evidence for the scoped topological variant, not as a directly stated topological global-flow theorem. |
| FPD-02 | Resolved. The Brownian article explicitly requires deterministic partitions with mesh tending to zero and states that nestedness is unnecessary for convergence in probability. Its Lawler locator now includes Theorem 2.8.2, printed p.65 / PDF p.71. |
| FPD-03 | Resolved. The Chinese Birkhoff definition now specifies the probability space, measurable measure-preserving transformation, integrability, and invariant sigma-algebra. Added the already inspected Sarig §2.3.1, Theorem 2.3 as direct conditional-expectation-limit evidence; scoped the retained Bruin locator to its invariant-limit and ergodic-constant formulation. |
| FPD-04 | Resolved. Removed `poset` from `partial-order` and `periodic orbit` / `周期轨道` from `dynamical-periodic-point`. Strengthened the distinctions between a relation and its equipped set, and between one periodic point and its finite orbit. No replacement records were added. |
| FPD-05 | Resolved. The well-order definition locator now points to Li's “序结构与序数,” definition `def:well-ordered`, matching the inspected passage. |
| FPD-06 | Resolved. Corrected the term/formula English locators to §7.1, retaining §§7.2–7.3 only for quantified formulas. Added the inspected Yang PDF pp.13–14 / pp.15–16 as precise syntax-definition evidence. Replaced the unsupported atomic-formula definition citation with Yang PDF p.15. Existing bilingual definitions and translation-source fields were preserved. |

Files changed in this correction pass, all through `apply_patch`:

- `resources/data/terminology-foundations.json`
- `resources/data/terminology-dynamics.json`
- `resources/content/encyclopedia/probability/brownian-motion.md`
- `resources/content/reviews/foundations-probability-audit.md`

Verification: all three owned terminology arrays parsed successfully with `JSON.parse`; counts remain foundations 50, probability 40, dynamics 30. Comparing the pre/post parsed arrays confirmed unchanged IDs and record order, exactly five affected foundations records and three dynamics records, and no changes to probability terminology. The Brownian article's JSON front matter parsed successfully, and all seven required headings remain present. No other areas, core/build files, generated HTML, or publication state were changed in this correction pass. Source inspection dates remain the actual 2026-10-14 audit dates; no new inspection or standardized translation status was claimed.

## Final resolution verification — 2026-10-15

Local source inspection date: 2026-10-15. Re-read the current schema, affected terminology records, Brownian article, and prior resolutions before considering further edits. FPD-01–06 are already corrected in the current files; all six remain resolved. No duplicate source corrections or replacement records were added.

Confirmed the nonempty compact metric base, homeomorphism, and continuous positive roof in both suspension definitions, with Sarig evidence explicitly scoped to the measurable semiflow construction; the Brownian vanishing-mesh condition; the Chinese Birkhoff probability-preservation and integrability assumptions plus Sarig Theorem 2.3; removal of the incorrect aliases with strengthened distinctions; and the corrected well-order and syntax-definition locators.

Validation on this date: terminology JSON arrays parse successfully, including the three owned files at foundations 50, probability 40, and dynamics 30 records. Brownian JSON front matter also parses successfully. Read-only source inventory confirms the current repository quota of 100 encyclopedia articles and 500 terminology records. The 2026-10-14 primary-source inspection dates and correction history are retained; this 2026-10-15 check is a local resolution inspection, not a claim of fresh remote-source inspection or external peer review.

Only this audit report was edited in the resumed pass, using `apply_patch`. The owned source Markdown/JSON files were left unchanged, and no other areas, core/build files, generated HTML, or publishing state were modified. Final assignment status: FPD-01–06 resolved; no outstanding correction within this assignment.
