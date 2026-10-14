---
{"id":"modular-form","title":"Modular Form","chinese":"模形式","aliases":["classical holomorphic modular form"],"area":"number-theory","topic":"modular-forms","level":"Graduate","summary":"A holomorphic modular form obeys a weighted symmetry law on the upper half-plane and a regularity condition at every cusp.","prerequisites":["holomorphic-function","group-action","integer-congruence"],"related":["modular-curve","dirichlet-character","fourier-series"],"references":[{"id":"milne","label":"J. S. Milne — Modular Functions and Modular Forms","url":"https://www.jmilne.org/math/CourseNotes/MF.pdf","locator":"Chapter 4, Definition 4.5 and Proposition 4.7","checked":"2026-10-14","note":"Weighted transformation law, cusp regularity and Eisenstein series; this article uses weight k rather than Milne's weight 2k notation."},{"id":"li","label":"Wen-Wei Li — Introduction to Modular Forms, author source (Chinese)","url":"https://raw.githubusercontent.com/wenweili/Modulform/master/chap2.tex","locator":"Section sec:j-invariant, definition def:Delta and following proposition","checked":"2026-10-14","note":"The modular discriminant as a weight-twelve cusp form."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Modular forms are highly constrained holomorphic functions carrying arithmetic information. Their symmetry is weighted rather than ordinary invariance, and their Fourier coefficients often encode counting or number-theoretic data. This article describes the classical holomorphic setting over the complex numbers; nonholomorphic automorphic forms and algebraic formulations require additional definitions.

## Prerequisites

Use complex holomorphic functions, group actions and convergent series. Know that $\operatorname{SL}_2(\mathbb Z)$ acts on the upper half-plane $\mathbb H$ by fractional linear transformations. Congruence subgroups permit additional level structure, but the full modular group suffices for the first definition.

## Definition and conventions

For an integer $k\ge0$, a holomorphic modular form of weight $k$ for the full modular group is a holomorphic function $f:\mathbb H\to\mathbb C$ satisfying

$$
f\left(\frac{az+b}{cz+d}\right)=(cz+d)^k f(z)
$$

for every matrix in $\operatorname{SL}_2(\mathbb Z)$, and holomorphic at the cusp. Since $f(z+1)=f(z)$, write $q=e^{2\pi iz}$; cusp regularity means its expansion has only nonnegative powers of $q$. It is a cusp form if its constant term is zero. For a finite-index subgroup, regularity must be checked at all its cusps in appropriate local coordinates.

## Intuition

Changing a basis of a lattice gives different coordinates for the same underlying elliptic curve. The transformation factor compensates for that change. This is why a positive-weight form is more naturally a geometric section than an invariant function on a quotient. The cusp condition controls what happens when a lattice degenerates.

## Examples and non-examples

Constant functions are weight-zero modular forms. A nonzero constant is not a weight-two form: the transformation $z\mapsto-1/z$ would demand $1=z^2$, which fails for general $z$.

The modular discriminant is the cusp form

$$
\Delta(z)=q\prod_{n\ge1}(1-q^n)^{24}
$$

of weight twelve. Its first term is $q$, so it vanishes at the cusp. The transformation law is an additional theorem, not a consequence of having a $q$-expansion alone. A generic convergent power series in $q$ is periodic but is not modular.

## Important properties

The matrix $-I$ fixes $z$ but contributes $(-1)^k$. Therefore a form of odd weight for the full group must vanish identically. This restriction need not hold for subgroups lacking $-I$ or for nontrivial multiplier systems.

Products add weights. A quotient of two same-weight forms, with nonzero denominator, is an invariant meromorphic modular function, but may have poles where the denominator vanishes. Spaces of forms of fixed weight and level are finite-dimensional. Hecke operators act on them, turning arithmetic relations among Fourier coefficients into linear-algebra questions.

## Connections and further reading

Modular curves explain the geometry, while L-functions package Fourier coefficients analytically. Read [Milne, Chapter 4](https://www.jmilne.org/math/CourseNotes/MF.pdf) for the precise cusp conditions and concrete constructions before studying Hecke eigenforms.
