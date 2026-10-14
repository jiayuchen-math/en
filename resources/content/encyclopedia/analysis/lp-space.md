---
{
  "id": "lp-space",
  "title": "Lebesgue Lp Space",
  "chinese": "L^p空间",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "An Lp space consists of measurable functions modulo almost-everywhere equality with finite p-integrability.",
  "prerequisites": [
    "lebesgue-integral",
    "holder-integral-inequality"
  ],
  "related": [
    "banach-space",
    "hilbert-space",
    "sobolev-space"
  ],
  "references": [
    {
      "id": "m-analysis-notes",
      "label": "John K. Hunter — Measure Theory",
      "url": "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf",
      "locator": "§§7.1–7.4, Definitions 7.1–7.2; Theorems 7.5–7.8; Lemma 7.9; Theorem 7.10 (Riesz–Fischer)",
      "checked": "2026-10-14",
      "note": "Definition, conventions, and basic results inspected; original explanation and examples."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The $L^p$ spaces convert integrability into a geometry of functions. Their norms measure the size of a function and the error between two approximations. Different exponents emphasize different features: a large exponent penalizes high peaks strongly, while a small exponent gives more weight to total spread.

These spaces are built from equivalence classes. This is essential because integration cannot distinguish functions that differ only on a null set, whereas a norm must distinguish different vectors.

## Prerequisites

Know measure spaces, measurable functions, and Lebesgue integration. Understand almost-everywhere equality and the role of a quotient: an element represents all measurable functions agreeing outside a null set. Hölder's inequality controls products, and Minkowski's inequality supplies the triangle inequality.

## Definition and conventions

For a measure space $(X,\mathcal A,\mu)$ and $1\le p<\infty$,
$$
L^p(X,\mu)=\left\{f:\int_X|f|^p\,d\mu<\infty\right\}/\text{a.e. equality},
\qquad
\|f\|_p=\left(\int_X|f|^p\,d\mu\right)^{1/p}.
$$
Measurability is required. The space $L^\infty$ uses the essential supremum of $|f|$. Values on null sets are ignored. For $0<p<1$, the analogous expression defines a useful quasi-norm, but that case is outside this article's Banach-space convention.

## Intuition

The exponent selects how size is aggregated. Concentrating a fixed total amount into a narrower, taller spike can leave its $L^1$ norm unchanged while increasing its $L^2$ norm. Pointwise height and integral size therefore answer different approximation questions.

## Examples and non-examples

On $(0,1)$, let $f(x)=x^{-\alpha}$ with $\alpha>0$. Then
$$
\int_0^1|f|^p\,dx=\int_0^1x^{-\alpha p}\,dx
$$
is finite exactly when $\alpha p<1$. For $\alpha=1/3$, the function belongs to $L^2$ but not $L^3$, illustrating the threshold precisely.

Changing the value of the zero function to $10^{100}$ at one point still represents the zero element for Lebesgue measure. On the same interval, $f_n=n\mathbf1_{(0,1/n)}$ has $L^1$ norm one despite tending to zero almost everywhere. Almost-everywhere convergence alone is thus not convergence in $L^1$.

## Important properties

For every measure space and $1\le p\le\infty$, $L^p$ is complete. A proof selects from a Cauchy sequence a subsequence with summable norm differences. Those differences produce an almost-everywhere convergent series, and integral estimates give convergence in norm; the full Cauchy sequence then follows.

On a finite measure space, $L^q\subseteq L^p$ when $q\ge p$, by Hölder's inequality. No such unconditional inclusion holds on an infinite measure space. For $p=2$, integration defines an inner product, making $L^2$ a Hilbert space. Simple functions are dense, and on Euclidean domains smooth compactly supported functions are dense for finite $p$.

## Connections and further reading

Sobolev spaces impose $L^p$ control on weak derivatives. Duality identifies many continuous linear measurements with integration against conjugate-exponent functions, under the appropriate measure assumptions. [Hunter, Chapter 7](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf) develops the quotient definition, inequalities, density, and completeness.

