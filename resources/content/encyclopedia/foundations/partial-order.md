---
{
  "id": "partial-order",
  "title": "Partial Order",
  "chinese": "偏序",
  "aliases": [],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Undergraduate",
  "summary": "A partial order is a reflexive, antisymmetric and transitive relation that may leave some pairs incomparable.",
  "prerequisites": ["set", "cartesian-product", "logical-implication"],
  "related": ["well-order", "equivalence-relation", "integer-divisibility", "power-set", "graph-tree", "categorical-limit"],
  "references": [
    {
      "id": "logic-proof-orders",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/relations.html",
      "locator": "§13.1 Order Relations: partial, total and strict orders and their conversion; §13.2 More on Orderings: least versus minimal elements",
      "checked": "2026-10-15",
      "note": "Supports the order axioms and convention distinctions; divisibility examples here are restricted to positive integers."
    },
    {
      "id": "keller-trotter-posets",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_posets_intro.html",
      "locator": "§6.1: poset and cover definitions, Hasse diagrams, and Example 6.7(1)–(3)",
      "checked": "2026-10-15",
      "note": "Supports inclusion, positive-integer divisibility and coordinatewise orders, and the interpretation of Hasse diagrams."
    },
    {
      "id": "keller-trotter-linear-extensions",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_posets_sorting.html",
      "locator": "§6.4 Linear Extensions of Partially Ordered Sets: opening definition and Discussion 6.24",
      "checked": "2026-10-15",
      "note": "Supports linear extensions and the finite existence question; the article supplies its own finite proof sketch."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A partial order describes comparisons that respect equality and can be composed, without requiring every pair to be comparable. Inclusion between sets and divisibility between positive integers are basic examples. This language makes it possible to discuss smallest objects, compatible requirements and bounds without first assigning numerical sizes.

## Prerequisites

Understand a binary relation on $P$ as a subset of $P\times P$, together with implication and equality. The domain is part of the data: a relation may satisfy the order axioms on one domain and fail them on a larger one.

## Definition and conventions

A relation $\le$ on $P$ is a partial order if, for all $a,b,c\in P$, it satisfies reflexivity $a\le a$, antisymmetry

$$
(a\le b\text{ and }b\le a)\Longrightarrow a=b,
$$

and transitivity: $a\le b$ and $b\le c$ imply $a\le c$. The pair $(P,\le)$ is a partially ordered set, or poset. The Chinese title 偏序 names the relation; 偏序集 names the equipped set.

Distinct elements are incomparable if neither comparison holds. A total order additionally requires comparability of every pair. Write $a<b$ when $a\le b$ and $a\ne b$. This associated strict order is irreflexive and transitive, so it follows a different reflexivity convention.

## Intuition

Think of $a\le b$ as saying that $b$ contains at least the information or requirements present in $a$. Two objects can offer different information without either containing the other. Antisymmetry says that mutual containment identifies the objects; it does not prohibit all comparisons in opposite directions, since equality must remain possible.

For a finite poset, a Hasse diagram draws only covers: $b$ covers $a$ if $a<b$ and no element lies strictly between them. Upward paths recover the omitted transitive comparisons. Reflexive loops are omitted as well.

## Examples and non-examples

Order the positive divisors $D=\{1,2,3,4,6,12\}$ of $12$ by divisibility. Reflexivity follows from $a=a\cdot1$; transitivity follows by multiplying the two quotient integers. If positive $a,b$ divide one another, $b=ra$ and $a=sb$ give $rs=1$, hence $r=s=1$ and $a=b$.

Here $2$ and $3$ are incomparable. Their greatest common lower bound is $1$, and their least common upper bound is $6$. The word “least” concerns this divisibility order, rather than the ordinary size of the labels.

Restrict instead to $\{2,3,6\}$ with the same relation. Both $2$ and $3$ are minimal: neither has a smaller member in this domain. Neither is a least element, because neither lies below the other. There is no common lower bound within this restricted set.

Divisibility on all integers is not antisymmetric: $2$ divides $-2$ and $-2$ divides $2$. Another non-example is the usual strict relation $<$ regarded as a non-strict partial order; it fails reflexivity.

## Important properties

A least element, if it exists, is unique. If $l$ and $m$ are both least, then $l\le m$ and $m\le l$, so antisymmetry gives equality. The same argument proves uniqueness of a least upper bound. Existence is an additional property, not an order axiom.

Every nonempty finite poset has a minimal element. Proof sketch: keep moving strictly downward while possible. Transitivity and irreflexivity prohibit repetition, so finiteness forces termination. Removing a minimal element repeatedly gives a linear extension: a total order preserving all original comparisons. For the divisor example, $1,2,3,4,6,12$ is one such extension, and $1,3,2,6,4,12$ is another.

The finite assumption matters to this argument. The integers in their usual order have no minimal element, so there is no first removal step of that kind.

## Connections and further reading

Well-orders add a least-element requirement for every nonempty subset. Inclusion orders organize subspaces, ideals and families of sets. Rooting a tree similarly gives an ancestor order along its unique paths. These are useful preparations for universal constructions, where a candidate is often characterized by a comparison property.

Read [Logic and Proof, §§13.1–13.2](https://leanprover-community.github.io/logic_and_proof/relations.html) and [Keller–Trotter, §§6.1](https://rellek.net/book-2016/s_posets_intro.html) and [6.4](https://rellek.net/book-2016/s_posets_sorting.html) for order conventions, diagrams and linear extensions.
