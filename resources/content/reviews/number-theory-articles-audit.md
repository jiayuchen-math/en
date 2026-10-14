# Number-theory articles: independent accuracy audit

Review date: **2026-10-15 (Asia/Shanghai)**. This resumes the source inspection begun on 2026-10-14. Dates of inspection are distinguished below.

## Scope and outcome

Read the current `resources/content/SCHEMA.md` and all 12 Markdown articles in `resources/content/encyclopedia/number-theory/` in full on October 15, including their JSON metadata, English/Chinese names, references, hypotheses, examples, and proof sketches. Their SHA-256 hashes matched the versions inspected before the interruption. This is an independent AI-assisted editorial accuracy review, not external peer review or certification.

One definite mathematical overstatement was found: finite stabilizers do not by themselves imply branching in the modular-curve article. Three smaller matters concern an algorithm alias, a subsection locator, and the requested article-length target. No incorrect worked arithmetic example was found. The findings are recommendations for the article owner; this audit changes only this report. Terminology records, other articles, core code, generated content, and publication are outside the write scope. The number-theory terminology JSON was not audited.

## Findings

### F1 — P2: Branching requires a nontrivial effective stabilizer

Location: `resources/content/encyclopedia/number-theory/modular-curve.md:35`, “Important properties.”

The paragraph says that a finite stabilizer means the quotient map is branched there. Under the article's convention, Gamma is a subgroup of SL(2,Z). Its action on the upper half-plane can have a kernel containing -I, which acts trivially. Even a nontrivial finite stabilizer in SL(2,Z) therefore need not cause branching. Trivial stabilizers are finite too.

Concrete counterexample: take Gamma = SL(2,Z) and tau = 2i. Its stabilizer is {I,-I}, but its stabilizer in PSL(2,Z) is trivial. Indeed, a matrix fixing 2i satisfies b = -4c and d = a; its determinant condition becomes a^2 + 4c^2 = 1, forcing c = b = 0 and a = d = ±1. The quotient map is locally unramified there. The local degree at an interior point is the order of the effective stabilizer, after removing Gamma's intersection with {I,-I}.

Suggested correction: explain that a **nontrivial stabilizer in the effective PSL(2,Z) action** produces an elliptic point, with local quotient coordinate w^e and ramification index e > 1. Keep the correct observation that the coarse Riemann surface remains smooth, and retain the distinction between automorphisms and a universal family.

