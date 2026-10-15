---
{
  "id": "countable-set",
  "title": "Countable Set",
  "chinese": "可数集",
  "aliases": [],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Undergraduate",
  "summary": "A countable set is finite or can be listed by the natural numbers without omission or repetition.",
  "prerequisites": ["set", "injective-function", "surjective-function", "bijective-function"],
  "related": ["set-cardinality", "power-set", "continuum-hypothesis", "first-order-compactness", "dynamical-orbit"],
  "references": [
    {
      "id": "logic-proof-countability",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/the_infinite.html",
      "locator": "§22.2 Countably Infinite Sets: definition, surjection characterization, products and finite sequences; §22.3 Cantor's Theorem",
      "checked": "2026-10-15",
      "note": "Supports the inclusive convention, enumeration methods and the distinction between countable sets and the real continuum."
    },
    {
      "id": "gowers-countability",
      "label": "Timothy Gowers — A quick introduction to countability",
      "url": "https://www.dpmms.cam.ac.uk/~wtg10/countability.html",
      "locator": "Definition 4; A few useful facts (B), countable unions, and (D), diagonalization for subsets of N",
      "checked": "2026-10-15",
      "note": "Supports countable unions and the power-set diagonal argument; the article handles empty sets explicitly."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Countability expresses the possibility of assigning distinct natural-number labels to every member of a set. It includes infinite collections, so it measures something different from whether a counting process eventually stops. The integers and rational numbers are countable, whereas the real numbers are not. This distinction underlies enumeration arguments in logic and the separation between discrete data and the continuum.

## Prerequisites

Use functions, injections, surjections and bijections, together with elementary induction. Take $\mathbb N=\{0,1,2,\ldots\}$. A list means a mathematically specified function; no requirement of an effective computer algorithm is built into countability.

## Definition and conventions

A set $A$ is countably infinite if there is a bijection $\mathbb N\to A$. It is countable if it is finite or countably infinite. Thus $\emptyset$ is countable. Some texts reserve “countable” for the infinite case; this article follows the inclusive convention of the existing terminology entry.

Equivalently, $A$ is countable exactly when it admits an injection into $\mathbb N$. For nonempty $A$, this is also equivalent to a surjection $\mathbb N\to A$. The nonempty assumption is necessary: there is no function from $\mathbb N$ to $\emptyset$. Repetitions in a surjective enumeration can be removed by keeping each element at its first occurrence.

## Intuition

An infinite list has no final position, but each particular member must appear at some finite position. Reading the first row of an infinite array completely before starting the second row therefore fails to enumerate the array. A diagonal traversal succeeds because only finitely many pairs precede any specified diagonal.

Countability also concerns the elements themselves rather than how densely they sit in another space. Arbitrarily fine approximation and cardinality are different questions.

## Examples and non-examples

To enumerate $\mathbb Z$, start with $0$, then alternate positive and negative integers:

$$
0,1,-1,2,-2,3,-3,\ldots.
$$

More explicitly, send $0$ to $0$, $2k-1$ to $k$, and $2k$ to $-k$ for $k\ge1$. Every nonzero integer appears once, with its sign determining the parity of its index.

For rational numbers, list pairs $(p,q)$ with $p\in\mathbb Z$ and $q\ge1$ in increasing order of $|p|+q$, and map each pair to $p/q$. Each stage is finite and each rational number eventually appears. Removing duplicate values gives a bijection with $\mathbb N$. Although $\mathbb Q$ is dense in $\mathbb R$, it remains countable.

The power set $\mathcal P(\mathbb N)$ is a non-example. Given any proposed enumeration $A_0,A_1,\ldots$, form

$$
D=\{n\in\mathbb N:n\notin A_n\}.
$$

For each $n$, membership of $n$ distinguishes $D$ from $A_n$, so the list misses $D$. Infinite binary sequences are likewise uncountable: a sequence corresponds to the set of positions where it equals one.

## Important properties

Subsets and images of countable sets are countable. For a subset, restrict an injection into $\mathbb N$; for an image, use the original enumeration and discard repetitions. Finite Cartesian products of countable sets are countable, using diagonal enumeration of pairs and induction.

In ordinary ZFC mathematics, a countable union of countable sets is countable. The proof idea is to enumerate each nonempty set, then enumerate the pairs consisting of a set index and a position in its list. If the individual enumerations have not been supplied, choosing them is a choice step; that distinction matters when working without the axiom of choice.

Finite strings over a countable alphabet form a countable set: group them by length, use finite products for each length, then take a countable union. This argument does not apply to infinite strings.

## Connections and further reading

Finite syntax over a countable stock of symbols explains why many logical constructions can be arranged in stages. Countable sets also prepare the cardinal comparisons in the continuum hypothesis. In dynamics, a discrete forward orbit is countable because it is an image of $\mathbb N$, even when its closure is much larger.

Read [Logic and Proof, §§22.2–22.3](https://leanprover-community.github.io/logic_and_proof/the_infinite.html) for enumeration and diagonalization, and [Gowers, facts (B) and (D)](https://www.dpmms.cam.ac.uk/~wtg10/countability.html) for the union and power-set arguments.
