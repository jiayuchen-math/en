---
{
  "id": "universal-quantifier",
  "title": "Universal Quantifier",
  "chinese": "全称量词",
  "aliases": [],
  "area": "foundations",
  "topic": "logic",
  "level": "Undergraduate",
  "summary": "Universal quantification asserts that a formula holds for every element of a specified domain, with all other parameters fixed.",
  "prerequisites": [
    "first-order-sentence"
  ],
  "related": [
    "existential-quantifier",
    "free-variable"
  ],
  "references": [
    {
      "id": "logic-proof-quantifiers",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/first_order_logic.html",
      "locator": "§7.2 The Universal Quantifier; §7.3 The Existential Quantifier",
      "checked": "2026-10-14",
      "note": "Quantifier scope and the arbitrary-variable restriction."
    },
    {
      "id": "logic-proof-semantics",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/semantics_of_first_order_logic.html",
      "locator": "§10.2 Truth in a Model; §10.4 Validity and Logical Consequence; §10.5 Soundness and Completeness",
      "checked": "2026-10-14",
      "note": "Evaluation of quantifiers in a structure."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The universal quantifier turns a claim about an unspecified object into a claim about every object in a domain. It is written $\forall$, read “for all.” Many mathematical theorems have this shape, even when prose hides the symbol. Stating the domain and the position of other quantifiers is part of stating the theorem correctly.

## Prerequisites

Understand predicates, variables, and implication. A structure supplies a domain and meanings for function and relation symbols. Free variables receive values from an assignment; bound variables are controlled by quantifiers. These distinctions prevent an assertion about a chosen example from being mistaken for a general law.

## Definition and conventions

For a first-order structure $M$ with nonempty domain $D$ and an assignment $s$,
$$
M,s\models\forall x\,\varphi
\quad\Longleftrightarrow\quad
M,s[x\mapsto a]\models\varphi\text{ for every }a\in D.
$$
The assignment $s[x\mapsto a]$ changes only the value of $x$. Use parentheses to specify scope. Restricted notation $\forall x\in A\;P(x)$ abbreviates $\forall x\;(x\in A\to P(x))$ in a language where that membership condition is meaningful. An empty restricting set therefore makes this statement true, even though ordinary first-order structures here have nonempty domains.

## Intuition

A universal assertion survives every permitted challenge. An opponent chooses the input; the argument must handle it without imposing extra conditions. A proof beginning “let $n$ be arbitrary” expresses exactly this obligation. Arbitrary does not mean randomly sampled, nor does it mean selected because it has a convenient special property.

## Examples and non-examples

For every integer $n$, the product $n(n+1)$ is even: one of two consecutive integers is even, and multiplication preserves divisibility by two. This is a proof for an arbitrary integer, rather than a check of a finite list. In contrast, $\forall n\in\mathbb Z\;(n^2>0)$ fails at $n=0$.

Over the integers, $\forall x\,\exists y\;(y=x+2)$ holds: after receiving $x$, choose $y=x+2$. The reversed statement $\exists y\,\forall x\;(y=x+2)$ fails. For $x=0$ it requires $y=2$, while $x=1$ requires $y=3$. A single witness cannot meet both requirements.

## Important properties

Universal elimination substitutes a suitable term for the quantified variable, with substitution arranged to avoid capture. Universal introduction requires that the variable be absent from the undischarged assumptions on which the conclusion depends. From the temporary assumption $x=0$, one cannot conclude that every $x$ equals zero.

Classically, negating a universal statement gives an existential counterexample: $\neg\forall x\,P(x)$ is equivalent to $\exists x\,\neg P(x)$. This is why one explicit failure disproves a universal claim. Constructive logic treats some of these equivalences more cautiously.

## Connections and further reading

Quantifier order distinguishes pointwise choices from uniform choices and appears throughout analysis and algebra. Read [Logic and Proof, §7.2–§7.3](https://leanprover-community.github.io/logic_and_proof/first_order_logic.html) for proof rules and [§10.2](https://leanprover-community.github.io/logic_and_proof/semantics_of_first_order_logic.html) for semantics. [Yang’s slides, PDF pages 17–20](https://logic.fudan.edu.cn/doc/Course/2021/mathlogic11h.pdf) independently document the Chinese terminology.

