---
{
  "id": "lebesgue-integral",
  "title": "Lebesgue Integral",
  "chinese": "Lebesgue积分",
  "aliases": [],
  "area": "analysis",
  "topic": "measure-theory",
  "level": "Undergraduate",
  "summary": "The Lebesgue integral accumulates measurable values by approximation with simple functions.",
  "prerequisites": [
    "lebesgue-measure",
    "measurable-real-function",
    "measurable-simple-function"
  ],
  "related": [
    "dominated-convergence-theorem",
    "lp-space"
  ],
  "references": [
    {
      "id": "m-analysis-notes",
      "label": "John K. Hunter — Measure Theory",
      "url": "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf",
      "locator": "§§4.1–4.3 and §4.5, Definition 4.4, Theorems 4.6 and 4.24",
      "checked": "2026-10-14",
      "note": "Definition and stated hypotheses inspected; original examples and explanatory synthesis."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The Lebesgue integral extends integration by measuring where a function takes its values. Its definition works on an abstract measure space, so the same framework handles Euclidean volume and discrete counting. The method is especially useful for limits of functions, where pointwise behavior and total accumulated mass can diverge.

A nonnegative measurable function always has an extended integral, possibly infinity. Calling a real or complex function integrable is a stronger assertion: its absolute value must have finite integral.

## Prerequisites

Understand measures, measurable functions, and finite-valued simple functions. A simple function can be written using finitely many indicators of measurable sets. Such functions are the building blocks from which general nonnegative integrands are approximated.

## Definition and conventions

Let $(X,\mathcal A,\mu)$ be a measure space. For a nonnegative simple function $s=\sum_{j=1}^N a_j\mathbf1_{E_j}$ with disjoint measurable $E_j$, define
$$
\int_X s\,d\mu=\sum_{j=1}^N a_j\mu(E_j).
$$
The product $0\cdot\infty$ is interpreted as zero here. For measurable $f\ge0$,
$$
\int_X f\,d\mu=\sup_{0\le s\le f,\ s\text{ simple}}\int_X s\,d\mu.
$$
For a real $f$, write $f=f^+-f^-$ with $f^\pm\ge0$. Integrability means $\int |f|\,d\mu<\infty$, and then the integral is the difference of the two finite integrals. Complex functions are treated through real and imaginary parts.

## Intuition

Instead of demanding good behavior on every small input interval, group points according to approximate output height. Each height is multiplied by the measure of the region carrying it. Finer simple approximations capture increasingly detailed value information.

## Examples and non-examples

On $[0,1]$, the indicator of the rationals has Lebesgue integral zero because its supporting set is null. Every interval contains both rational and irrational points, so its Riemann upper sums are one and lower sums zero. This is a concrete enlargement of integration, rather than a different value for a Riemann integrable function.

For $f(x)=x^{-1/2}$ on $(0,1)$, truncating away from zero gives integrals $2(1-\sqrt\varepsilon)$ and hence total integral $2$. The function $1/x$ has infinite integral there and is not integrable, despite being measurable and finite at every domain point.

## Important properties

For integrable functions the integral is linear and satisfies $|\int f|\le\int|f|$. Altering a function on a null set does not change its integral, under the relevant measurability convention.

Monotone convergence permits increasing nonnegative measurable approximations to pass through the integral, even when the answer is infinite. Dominated convergence permits almost-everywhere limits when one integrable function bounds all absolute values. The domination hypothesis prevents a shrinking spike from retaining hidden mass: $n\mathbf1_{(0,1/n)}$ tends to zero almost everywhere while all its integrals equal one.

## Connections and further reading

The $L^p$ spaces organize integrability into complete normed spaces. Fubini and Tonelli govern iterated integration with different assumptions. [Hunter, Chapter 4](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf) develops the simple-function definition and convergence theorems; checking their hypotheses is part of using the integral.

