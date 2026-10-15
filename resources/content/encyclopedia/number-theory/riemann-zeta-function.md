---
{"id":"riemann-zeta-function","title":"Riemann Zeta Function","chinese":"黎曼 ζ 函数","aliases":["Riemann zeta"],"area":"number-theory","topic":"analytic-number-theory","level":"Graduate","summary":"The Riemann zeta function connects a Dirichlet series over integers with an Euler product over primes and a meromorphic continuation governed by a functional equation.","prerequisites":["fundamental-theorem-of-arithmetic","holomorphic-function","meromorphic-function"],"related":["dirichlet-l-function","dedekind-zeta-function","prime-number","fourier-series"],"references":[{"id":"sutherland-series","label":"Andrew V. Sutherland — MIT 18.785, Lecture 16 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes16.pdf","locator":"Section 16.1, Definition 16.1, Theorem 16.2 and Theorem 16.3, pp.1–2","checked":"2026-10-15","note":"Convergence, holomorphy, Euler product and residue at 1."},{"id":"sutherland-functional","label":"Andrew V. Sutherland — MIT 18.785, Lecture 17 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes17.pdf","locator":"Lemma 17.10, p.3; derivation of equations (3)–(4) and trivial zeros discussion, pp.5–7; Section 17.2, Theorem 17.17, p.7","checked":"2026-10-15","note":"Theta transformation, continuation, functional equation and completed functions; the article explicitly fixes its xi normalization."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The Riemann zeta function turns integer factorization into complex analysis. A sum indexed by all positive integers becomes a product indexed only by primes. Analytic continuation then extends the resulting function beyond the region in which either expression converges, revealing zeros and a symmetry about $\operatorname{Re}s=1/2$.

It is the Dedekind zeta function of $\mathbb Q$ and the Dirichlet L-function of the character of modulus one. These identifications explain its central role among arithmetic L-functions.

## Prerequisites

Know unique prime factorization, convergence of series and products, and holomorphic and meromorphic functions. Uniform convergence on compact subsets justifies differentiating the series in its initial domain. The proof of continuation uses the gamma function, Fourier transformation and Poisson summation.

## Definition and conventions

Initially set

$$
\zeta(s)=\sum_{n=1}^{\infty}n^{-s},\qquad \operatorname{Re}s>1,
$$

where $n^{-s}=\exp(-s\log n)$ uses the ordinary real logarithm of $n>0$. The series converges absolutely and locally uniformly there, hence defines a holomorphic function. Its unique meromorphic continuation to $\mathbb C$ is also denoted $\zeta$.

The continuation has a simple pole at $s=1$ with residue $1$. Values outside the convergence half-plane are values of this continued function. In particular, a finite value at a negative argument does not assign an ordinary convergent sum to the corresponding divergent series.

## Intuition

Expanding a geometric factor $(1-p^{-s})^{-1}$ chooses a nonnegative exponent of $p$. Making such choices over all primes produces each positive integer exactly once. This is the arithmetic content of the Euler product. Absolute convergence supplies the analytic permission to rearrange the infinite terms.

Continuation is a different operation: it identifies a larger analytic function agreeing with the initial one. It does not extend the range of validity of every original series or product representation.

## Examples and non-examples

At $s=2$, a partial sum $S_N=\sum_{n=1}^N n^{-2}$ has the elementary error bounds

$$
\frac1{N+1}\le\zeta(2)-S_N\le\frac1N.
$$

These follow by comparing the decreasing function $x^{-2}$ with its integrals over adjacent unit intervals. Thus $N=100$ gives an error between $1/101$ and $1/100$, illustrating a rigorous evaluation method inside the convergence region.

At $s=1$, the harmonic series diverges, consistently with the pole. At $s=-2$, the continuation gives $\zeta(-2)=0$, but the positive series $1+4+9+\cdots$ diverges. The distinction is analytic, not a change in the meaning of ordinary addition.

Removing primes also changes the function: summing only over odd integers gives $(1-2^{-s})\zeta(s)$ for $\operatorname{Re}s>1$. That is the L-function of the principal character modulo $2$, rather than zeta itself.

## Important properties

For $\operatorname{Re}s>1$,

$$
\zeta(s)=\prod_p(1-p^{-s})^{-1}\ne0.
$$

Proof sketch: expand finite products using prime factorization, then pass to the limit under absolute convergence. Convergence of the corresponding logarithmic series also proves nonvanishing. This conclusion concerns the stated half-plane; continuation alone does not preserve nonvanishing.

Define

$$
\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s).
$$

It satisfies $\Lambda(s)=\Lambda(1-s)$ and has simple poles at $0$ and $1$. To remove them, the convention

$$
\xi(s)=\tfrac12s(s-1)\Lambda(s)
$$

produces an entire function with $\xi(s)=\xi(1-s)$. Other sources use different constant multiples or reserve a completed-function symbol for $\Lambda$.

Proof idea: the Gaussian theta sum $\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$ satisfies $\theta(t)=t^{-1/2}\theta(1/t)$ by Poisson summation. Its Mellin integral gives $\Lambda$. Splitting the integral at $1$ and transforming the part below $1$ isolates the two poles and displays the symmetry. Gamma poles force the trivial zeros $-2,-4,\ldots$ of zeta. The Riemann hypothesis concerns its nontrivial zeros in the critical strip: it asserts they all have real part $1/2$.

## Connections and further reading

Logarithms of the Euler product turn prime contributions into sums; logarithmic differentiation weights prime powers. Dirichlet characters refine this mechanism to residue classes. Prime ideals replace rational primes in the Dedekind zeta function, whose residue contains class number and unit information. [Sutherland's Lectures 16](https://math.mit.edu/classes/18.785/2021fa/LectureNotes16.pdf) and [17](https://math.mit.edu/classes/18.785/2021fa/LectureNotes17.pdf) develop the arithmetic and analytic sides separately.