Evidence inspected October 15: [Milne, MF, Chapter 2, Remark 2.11 and Theorem 2.12(b)](https://www.jmilne.org/math/CourseNotes/MF.pdf) distinguish stabilizers from {±I}. [Li, author `chap3.tex`, `sec:Y-charts`, equation `eqn:chart-h` and coordinate `eqn:z-coordinate`](https://raw.githubusercontent.com/wenweili/Modulform/master/chap3.tex) use the image of the stabilizer in the effective action. The same chapter's `prop:commensurable-covering` explicitly expresses ramification indices through those images.

### F2 — P3: The extended algorithm is a variant, not an exact synonym

Location: `resources/content/encyclopedia/number-theory/integer-euclidean-algorithm.md:2`, alias `extended Euclidean algorithm`; compare the distinction already made in the Overview at line 7.

The definition returns a gcd. The extended algorithm additionally returns coefficients u,v satisfying au+bv = gcd(a,b). The body distinguishes these outputs correctly, but the unqualified alias collapses the distinction in metadata. This is a naming-precision issue, not an error in the algorithm or its examples.

Suggested correction: retain `Euclidean algorithm` as an alias and describe the extended version explicitly as a variant covered by the article. If broader aliases are intentionally used for search discovery, label that policy so users do not read the alias as mathematical synonymy. A separate article is not necessary for this correction.

Evidence inspected October 15: [Judson, Section 2.2, Theorem 2.2.2 and Subsection 2.2.1, Example 2.2.4 and back substitution](https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html). The article's own Overview also supplies the distinction.

### F3 — P3: Name both Zhang subsections in the number-field locator

Location: `resources/content/encyclopedia/number-theory/number-field.md:2`, Zhang reference locator.

The locator lists Chapter 1's opening, Section 1.1.1, Definitions 1.1 and 1.14, and Example 1.2. Definition 1.1 is in Section 1.1.1, printed p.1; Definition 1.14 and Example 1.2 are in **Section 1.2.2, printed p.7**, not Section 1.1.1. The unique definition/example numbers do identify real passages, so this is an incomplete subsection locator rather than a fabricated source or a false mathematical claim.

Suggested replacement: `Chapter 1 opening, printed p.1; Section 1.1.1, Definition 1.1, printed pp.1–2; Section 1.2.2, Definition 1.14 and Example 1.2, printed p.7 (PDF p.15).`

Evidence inspected October 15: [Zhang's HFUT-hosted notes](https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf). The monic-polynomial requirement in the article is correct; Definition 1.10 in Section 1.2.1 explicitly supplies it before the integral-closure definition.

### F4 — P3: Totient is below the requested 380-word target under the repository count

Location: `resources/content/encyclopedia/number-theory/euler-totient.md`, whole body.

Using the counting rule read in `resources/build-knowledge.mjs:16`—remove display-math blocks, split the remaining body on whitespace, include headings and inline mathematics—the article has **368 words**. It passes the schema's 350-word minimum but falls 12 words below the requested 380–500 target. The other 11 articles are within that target by the same rule. Raw body whitespace counting with display mathematics included gives 378 for totient, so that alternative does not reach 380 either. These are mechanical counts, not a claim that TeX tokens are ordinary English prose.

Suggested improvement: add a substantive short explanation of the distinction already mentioned between the size of the unit group and its exponent; for example, modulo 8 the group has four elements but every unit squares to one. The existing mathematics needs no correction. The builder was read only and was not run.

## Article coverage and worked checks

All seven required H2 headings occur in the required order in every article, and all 12 front-matter objects parse as JSON. Every article has an explicit example or counterexample and AI-assisted editorial attribution. Counts below reproduce the repository rule described in F4.

| Article ID | Displayed Chinese name | Words | Mathematical checks and result |
| --- | --- | ---: | --- |
| `integer-divisibility` | 整数整除 | 437 | Zero-divisor convention, signed divisors, failure of antisymmetry on Z, linear combinations, and cancellation with c != 0 are correct. The 6-divides-18 and 6-does-not-divide-20 examples work. |
| `integer-greatest-common-divisor` | 整数的最大公因数 | 406 | gcd(252,198) = 18 and 4·252 - 5·198 = 18. The equation with right side 10 has no solution. The nonnegative zero convention and ideal characterization are consistent. |
| `integer-euclidean-algorithm` | 整数辗转相除法 | 442 | Remainder invariant and termination are correct, including (0,0). gcd(119,51) = 17; 3·12 - 35 = 1, so -1 is the inverse of 35 modulo 12. Coefficient-shift formula is valid with the stated nonzero inputs. See F2 for naming. |
| `integer-congruence` | 整数同余 | 415 | Positive modulus, classes versus representatives, and modulus 1 are handled consistently. -13 = 2 modulo 5; 3 is its own inverse modulo 8. x=1,y=5 gives the claimed nonunit-cancellation counterexample. The gcd solvability criterion is correct. |
| `fundamental-theorem-of-arithmetic` | 算术基本定理 | 443 | The n>1 statement, empty product for 1, exclusion of zero, induction and prime-divisor lemma are correct. 360 = 2^3·3^2·5; 72 divides it and 16 does not. |
| `fermats-little-theorem` | 费马小定理 | 407 | Prime modulus and nonzero residue are explicit. 2^100 = 3 modulo 13; 2^8 = 4 modulo 9. 341 = 11·31 and 2^340 = 1 modulo 341 give a valid counterexample to the converse. |
| `euler-totient` | 欧拉函数 | 368 | phi(1)=1, prime-power counts, coprime multiplicativity and Euler's coprimality condition are correct. phi(18)=6, phi(20)=8, and the nonmonotonicity/nonmultiplicativity examples work. 2^4 = 4 modulo 12. See F4 for length. |
| `chinese-remainder-theorem` | 中国剩余定理 | 392 | Pairwise rather than collective coprimality, uniqueness modulo the product, ideal formulation and two-modulus gcd compatibility criterion are correct. The worked answer 9 modulo 28 has residues 1 modulo 4 and 2 modulo 7. |
| `number-field` | 数域 | 457 | Finite extension versus infinite algebraic extension, monic integrality, and separability are correct. The Q(sqrt(3)) inverse, trace and norm work. (1+sqrt(5))/2 satisfies x^2-x-1 and lies outside Z[sqrt(5)]. Full ring of integers is specified for ideal factorization. See F3. |
| `dirichlet-character` | 狄利克雷特征 | 421 | Homomorphism, zero extension, complete multiplicativity and conductor factoring on units are correct. Values modulo 5 follow from chi(2)=i; chi(6)chi(7)=chi(42)=i. Orthogonality argument is on the unit group, where the quotient is defined. The principal L-series correctly omits primes dividing N. |
| `modular-form` | 模形式 | 425 | Full-group weight convention, cusp regularity, odd-weight vanishing from -I, products, and meromorphic quotients are correct. Delta's product and weight 12 are supported by Li's proposition, not inferred merely from periodicity. |
| `modular-curve` | 模曲线 | 480 | Open quotient, cusp compactification, Y(1)/X(1), Gamma_0(N) level interpretation, twists and coarse/fine distinction are appropriate to the scoped overview. F1 corrects the branching claim. |

The numerical checks above were recomputed independently, including exact modular exponentiation. The algebraic proof sketches and formulas were also read and checked directly; this is not exhaustive formal verification of every connection mentioned in the final sections.

## English/Chinese names and evidence

The displayed English and Chinese names identify the intended concepts. No wrong main-title translation was established. An English mathematical source is not treated as evidence for a Chinese spelling, and university/author usage is not treated as normative standardization.

- **Integer divisibility, gcd and Euclidean algorithm:** [Xinxiang University's syllabus, Chapter 1, PDF p.2](https://sx.xxu.edu.cn/chudengshulun-110823.pdf) explicitly uses 整数整除, 最大公因数 and 辗转相除法. [Li's `chapter5.tex`, `sec:UFD`, paragraph before `def:UFD`](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) uses 最大公因子. Those sources were inspected October 15. They support the main names and the 最大公因子 variant; exact source evidence for the alias 最大公约数 was not separately established in this audit.
- **Congruence, arithmetic theorem, totient and CRT:** the same syllabus has 第三章 同余 and 第一节 同余的概念及其基本性质 on PDF pp.3–4, 欧拉函数 on PDF p.4, and 中国剩余定理 in Chapter 4's learning requirements on PDF p.4. Li's `def:UFD` following paragraph explicitly names 算术基本定理 for Z. The syllabus establishes usage, not proofs.
- **Fermat:** the syllabus uses `Fermat 小定理` and the spelling 费尔马定理. Thus it supports the intended little theorem but is not an exact printed occurrence of 费马小定理. The displayed 费马 spelling is not flagged as incorrect; exact full-name Chinese citation evidence remains a limitation of this audit. Conrad directly supports the English title and its distinction from Fermat's last theorem.
- **Number field and character:** [Zhang's notes, Chapter 1 opening and Section 4.1.1, Definition 4.2](https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf) directly supply 数域/代数数域 and 狄利克雷特征. The displayed main character name is therefore evidenced. The alternate 狄利克雷特征标 was not separately supported by an inspected naming passage.
- **Modular form and curve:** [Li's `chap2.tex`, `sec:j-invariant`, including its discussion of weight-two 模形式 and `def:Delta`](https://raw.githubusercontent.com/wenweili/Modulform/master/chap2.tex), and [Li's `chap3.tex`, end of `sec:Y-charts`](https://raw.githubusercontent.com/wenweili/Modulform/master/chap3.tex), supply the respective Chinese usage. The latter explicitly names the congruence-subgroup quotient an open 模曲线. The traditional-script aliases were checked as spelling variants, not independently sourced nomenclature standards.

Some elementary articles cite only English sources even though the inspected Chinese syllabus supplies useful naming evidence. Adding those exact passages would improve traceability, but the encyclopedia contract does not require the terminology JSON's separate `translationSources` fields. No change to the other writer's terminology records is proposed here.

## Primary-source inspection ledger

Locators below refer to passages actually read, not inferred from a title or search snippet. TeX labels are preferable to unstable raw line numbers: the live Li Algebra I source had shifted relative to the browser's earlier extraction, while `def:UFD` and its following paragraph remained present.

| Primary source | Inspected locators | Inspection date / limit |
| --- | --- | --- |
| [Milne, Algebraic Number Theory (ANT), v3.08](https://www.jmilne.org/math/CourseNotes/ANT.pdf) | Opening number-field definition; Introduction, ring of integers; Chapter 1 CRT discussion, printed pp.19–20 and Theorem 1.14; Chapter 2 Proposition 2.19, Corollary 2.20, Proposition 2.29; Chapter 3 Theorem 3.7 and ideal-class-group definition. | Read October 14. Reopening failed October 15; these checks are retained earlier evidence, not claimed as fresh retrieval. |
| [Milne, Group Theory (GT)](https://www.jmilne.org/math/CourseNotes/GT.pdf) | Theorem 1.26 and Corollary 1.27, Lagrange and element orders. | Reinspected October 15. |
| [Milne, Modular Functions and Modular Forms (MF)](https://www.jmilne.org/math/CourseNotes/MF.pdf) | Chapter 2 Remark 2.11 and Theorem 2.12(b); Chapter 4 Definition 4.5, Proposition 4.7, preceding j discussion; Chapter 8 Definition 8.1 and Remark 8.3, especially the coarse/fine distinction. | Targeted checks October 14–15; key branching, cusp-definition and coarse/fine passages reinspected October 15. Entire Chapters 6–8 were not exhaustively re-read. |
| [Conrad, Fermat's Little Theorem](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/fermatlittletheorem.pdf) | Theorem 1.2; Section 2 permutation proof; Section 3 compositeness tests. | Reinspected October 15. |
| [Conrad, Euler's Theorem](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/eulerthm.pdf) | Section 1 formula (1.1), Theorem 1.2 and phi(1) convention in the footnote; Section 3 prime-power count. | Reinspected October 15. |
| [Conrad, The Chinese Remainder Theorem](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf) | Theorem 1.1 and Section 2 constructive proof. | Reinspected October 15. |
| [Judson, AATA, Section 2.2](https://judsonbooks.org/aata-files/aata-html/integers-section-division-algorithm.html) | Theorem 2.2.1; divisibility/gcd paragraph before Theorem 2.2.2; Theorem 2.2.2 and Corollary 2.2.3; Subsection 2.2.1; Lemma 2.2.5 and Theorem 2.2.7. | Read October 14; gcd/Bézout and algorithm passages reinspected October 15. Corollary 2.2.3 states Bézout for coprime inputs; cancellation is a deduction, not that corollary's own statement. |
| [Li, Algebra I, author `chapter5.tex`](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) | `sec:UFD`, `def:UFD`, immediately following paragraph naming 算术基本定理, and nearby prime-element discussion. | Live raw author source reinspected October 15. |
| [Li, Modular Forms, author `chap2.tex`](https://raw.githubusercontent.com/wenweili/Modulform/master/chap2.tex) | `sec:j-invariant`, `def:Delta`, following weight-twelve proposition and proof. | Live raw author source reinspected October 15. |
| [Li, Modular Forms, author `chap3.tex`](https://raw.githubusercontent.com/wenweili/Modulform/master/chap3.tex) | `sec:Y-charts`, `eqn:chart-h`, `eqn:z-coordinate`; end-of-section 模曲线 passage; `sec:X-charts`; `sec:cong-compactification`, `prop:commensurable-covering`. | Live raw author source reinspected October 15. |
| [Zhang, HFUT-hosted Algebraic Number Theory notes](https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf) | Cover; Chapter 1 opening, Section 1.1.1 Definition 1.1; Section 1.2.1 Definition 1.10; Section 1.2.2 Definition 1.14 and Example 1.2, printed p.7; Section 4.1.1 Definitions 4.2–4.4, printed p.103. | Reinspected October 15. Cover confirms 张神星, HFUT, v2.5.0.0, January 9, 2024. The old BibTeX example in the preface still says v2.3; the articles correctly use the cover version. |
| [Xinxiang University, Elementary Number Theory syllabus](https://sx.xxu.edu.cn/chudengshulun-110823.pdf) | Chapter 1, PDF p.2; Chapter 3, PDF pp.3–4; Chapter 4 learning requirements, PDF p.4. | Reinspected October 15 for Chinese usage only. |

## Limits and handoff

This review does not certify originality or copyright compliance, inspect every external theorem mentioned in a Connections paragraph, validate every Chinese alias from a separate publication, inspect rendered KaTeX, run a build, or assess generated counts. The source `checked` dates of October 14 in the articles are retained writer metadata, not errors merely because this report is dated October 15. No claim is made that Milne ANT was successfully reopened on October 15.

Correct F1 before relying on the modular-curve branching explanation. F2–F4 are smaller editorial improvements. Preserve the explicit hypotheses and AI-assisted attribution already present. Subsequent changes to affected articles require rechecking those passages; this report is not a publication approval or an external peer-review claim.

## Resolution addendum — local reread, 2026-10-15

Re-read all four affected articles in full after the main writer's revisions: `modular-curve`, `integer-euclidean-algorithm`, `number-field`, and `euler-totient`. **F1–F4 are resolved in the inspected revisions.** This addendum supersedes the outstanding correction requests above; the original findings and coverage table remain a record of the earlier versions.

| Finding | Current location | Resolution verified |
| --- | --- | --- |
| F1 | `resources/content/encyclopedia/number-theory/modular-curve.md:35` | The paragraph now passes to the effective PSL(2,Z) action, identifies the local coordinate as w^e, and states branching exactly when e > 1. It explicitly excludes -I alone as a cause of branching. The smooth coarse curve and moduli-automorphism explanations remain correct. |
| F2 | `resources/content/encyclopedia/number-theory/integer-euclidean-algorithm.md:2` | The `extended Euclidean algorithm` alias is removed. The Overview still correctly explains coefficient tracking as the extended variant, while the definition returns a gcd. |
| F3 | `resources/content/encyclopedia/number-theory/number-field.md:2` | The Zhang locator now separates the Chapter 1 opening and Section 1.1.1, Definition 1.1, from Section 1.2.2, Definition 1.14 and Example 1.2, printed p.7 / PDF p.15. It agrees with the source evidence already recorded in this report. |
| F4 | `resources/content/encyclopedia/number-theory/euler-totient.md:45` | The added modulo-8 example correctly lists units 1,3,5,7 and distinguishes group size 4 from exponent 2. Their squares modulo 8 were recomputed as 1,1,1,1; because 3 is not 1 modulo 8, exponent 1 does not suffice. The article now meets the requested length target. |

Recomputed counts using the same repository rule as F4: modular curve **499**, Euclidean algorithm **442**, number field **457**, and totient **411**. All four remain within 380–500 words and retain seven required headings and valid JSON front matter. No new mathematical defect was identified in these four revisions.

This follow-up inspected local content and reused the primary-source evidence already recorded above. No new remote inspection was performed and no source `checked` date was added or changed. The earlier source-access and naming-evidence limits remain applicable. Only this report was appended; no articles, terminology, core code or generated content were edited, and no build or publication was performed. The main writer will handle the later rebuild. This closes these four accuracy findings, not the separate build/render checks or an external peer-review process.
