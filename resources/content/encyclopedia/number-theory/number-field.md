---
{"id":"number-field","title":"Number Field","chinese":"数域","aliases":["algebraic number field","數域"],"area":"number-theory","topic":"algebraic-number-theory","level":"Graduate","summary":"A number field is a finite extension of the rational numbers; its ring of integers carries arithmetic beyond ordinary integer factorization.","prerequisites":["vector-space","integral-domain"],"related":["fundamental-theorem-of-arithmetic","galois-extension","modular-curve"],"references":[{"id":"milne","label":"J. S. Milne — Algebraic Number Theory","url":"https://www.jmilne.org/math/CourseNotes/ANT.pdf","locator":"Opening definition; Introduction, The ring of integers; Chapter 2, Proposition 2.19 and Corollary 2.20","checked":"2026-10-14","note":"Finite extension definition, algebraic integers, traces and norms."},{"id":"zhang","label":"Shenxing Zhang — Algebraic Number Theory notes (Chinese), v2.5.0.0","url":"https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf","locator":"Chapter 1 opening, printed p.1; Section 1.1.1, Definition 1.1, printed pp.1–2; Section 1.2.2, Definition 1.14 and Example 1.2, printed p.7 (PDF p.15)","checked":"2026-10-14","note":"Chinese terminology and quadratic-field ring-of-integers example."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A number field extends rational arithmetic by adjoining finitely many algebraic quantities. Linear algebra controls the size of the extension, while an associated ring of integers supplies its arithmetic. These are different structures: in the field every nonzero element is invertible, so factorization questions become meaningful only after specifying a suitable subring.

## Prerequisites

Understand fields, polynomials, irreducibility and finite-dimensional vector spaces. For arithmetic, know rings, ideals and ordinary prime factorization. Galois theory helps study symmetries, but a number field need not be a Galois extension of the rationals.

## Definition and conventions

A number field $K$ is a field containing $\mathbb Q$ whose dimension $[K:\mathbb Q]$ as a rational vector space is finite. Every element is algebraic over $\mathbb Q$. The ring of integers $\mathcal O_K$ consists of the elements satisfying a monic polynomial with integer coefficients. “Monic” is essential: satisfying just some nonzero integer polynomial defines an algebraic number, not necessarily an algebraic integer.

For $\alpha\in K$, multiplication by $\alpha$ is a rational linear map on $K$. Its trace and determinant are the field trace and norm. The norm here is multiplicative and may be negative; it is not a norm measuring vector length.

## Intuition

An algebraic relation reduces all high powers of a generator to finitely many coordinates. Rational arithmetic becomes arithmetic in a finite basis. Integrality then singles out a lattice-like subring. The extra coordinates permit new factors and new units, but ordinary unique factorization may no longer survive.

## Examples and non-examples

The field $\mathbb Q(\sqrt3)$ has basis $1,\sqrt3$ and degree two. Its nonzero element $a+b\sqrt3$ has inverse

$$
\frac{a-b\sqrt3}{a^2-3b^2}.
$$

The denominator is nonzero unless both rational coefficients vanish. Conjugation sends $\sqrt3$ to $-\sqrt3$, so the trace is $2a$ and the norm is $a^2-3b^2$.

In $\mathbb Q(\sqrt5)$, the element $(1+\sqrt5)/2$ satisfies $x^2-x-1=0$ and is integral, although it is not in $\mathbb Z[\sqrt5]$. Thus the obvious integer span of a generator need not be the full ring of integers. The field $\mathbb Q(t)$ with transcendental $t$ is not a number field, and neither is the infinite algebraic closure $\overline{\mathbb Q}$.

## Important properties

Characteristic zero makes every finite extension separable. There are $[K:\mathbb Q]$ distinct embeddings into $\mathbb C$, and summing or multiplying their values gives trace or norm. The ring $\mathcal O_K$ is a free abelian group of rank $[K:\mathbb Q]$.

Its nonzero ideals factor uniquely into prime ideals, even when its elements do not factor uniquely. The ideal class group measures the obstruction to all ideals being principal. These results require the full ring of integers; a smaller order can behave differently.

## Connections and further reading

Embeddings connect arithmetic to geometry, completions connect it to local fields, and class groups organize factorization defects. [Milne's notes](https://www.jmilne.org/math/CourseNotes/ANT.pdf) develop these transitions systematically.
