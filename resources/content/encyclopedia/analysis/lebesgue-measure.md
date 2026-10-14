---
{
  "id": "lebesgue-measure",
  "title": "Lebesgue Measure",
  "chinese": "Lebesgue测度",
  "aliases": [],
  "area": "analysis",
  "topic": "measure-theory",
  "level": "Undergraduate",
  "summary": "Lebesgue measure extends Euclidean volume to a complete measure on a sigma-algebra of measurable sets.",
  "prerequisites": [
    "measure-sigma-algebra",
    "outer-measure"
  ],
  "related": [
    "lebesgue-integral",
    "measure-null-set"
  ],
  "references": [
    {
      "id": "m-analysis-notes",
      "label": "John K. Hunter — Measure Theory",
      "url": "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf",
      "locator": "§§2.1–2.4, Definition 2.8 and Carathéodory construction",
      "checked": "2026-10-14",
      "note": "Inspected definition and theorem passages; exposition and calculations are original."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Lebesgue measure gives a rigorous meaning to length, area, and higher-dimensional volume for a large collection of subsets of Euclidean space. Its strength is compatibility with countable limiting operations. This permits integration of functions with discontinuities too widespread for elementary geometric arguments.

The construction separates two tasks: assigning an outer size to every set, and identifying the sets on which that size behaves additively. Not every subset of Euclidean space is Lebesgue measurable under the usual choice assumptions.

## Prerequisites

Know countable unions, complements, infima, and nonnegative series. A sigma-algebra is a family of sets closed under complements and countable unions. A measure on it assigns nonnegative sizes and is additive over countably many pairwise disjoint sets.

## Definition and conventions

On $\mathbb R^n$, define the outer measure
$$
m^*(E)=\inf\left\{\sum_{j=1}^{\infty}|Q_j|:E\subseteq\bigcup_{j=1}^{\infty}Q_j\right\},
$$
using open axis-parallel rectangles $Q_j$ and their ordinary volumes. A set $A$ is Lebesgue measurable if for every $E\subseteq\mathbb R^n$,
$$
m^*(E)=m^*(E\cap A)+m^*(E\setminus A).
$$
Lebesgue measure $m$ is the restriction of $m^*$ to these measurable sets. The value infinity is allowed. This article uses the complete Lebesgue sigma-algebra, rather than only its Borel restriction.

## Intuition

An outer covering asks how cheaply a set can be enclosed using familiar rectangles. Measurability says that cutting any set along $A$ creates no artificial excess in outer size. Countable coverings are essential: they allow infinitely many tiny pieces to be managed by a convergent volume budget.

## Examples and non-examples

Enumerate the rational numbers in $[0,1]$ as $q_1,q_2,\ldots$. For any $\varepsilon>0$, cover $q_j$ by an interval of length $\varepsilon 2^{-j}$. The sum of lengths is $\varepsilon$, hence the rationals have measure zero. Their complement in $[0,1]$ consequently has measure one.

Thus a dense set can have zero measure, and an uncountable set can also have zero measure, as the middle-thirds Cantor set does. Density and cardinality are not substitutes for volume. A singleton has measure zero, so measure zero does not mean empty.

## Important properties

The measurable sets form a sigma-algebra, and $m$ is countably additive there. All Borel sets are measurable. Completeness means every subset of a measurable null set is measurable and null, even if it is not Borel.

Translation leaves measure unchanged, while dilation by $r>0$ multiplies it by $r^n$. Continuity from below gives $m(\bigcup E_j)=\lim m(E_j)$ for increasing measurable sets. Continuity from above needs finite measure of the first set. The latter hypothesis prevents an intersection from losing infinitely much volume unnoticed.

## Connections and further reading

Lebesgue integration measures level sets and simple-function pieces using $m$. Almost-everywhere statements ignore null sets without asserting pointwise equality. [Hunter, §§2.1–2.4](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf) explains the covering construction, measurable splitting condition, and completion.

