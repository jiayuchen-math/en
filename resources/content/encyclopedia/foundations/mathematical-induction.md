---
{
  "id": "mathematical-induction",
  "title": "Mathematical Induction",
  "chinese": "数学归纳法",
  "aliases": [],
  "area": "foundations",
  "topic": "proofs",
  "level": "Undergraduate",
  "summary": "Mathematical induction proves a property of every natural number from a base case and a successor step.",
  "prerequisites": [
    "universal-quantifier",
    "logical-implication"
  ],
  "related": [
    "strong-induction",
    "well-order"
  ],
  "references": [
    {
      "id": "induction",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/the_natural_numbers_and_induction.html",
      "locator": "§17.1 The Principle of Induction; §17.2 Variants of Induction",
      "checked": "2026-10-14",
      "note": "Definition, stated hypotheses and proof framework."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Mathematical induction proves an unlimited sequence of statements using a finite argument. It combines a verified starting point with a rule that carries truth from one index to the next. Its logical strength comes from the structure of the natural numbers, where every index is reached after finitely many successor steps.

## Prerequisites

Use $\mathbb N=\{0,1,2,\ldots\}$ and understand predicates indexed by natural numbers. Know implication and the distinction between assuming a statement temporarily and asserting that it has already been proved for every index. Algebraic manipulations used in the induction step require their own justification.

## Definition and conventions

For a property $P$ of natural numbers, the induction principle is
$$
\bigl(P(0)\ \wedge\ \forall n\in\mathbb N\;(P(n)\to P(n+1))\bigr)
\ \Longrightarrow\ \forall n\in\mathbb N\;P(n).
$$
A theorem beginning at $n_0$ instead requires $P(n_0)$ and the step for every $n\geq n_0$. In first-order arithmetic, induction is an axiom scheme for formulas, with parameters allowed; it is not a single first-order quantification over all arbitrary subsets of the domain.

## Intuition

The step is a reusable bridge, rather than an assertion that the theorem is already true. The base case puts truth on the first side of the first bridge. Without that starting point, all the bridges may exist while no index satisfies the property.

## Examples and non-examples

Prove $3$ divides $4^n-1$ for every $n\geq0$. At zero the expression is zero, which is divisible by three. Suppose $4^n-1=3k$ for an integer $k$. Then
$$
4^{n+1}-1=4(4^n-1)+3=3(4k+1),
$$
so the next expression is also divisible by three. This completes both required parts.

The false property $n<0$ nevertheless satisfies $P(n)\to P(n+1)$ on $\mathbb N$: its antecedent is always false. It fails at the base case. Conversely, verifying the formula at zero, one, and two supplies no successor argument and proves no universal statement.

## Important properties

Strong induction allows the step at $n$ to use all earlier cases. Ordinary induction implies it by applying induction to the assertion that every case through $n$ holds. A least-counterexample argument gives another formulation: a hypothetical smallest failure has earlier cases available and therefore cannot fail.

Induction does not apply automatically to real numbers or to an order with infinite descending chains. The underlying relation must support an appropriate well-founded induction principle; the domain is part of the theorem.

## Connections and further reading

Recursion constructs objects using earlier values, whereas induction proves properties of those objects. Transfinite induction extends the method to well-orders without claiming that every stage has an immediate predecessor. Read [Logic and Proof, §17.1–§17.2](https://leanprover-community.github.io/logic_and_proof/the_natural_numbers_and_induction.html) for variants and their logical relationship.

