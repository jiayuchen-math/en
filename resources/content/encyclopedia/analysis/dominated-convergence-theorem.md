---
{
  "id": "dominated-convergence-theorem",
  "title": "Dominated Convergence Theorem",
  "chinese": "控制收敛定理",
  "aliases": [],
  "area": "analysis",
  "topic": "measure-theory",
  "level": "Undergraduate",
  "summary": "An integrable bound independent of the index upgrades almost-everywhere convergence to convergence in L1.",
  "prerequisites": ["lebesgue-integral", "measurable-real-function", "almost-everywhere"],
  "related": ["fatou-lemma", "monotone-convergence-theorem", "lp-space", "fourier-transform", "fubini-theorem"],
  "references": [{"id":"hunter-dominated-convergence","label":"John K. Hunter — Measure Theory","url":"https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf","locator":"§4.5, Theorem 4.24 and proof; §4.6, complex-valued and almost-everywhere formulation; §4.7, Definition 4.25","checked":"2026-10-15","note":"Domination hypotheses, Fatou proof, measurability caveat on incomplete spaces, and L1 convergence definition inspected."}],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

The dominated convergence theorem gives a practical criterion for exchanging a limit with a Lebesgue integral. Its central requirement is a single integrable function controlling every member of the sequence. Convergence at individual points then cannot conceal a fixed amount of mass in increasingly narrow peaks or in regions moving away to infinity.

The conclusion is stronger than convergence of signed integrals: the total absolute error tends to zero. This makes the theorem a bridge from pointwise information to the norm topology of a Banach space.

## Prerequisites

Know measurable functions, null sets, and integrability in the sense $\int|f|\,d\mu<\infty$. Almost-everywhere convergence allows an exceptional measurable set of measure zero. No finiteness or sigma-finiteness of the ambient measure is required for the theorem stated here.

## Definition and conventions

Let $(X,\mathcal A,\mu)$ be a measure space, and let $f_n,f:X\to\mathbb C$ be measurable. Suppose $f_n\to f$ almost everywhere and there is a nonnegative $g\in L^1(X)$ such that
$$
|f_n(x)|\le g(x)\quad\text{almost everywhere, for every }n.
$$
Then $f\in L^1(X)$ and
$$
\int_X|f_n-f|\,d\mu\longrightarrow0,
\qquad
\int_Xf_n\,d\mu\longrightarrow\int_Xf\,d\mu.
$$
The exceptional sets for the countably many inequalities may be combined into one null set. On a measure space that is not complete, explicitly assuming measurability of $f$ avoids problems caused by arbitrary changes on subsets of null sets.

## Intuition

The dominating function is an integrable budget for the whole sequence. A uniform numerical bound is a suitable budget on a finite-measure space, but generally not on an infinite-measure space. Likewise, a separate integrable bound for each $n$ is useless unless these bounds can be replaced by a common one. The quantifier “one function for every index” does the essential work.

## Examples and non-examples

On $(0,1)$ let $f_n(x)=x^n$. We have $f_n\to0$ everywhere and $|f_n|\le1$, with $1$ integrable. Indeed,
$$
\|f_n\|_1=\int_0^1x^n\,dx=\frac1{n+1}\longrightarrow0.
$$
The convergence is not uniform, since $\sup_{0<x<1}x^n=1$. Dominated convergence therefore handles an important situation beyond uniform convergence.

In contrast, $h_n=n\mathbf1_{(0,1/n)}$ tends pointwise to zero on $(0,1)$, while $\int h_n=1$. Each function is integrable and their $L^1$ norms are uniformly bounded, but no common integrable dominator exists. Such a dominator would force the integrals to tend to zero by the theorem.

Even the numerical bound $1$ fails on an infinite-measure space: $\mathbf1_{[n,n+1]}$ tends pointwise to zero on $\mathbb R$, has integral one, and is bounded by the nonintegrable constant function $1$. Here mass escapes spatially rather than concentrating into a peak.

## Important properties

A proof sketch starts with real functions. Applying Fatou's lemma to $g+f_n$ bounds the lower limit of the integrals; applying it to $g-f_n$ bounds the upper limit. The bounds agree at $\int f$. Integrability of $g$ makes the subtraction legitimate. Real and imaginary parts give the complex version.

To get convergence in $L^1$, first observe $|f|\le g$ almost everywhere. Then $|f_n-f|\le2g$ and $|f_n-f|\to0$ almost everywhere. Apply the integral conclusion again. The inequality $|\int(f_n-f)|\le\|f_n-f\|_1$ finishes the stated implication.

For $1\le p<\infty$, if instead the common bound belongs to $L^p$, apply the theorem to $|f_n-f|^p\le2^p g^p$ to obtain convergence in $L^p$. This does not yield convergence in the essential-supremum norm. Passing derivatives under an integral also requires control of difference quotients or derivatives; domination of the original functions alone does not provide that justification.

## Connections and further reading

Fourier-transform continuity follows by applying dominated convergence to $f(x)e^{-ix\cdot\xi_n}$ when $f\in L^1$. Weak PDE arguments similarly use integrable bounds when passing limits in test identities. [Hunter, §§4.5–4.7](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf) places dominated convergence beside monotone convergence, Fatou's lemma, and the $L^1$ norm.
