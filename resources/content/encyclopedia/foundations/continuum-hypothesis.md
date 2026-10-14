---
{
  "id": "continuum-hypothesis",
  "title": "Continuum Hypothesis",
  "chinese": "连续统假设",
  "aliases": [
    "CH"
  ],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Research",
  "summary": "The continuum hypothesis states that the cardinality of the real numbers is the least uncountable cardinal.",
  "prerequisites": [
    "set-cardinality",
    "countable-set",
    "first-order-completeness"
  ],
  "related": [
    "power-set",
    "well-order"
  ],
  "references": [
    {
      "id": "ch",
      "label": "Chris Lambie-Hanson — The Continuum Hypothesis, the Axiom of Choice, and Lebesgue Measurability",
      "url": "https://www.math.cmu.edu/~clambieh/ch.pdf",
      "locator": "PDF pp.57–63 Real numbers / The Continuum Hypothesis; pp.71–79 Gödel’s Constructible Universe / Forcing",
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

The continuum hypothesis asks whether the first infinite size above countability already exhausts the size of the real line. It is a precise statement about arbitrary sets of real numbers, rather than their lengths, densities, or geometric dimensions. Its independence from ZFC is a central example of how axioms constrain, but need not uniquely decide, mathematical structures.

## Prerequisites

Know cardinal comparison by injections, bijections, power sets, and ordinals. Work in ZFC when using $\aleph_1$ as the least uncountable cardinal. Understand relative consistency: a theorem of independence assumes the consistency of the background axioms rather than proving that consistency.

## Definition and conventions

Let $\aleph_0=|\mathbb N|$, let $\aleph_1$ denote the least uncountable cardinal, and let $\mathfrak c=|\mathbb R|=2^{\aleph_0}$. The continuum hypothesis, abbreviated CH, asserts
$$
2^{\aleph_0}=\aleph_1.
$$
Equivalently in ZFC, there is no cardinal strictly between $|\mathbb N|$ and $|\mathbb R|$. Another equivalent formulation says that every uncountable subset of $\mathbb R$ has cardinality $\mathfrak c$.

The generalized continuum hypothesis makes a corresponding claim for every infinite cardinal. CH is only its instance at $\aleph_0$.

## Intuition

Cantor’s diagonal argument proves that real numbers cannot be listed by natural numbers. It establishes a gap, but does not identify its size. CH says the continuum occupies the very next available cardinal position. Neither the visual continuity of the real line nor the density of the rationals answers this question.

## Examples and non-examples

The interval $(2,5)$ has the same cardinality as $\mathbb R$. An explicit bijection is $x\mapsto 7/2+(3/\pi)\arctan x$. Thus a short bounded interval has continuum size even though it is a proper subset of the line. The rationals in that interval remain countable despite being dense.

These examples do not prove CH: neither exhibits an arbitrary uncountable set nor excludes intermediate cardinalities. The equation $\mathfrak c=\aleph_2$ contradicts CH but is compatible with ZFC relative to the usual consistency assumption.

## Important properties

If ZFC is consistent, both ZFC + CH and ZFC + $\neg$CH are consistent. The two directions use different methods. Gödel’s constructible universe supplies the CH direction. Cohen’s forcing supplies the opposite direction by adding sufficiently many subsets of the natural numbers while controlling which cardinals collapse.

This is a proof framework, not a complete forcing construction. Preservation is essential: adding many real codes alone would not establish failure of CH if the proposed construction also collapsed the cardinal intended to remain larger than $\aleph_1$.

## Connections and further reading

First-order completeness is compatible with this independence: an unprovable sentence may fail in some models of the axioms and hold in others. Contemporary work investigates additional axioms and their effects on the continuum. See [Lambie-Hanson, PDF pages 58–63 and 71–79](https://www.math.cmu.edu/~clambieh/ch.pdf) for the statement and the two model-construction directions.

