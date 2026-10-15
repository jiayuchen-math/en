---
{"id":"dedekind-zeta-function","title":"Dedekind Zeta Function","chinese":"戴德金 ζ 函数","aliases":[],"area":"number-theory","topic":"analytic-number-theory","level":"Graduate","summary":"The Dedekind zeta function counts integral ideals by norm, with an Euler product encoding prime splitting and a residue encoding the class number and units.","prerequisites":["number-field","ring-of-integers","fractional-ideal-of-number-field","meromorphic-function"],"related":["riemann-zeta-function","dirichlet-l-function","ideal-class-group","dirichlet-unit-theorem"],"references":[{"id":"sutherland-counting","label":"Andrew V. Sutherland — MIT 18.785, Lecture 19 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf","locator":"Opening definition and convergence, p.1; ideal counting by classes, pp.7–8; Theorem 19.12, pp.9–10; Theorem 19.15, pp.11–12","checked":"2026-10-15","note":"Euler product, class number formula, proof strategy and factorization for abelian extensions of Q."},{"id":"zhang-continuation","label":"Shenxing Zhang — Algebraic Number Theory notes v2.5.0.0","url":"https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf","locator":"Section 4.2.2, Theorem 4.22 and Corollary 4.23, printed p.112 (PDF p.120); Section 4.2.4 opening quadratic factorization, printed p.114 (PDF p.122)","checked":"2026-10-15","note":"Full meromorphic continuation, completed functional equation, residue and quadratic Dirichlet L-factorization."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Dedekind zeta function replaces positive integers in the Riemann zeta series by nonzero integral ideals of a number field. Unique factorization of ideals gives an Euler product, even when elements fail to factor uniquely. Its local factors record how rational primes split, while its pole at $1$ connects analytic behavior to class groups and units.

## Prerequisites

Know number fields, rings of integers, ideal factorization and absolute ideal norms. Complex analysis is needed to distinguish the defining series from its meromorphic continuation. The class number formula additionally uses embeddings, roots of unity and the regulator of the unit group.

## Definition and conventions

For a number field $K$, define, when $\operatorname{Re}s>1$,

$$
\zeta_K(s)=\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}(N\mathfrak a)^{-s}
=\prod_{\mathfrak p}(1-(N\mathfrak p)^{-s})^{-1},
\qquad N\mathfrak a=|\mathcal O_K/\mathfrak a|.
$$

The product runs over nonzero prime ideals. Both expressions converge absolutely in that half-plane. Powers use the real logarithm of the positive integer norm. Elsewhere, $\zeta_K$ means the continuation, not an unqualified evaluation of the original series.

The sum counts ideals, including nonprincipal ideals. Counting algebraic integers instead repeats generators differing by units and misses nonprincipal ideals entirely. Fractional ideals are also excluded: their norms need not be positive integers.

## Intuition

Writing $\zeta_K(s)=\sum_{m\ge1}a_K(m)m^{-s}$, the coefficient $a_K(m)$ counts ideals of norm $m$. Thus the zeta function packages an arithmetic counting problem. Multiplicativity reflects ideal factorization; grouping its factors above a rational prime reveals the residue degrees there. Ramification affects the local arithmetic, but its index does not appear as an extra exponent in the individual prime ideal factor.

## Examples and non-examples

For $K=\mathbb Q$, the ideals are $m\mathbb Z$ with norm $m$, giving $\zeta_{\mathbb Q}=\zeta$.

For $K=\mathbb Q(i)$, an odd rational prime $p\equiv1\pmod4$ splits into two primes of norm $p$, whereas $p\equiv3\pmod4$ remains prime with norm $p^2$. The prime $2$ ramifies as $(2)=(1+i)^2$ up to a unit, and the unique prime above it has norm $2$. Consequently the factors grouped by rational primes are

$$
\begin{cases}
(1-p^{-s})^{-2},&p\equiv1\pmod4,\\
(1-p^{-2s})^{-1},&p\equiv3\pmod4,\\
(1-2^{-s})^{-1},&p=2.
\end{cases}
$$

These match $\zeta(s)L(s,\chi_{-4})$, where $\chi_{-4}$ is zero on even integers, $1$ on integers congruent to $1$ modulo $4$, and $-1$ on those congruent to $3$. In particular, the inert prime $3$ contributes no ideal of norm $3$; its first nonconstant local term has norm $9$. The Dedekind zeta function is therefore not simply $\zeta(s)^2$ for a quadratic field.

## Important properties

For every number field, $\zeta_K$ continues meromorphically to $\mathbb C$, with its only pole a simple pole at $1$. With $r_1$ real embeddings, $r_2$ conjugate pairs of complex embeddings, class number $h_K$, regulator $R_K$, number of roots of unity $w_K$ and discriminant $D_K$,

$$
\operatorname{Res}_{s=1}\zeta_K(s)
=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{|D_K|}}.
$$

The regulator is $1$ when the unit rank is zero. For $\mathbb Q(i)$, these quantities are $r_1=0$, $r_2=1$, $h_K=R_K=1$, $w_K=4$ and $|D_K|=4$, so the residue is $\pi/4$.

Proof idea for the residue: partition ideals by class, describe each part using lattice elements modulo units, and count in a fundamental region for the logarithms of units. Every class has the same leading contribution. Partial summation converts the resulting linear counting asymptotic into a simple pole. Full continuation and the functional equation require additional analytic arguments.

One convenient completion is

$$
\Lambda_K(s)=|D_K|^{s/2}(\pi^{-s/2}\Gamma(s/2))^{r_1}
((2\pi)^{-s}\Gamma(s))^{r_2}\zeta_K(s).
$$

It satisfies $\Lambda_K(s)=\Lambda_K(1-s)$. Some normalizations multiply this by the constant $2^{r_2}$; that does not change the symmetry.

## Connections and further reading

For a quadratic field of fundamental discriminant $D$, $\zeta_K(s)=\zeta(s)L(s,\chi_D)$ with the associated primitive quadratic character. Comparing residues turns a Dirichlet L-value into a class number formula. [Sutherland's Lecture 19](https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf) explains the ideal counting argument; [Zhang, Sections 4.2.2 and 4.2.4](https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf) gives the continuation and quadratic bridge.
