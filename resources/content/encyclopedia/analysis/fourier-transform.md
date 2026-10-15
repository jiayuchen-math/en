---
{
  "id": "fourier-transform",
  "title": "Fourier Transform",
  "chinese": "傅立叶变换",
  "aliases": [],
  "area": "analysis",
  "topic": "harmonic-analysis",
  "level": "Undergraduate",
  "summary": "The Fourier transform represents a function by continuous frequencies and converts differentiation into multiplication.",
  "prerequisites": ["lebesgue-integral", "lp-space"],
  "related": ["fourier-series", "inverse-fourier-transform", "schwartz-function", "function-convolution", "weak-derivative", "sobolev-space"],
  "references": [{"id":"salo-fourier-transform","label":"Mikko Salo — Fourier Analysis and Distribution Theory","url":"https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf","locator":"§3.3, equations (3.5)–(3.6), Theorems 3.3.1 and 3.3.3; §3.4, Theorems 3.4.3–3.4.4 and their proofs","checked":"2026-10-15","note":"Forward and inverse normalization, Schwartz inversion, differentiation, Riemann–Lebesgue and Plancherel statements inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The Fourier transform studies functions on Euclidean space through their responses to oscillations. Unlike a Fourier series, whose frequencies form an integer lattice, it has a continuous frequency variable. It is useful both as an integral formula for integrable functions and as an operator on Hilbert spaces or distributions. These settings share compatible formulas but require different interpretations of convergence.

For differential equations, its central advantage is that a spatial derivative becomes multiplication by frequency. A differential equation can therefore become a family of algebraic equations or ordinary differential equations indexed by frequency.

## Prerequisites

Know the Lebesgue integral, complex exponentials, and the distinction between $L^1$ and $L^2$. Absolute integrability justifies the initial integral; completeness of $L^2$ supports its later extension. Schwartz functions are smooth functions whose derivatives decay faster than every inverse polynomial, providing a convenient class on which all the basic operations behave well.

## Definition and conventions

For $f\in L^1(\mathbb R^n)$, use
$$
\widehat f(\xi)=\int_{\mathbb R^n}f(x)e^{-ix\cdot\xi}\,dx.
$$
The integral exists absolutely for every $\xi$. With this convention the inverse transform on Schwartz space is
$$
f(x)=(2\pi)^{-n}\int_{\mathbb R^n}\widehat f(\xi)e^{ix\cdot\xi}\,d\xi.
$$
Other conventions place factors of $2\pi$ in the exponential or distribute a normalization factor between both transforms. Constants in inversion, convolution, and norm identities must be changed together. The formulas here agree with the existing Fourier-transform terminology record.

## Intuition

Multiplication by $e^{-ix\cdot\xi}$ tests how much a function aligns with an oscillation of frequency $\xi$. Cancellation makes many high-frequency measurements small. This is a useful picture, although the oscillations themselves are not $L^2(\mathbb R^n)$ vectors: the transform is not literally a countable expansion in a Hilbert basis of plane waves.

## Examples and non-examples

For $a>0$ and $f(x)=e^{-ax}\mathbf1_{[0,\infty)}(x)$,
$$
\widehat f(\xi)=\int_0^\infty e^{-(a+i\xi)x}\,dx
=\frac{1}{a+i\xi}.
$$
The positive real part $a$ ensures convergence. The answer tends to zero as $|\xi|$ grows, but is not in $L^1(\mathbb R)$: its magnitude behaves like $1/|\xi|$. Thus an integrable function need not have an integrable transform, and the inverse integral cannot always be treated as absolutely convergent.

The constant function $1$ is outside both $L^1$ and $L^2$ on the whole line. Its transform can be defined as a tempered distribution, but the original absolutely convergent integral does not define it. On a bounded interval, the same constant is integrable; specifying the domain matters.

## Important properties

The estimate $|\widehat f(\xi)|\le\|f\|_1$ is immediate. Dominated convergence proves continuity in $\xi$. The Riemann–Lebesgue theorem adds decay at infinity. A proof idea is to approximate $f$ in $L^1$ by smooth functions with compact support, prove decay for the approximants by integration by parts, and use the uniform transform estimate to control the error.

For Schwartz functions, integration by parts gives
$$
\widehat{\partial_j f}(\xi)=i\xi_j\widehat f(\xi).
$$
Rapid decay removes the boundary terms. For $f,g\in L^1$, Fubini's theorem gives $\widehat{f*g}=\widehat f\,\widehat g$; absolute integrability of the double integrand follows from $\|f\|_1\|g\|_1<\infty$.

Plancherel's theorem extends the transform uniquely from Schwartz space to $L^2$, with
$$
\|\widehat f\|_2=(2\pi)^{n/2}\|f\|_2.
$$
The extension uses density and this norm identity. For arbitrary $L^2$ data, truncated Fourier integrals converge in $L^2$; pointwise convergence is an additional question.

## Connections and further reading

Multiplication by $i\xi_j$ connects Fourier analysis with weak derivatives and Sobolev regularity. The heat equation yields the multiplier $e^{-t|\xi|^2}$ for unit diffusivity, explaining why positive time suppresses high frequencies. [Salo, §§3.3–3.4](https://users.jyu.fi/~salomi/lecturenotes/FA_distributions.pdf) develops the compatible Schwartz, distributional, and $L^2$ constructions.
