---
{
  "id": "banach-space",
  "title": "Banach Space",
  "chinese": "巴拿赫空间",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A Banach space is a normed vector space complete for the distance induced by its norm.",
  "prerequisites": [
    "normed-vector-space",
    "cauchy-sequence"
  ],
  "related": [
    "hilbert-space",
    "bounded-linear-operator",
    "lp-space"
  ],
  "references": [
    {
      "id": "f-analysis-notes",
      "label": "John M. Erdman — Functional Analysis and Operator Algebras: An Introduction",
      "url": "https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf",
      "locator": "§4.1, Definition 4.1.1 and Examples 4.1.5–4.1.6; §§6.3–6.7",
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

A Banach space is a setting in which approximation by a norm-Cauchy sequence produces an object inside the same space. It combines linear operations with a quantitative notion of error and a completeness guarantee. This framework allows functions, sequences, and operators to be treated as vectors.

Completeness is the decisive extra requirement. A normed space can support sensible finite calculations while still omit the limit of an approximation process.

## Prerequisites

Understand vector spaces, norms, and Cauchy sequences. A norm is nonnegative, vanishes only at zero, scales by the absolute value of a scalar, and satisfies the triangle inequality. Its induced distance is $d(x,y)=\|x-y\|$.

## Definition and conventions

A real or complex normed vector space $(X,\|\cdot\|)$ is Banach if every sequence satisfying
$$
\forall\varepsilon>0\ \exists N\ \forall m,n\ge N:
\|x_m-x_n\|<\varepsilon
$$
converges in norm to an element of $X$. Equivalent norms preserve completeness, but a genuinely different norm may change it. The scalar field is part of the specification.

## Intuition

A Cauchy sequence expresses internal agreement among sufficiently accurate approximations. Completeness says that this agreement corresponds to an actual object rather than an absent ideal limit. In applications, one first proves successive errors are small and then invokes completeness to obtain a candidate solution.

## Examples and non-examples

The continuous real functions on $[0,1]$ form a Banach space with $\|f\|_\infty=\sup|f|$. A uniformly Cauchy sequence converges pointwise because $\mathbb R$ is complete; the common error estimates make convergence uniform, so the limit stays continuous.

The finite-support sequences with the $\ell^2$ norm are incomplete. Let $x^{(N)}$ retain the first $N$ coordinates of $(1,1/2,1/3,\ldots)$. Their squared tail distances tend to zero because $\sum 1/n^2$ converges. The limit has infinitely many nonzero coordinates and lies outside the finite-support space. Completing it gives $\ell^2$.

Even continuous functions on $[0,1]$ become incomplete under the $L^1$ norm: continuous ramps can approximate a jump indicator in integral error, with no continuous function representing that limit almost everywhere.

## Important properties

Closed linear subspaces of Banach spaces are Banach with the inherited norm. Conversely, a complete linear subspace of a normed space is closed. Quotients by closed subspaces also admit complete quotient norms.

If $Y$ is Banach, bounded linear maps $X\to Y$ form a Banach space in the operator norm. An absolutely norm-summable series converges: the triangle inequality makes its partial sums Cauchy, and completeness supplies the limit. This argument justifies Neumann series for $I-T$ when $\|T\|<1$.

The open mapping, closed graph, and uniform boundedness theorems require completeness of specified spaces. Removing those hypotheses can invalidate conclusions about inverse maps or operator bounds.

## Connections and further reading

Hilbert spaces add an inner product, but many Banach norms do not arise from one. Weak topologies test convergence through linear measurements and can recover compactness missing in the norm topology. [Erdman, §4.1 and Chapter 6](https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf) develops examples and the main completeness-based results.

