---
{
  "id": "first-order-compactness",
  "title": "Compactness of First-Order Logic",
  "chinese": "一阶逻辑紧致性定理",
  "aliases": [],
  "area": "foundations",
  "topic": "logic",
  "level": "Graduate",
  "summary": "A set of first-order sentences has a model exactly when each of its finite subsets has a model.",
  "prerequisites": [
    "first-order-completeness",
    "satisfiability"
  ],
  "related": [
    "first-order-structure",
    "countable-set"
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

Compactness turns finite satisfiability into the existence of a single model satisfying an entire first-order theory. The models of the finite fragments may differ in size and interpretation. The theorem does not require them to fit into a previously chosen structure or to converge in an analytic sense.

## Prerequisites

Understand models, sentences, and syntactic consistency. Know the soundness and completeness theorem for classical first-order logic. The background domain convention is nonempty, and languages and theories are sets. An infinite theory may contain infinitely many separate axioms, each individually a finite formula.

## Definition and conventions

For a set $\Gamma$ of sentences in one fixed first-order language,
$$
\Gamma\text{ has a model}
\quad\Longleftrightarrow\quad
\text{every finite }\Gamma_0\subseteq\Gamma\text{ has a model}.
$$
The forward implication simply reuses the model of $\Gamma$. The converse is the compactness theorem. “Finite subset” refers to finitely many premises, not finite models. A finite fragment may require an infinite model; compactness places no uniform size restriction on the witnesses.

## Intuition

No contradiction can require infinitely many premises at once in a finitary calculus. If the whole theory were impossible, a finite portion would already reveal that impossibility. Compactness turns this observation about proofs into a theorem about structures.

## Examples and non-examples

Expand the language of arithmetic by a constant $c$. Add to the first-order theory of the standard natural numbers all sentences $c>\bar n$, one for each standard natural number $n$. Any finite fragment is satisfied in the standard structure by interpreting $c$ larger than all the finitely many mentioned numerals. Compactness produces a model of the entire expanded theory.

Its $c$ exceeds every standard numeral, so the model cannot be the standard natural numbers. The result supplies a nonstandard model, not a new standard natural number larger than all natural numbers.

For a contrasting requirement, insist on using the fixed standard structure for every sentence $c>\bar n$. Each finite fragment admits an interpretation there, but the whole collection does not. The missing hypothesis is the freedom to choose a new model.

## Important properties

Suppose every finite fragment is satisfiable but $\Gamma$ has no model. Completeness implies $\Gamma\vdash\bot$. A finite proof mentions finitely many premises, yielding $\Gamma_0\vdash\bot$ for a finite $\Gamma_0$. Soundness says $\Gamma_0$ has no model, contradicting the assumption. This establishes the nontrivial direction.

If a theory has arbitrarily large finite models, adjoining sentences requiring at least $n$ distinct elements yields an infinite model by the same argument. Consequently, the class of all finite structures cannot be axiomatized by a first-order theory.

## Connections and further reading

Compactness is a central model-construction tool and also reveals limits of first-order expressive power. It differs from compactness of a topological space, although connections exist through spaces of theories. See [Avigad, §7.2, Theorem 7.2.1 and Theorem 7.2.3](https://www.andrew.cmu.edu/user/avigad/Teaching/landc_notes.pdf) and [Yang, PDF pages 22–25](https://logic.fudan.edu.cn/doc/Course/2021/mathlogic17h.pdf).

