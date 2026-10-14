---
{
  "id": "first-order-completeness",
  "title": "Completeness of First-Order Logic",
  "chinese": "一阶逻辑完全性定理",
  "aliases": [],
  "area": "foundations",
  "topic": "logic",
  "level": "Graduate",
  "summary": "Classical first-order semantic consequence coincides with formal derivability in a sound complete calculus.",
  "prerequisites": [
    "first-order-structure",
    "logical-consequence",
    "syntactic-consistency"
  ],
  "related": [
    "first-order-compactness",
    "continuum-hypothesis"
  ],
  "references": [
    {
      "id": "avigad",
      "label": "Jeremy Avigad — Logic and Computation (January 2002)",
      "url": "https://www.andrew.cmu.edu/user/avigad/Teaching/landc_notes.pdf",
      "locator": "§6.3, Theorems 6.3.1–6.3.2; §7.2, Theorem 7.2.1",
      "checked": "2026-10-14",
      "note": "Precisely scoped theorem and its proof framework."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The completeness theorem relates two ways of asking whether premises force a conclusion. Semantically, every model of the premises must satisfy it. Syntactically, a finite formal derivation must produce it. For classical first-order logic, suitable proof systems capture exactly the semantic consequences.

## Prerequisites

Know first-order languages, structures with nonempty domains, satisfaction, and derivations. Distinguish $\models$, which refers to truth across interpretations, from $\vdash$, which refers to the existence of a proof. Equality is interpreted as actual equality in the structures under discussion.

## Definition and conventions

Let $L$ be a set-sized first-order language, $\Gamma$ a set of $L$-sentences, and $\varphi$ an $L$-sentence. For a standard sound complete classical calculus,
$$
\Gamma\models\varphi\quad\Longleftrightarrow\quad\Gamma\vdash\varphi.
$$
The right-to-left implication is soundness. Completeness is the other direction. Equivalently, every syntactically consistent set of sentences has a model. Usual proofs for arbitrary languages work in a background set theory with suitable choice; a countable Henkin construction can instead be presented by enumeration.

“Complete logic” does not mean that each consistent theory decides every sentence. A theory is complete in that different sense when it proves either $\psi$ or $\neg\psi$ for every sentence $\psi$.

## Intuition

Models test every way of interpreting the symbols that respects the premises. Proof rules provide finite certificates of statements surviving all those tests. Completeness says that this certificate language misses no first-order consequence; it does not give a fixed running-time bound for discovering a certificate.

## Examples and non-examples

Let $\Gamma=\{\forall x(P(x)\to Q(x)),P(c)\}$. Every model of $\Gamma$ satisfies $Q(c)$. A derivation first instantiates the universal sentence at $c$, then applies implication elimination.

By contrast, $\{P(c)\}$ does not entail $Q(c)$. Take a one-element domain, interpret $P$ as the whole domain and $Q$ as empty. This model satisfies the premise and refutes the proposed conclusion. Soundness rules out a derivation of $Q(c)$ from that premise.

## Important properties

A Henkin proof enlarges a consistent theory with names witnessing existential requirements, then completes it while preserving consistency. Closed terms provide candidate domain elements; when equality is present, quotient them by the provable equality relation. Interpret operations by term formation and relations by membership in the completed theory. A truth lemma, proved by induction on formulas, shows that this structure satisfies the theory.

If $\Gamma$ cannot prove $\varphi$, classical deduction makes $\Gamma\cup\{\neg\varphi\}$ consistent. The constructed model then refutes semantic entailment. This contrapositive yields completeness.

## Connections and further reading

Compactness follows because a derivation uses finitely many premises. Arithmetic incompleteness concerns what a particular effectively axiomatized theory decides and is compatible with completeness of the underlying logic. Full second-order semantics requires a different treatment. Read [Avigad, §6.3, Theorems 6.3.1–6.3.2](https://www.andrew.cmu.edu/user/avigad/Teaching/landc_notes.pdf) and [Yang, PDF pages 5–21](https://logic.fudan.edu.cn/doc/Course/2021/mathlogic17h.pdf).

