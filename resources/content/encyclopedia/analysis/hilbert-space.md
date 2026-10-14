---
{
  "id": "hilbert-space",
  "title": "Hilbert Space",
  "chinese": "希尔伯特空间",
  "aliases": [],
  "area": "analysis",
  "topic": "functional-analysis",
  "level": "Graduate",
  "summary": "A Hilbert space is an inner-product space complete in its induced norm.",
  "prerequisites": [
    "normed-vector-space",
    "banach-space"
  ],
  "related": [
    "orthogonal-projection",
    "weak-banach-convergence",
    "fourier-series"
  ],
  "references": [
    {
      "id": "f-analysis-notes",
      "label": "John M. Erdman — Functional Analysis and Operator Algebras: An Introduction",
      "url": "https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf",
      "locator": "§§4.1, 4.3–4.6, Definition 4.1.1",
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

A Hilbert space extends Euclidean geometry to spaces of functions and infinite sequences. An inner product defines angles, orthogonality, and length, while completeness ensures that convergent approximation procedures remain within the space. These features make projection and spectral methods available far beyond finite-dimensional linear algebra.

The inner product is additional structure. A complete normed space need not admit one compatible with its given norm.

## Prerequisites

Know vector spaces, norms, complex conjugation, and completeness. In an inner-product space the Cauchy–Schwarz inequality implies the triangle inequality for the induced norm. For infinite expansions, convergence in that norm replaces finite coordinate addition.

## Definition and conventions

A Hilbert space is a real or complex vector space $H$ with an inner product $\langle x,y\rangle$ for which
$$
\|x\|=\sqrt{\langle x,x\rangle}
$$
gives a complete metric. In the complex case, this article takes the inner product linear in the first argument and conjugate-linear in the second. Switching that convention changes formulas for representing linear functionals, but not orthogonality or norms.

## Intuition

Orthogonality makes squared errors add. This turns approximation into geometry: the best approximation in a closed subspace is obtained by removing an orthogonal remainder. Infinite-dimensional problems remain tractable because completeness permits infinitely many orthogonal components to be assembled.

## Examples and non-examples

For $\ell^2$, set
$$
\langle x,y\rangle=\sum_{n=1}^{\infty}x_n\overline{y_n}.
$$
The series converges absolutely by Cauchy–Schwarz. The vector $x=(2^{-n})_{n\ge1}$ has squared norm $\sum4^{-n}=1/3$. Projecting onto the first $N$ coordinates leaves squared error $4^{-N}/3$.

The space $\mathbb R^2$ with norm $\|(a,b)\|_1=|a|+|b|$ is Banach but is not Hilbert with that norm. For the coordinate vectors $e_1,e_2$, the sum of squared norms of $e_1+e_2$ and $e_1-e_2$ is $8$, whereas $2\|e_1\|^2+2\|e_2\|^2=4$. An inner-product norm must satisfy the parallelogram identity.

## Important properties

Every vector has a unique nearest point in a nonempty closed linear subspace. For the proof idea, a minimizing sequence is Cauchy by the parallelogram identity. Completeness and closedness give a minimizer, and varying it along subspace directions forces orthogonality of the remainder.

An orthonormal family satisfies Bessel's inequality. When its closed linear span is all of $H$, norm-convergent expansions and Parseval's identity follow. A Hilbert basis need not be a Hamel basis: infinite expansions are generally necessary.

The Riesz representation theorem identifies every bounded linear functional with $x\mapsto\langle x,y\rangle$ for a unique $y$. Hilbert spaces are reflexive. Nevertheless, the unit ball of an infinite-dimensional Hilbert space is not compact in norm, since distinct orthonormal vectors remain distance $\sqrt2$ apart.

## Connections and further reading

Fourier series are Hilbert coordinates; weak convergence measures agreement against fixed test vectors. The energy space $H^1_0$ supports variational PDE solutions. [Erdman, §§4.1 and 4.3–4.6](https://web.pdx.edu/~erdman/FAOA/functional_analysis_operator_algebras_pdf.pdf) develops the geometry, representations, and topology.

