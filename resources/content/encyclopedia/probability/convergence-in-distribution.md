---
{
  "id": "convergence-in-distribution",
  "title": "Convergence in Distribution",
  "chinese": "依分布收敛",
  "aliases": ["weak convergence of probability laws"],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "Convergence in distribution compares probability laws through continuity points of their distribution functions, without requiring samplewise closeness.",
  "prerequisites": ["probability-distribution", "cumulative-distribution-function"],
  "related": ["convergence-in-probability", "almost-sure-convergence", "central-limit-theorem", "characteristic-function-probability"],
  "references": [
    {"id":"durrett-weak","label":"Rick Durrett — Probability: Theory and Examples, fifth edition","url":"https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf","locator":"§3.2, opening definition and Theorems 3.2.9–3.2.11","checked":"2026-10-15","note":"CDF definition, bounded continuous tests, continuous mapping, and boundary conditions."},
    {"id":"lidf-convergence","label":"李东风 — 应用随机过程（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html","locator":"§1.4, Definition 1.14(4) and convergence implications following it","checked":"2026-10-15","note":"Chinese name and distinctions between modes of convergence."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Convergence in distribution describes the limiting shape of a sequence of probability laws. It is appropriate when the question concerns the distribution of an observation rather than its proximity to another observation on the same outcome.

This distinction is essential in limit theorems. A standardized sum can approach a normal law even though it does not approach a particular normal random variable along the originally given sample paths.

## Prerequisites

For a real random variable $X$, its law is the measure $B\mapsto P(X\in B)$, and its cumulative distribution function is $F(x)=P(X\le x)$. A continuity point of $F$ is a point where the law has no atom.

Convergence in probability and almost-sure convergence compare variables on a common probability space. Convergence in distribution can instead be stated entirely in terms of laws.

## Definition and conventions

Write $X_n\Rightarrow X$, or $X_n\xrightarrow{d}X$, if
$$
F_n(x)\longrightarrow F(x)
$$
at every continuity point $x$ of the limiting CDF $F$. The restriction concerns the limiting CDF, not the approximating functions.

Equivalently, for every bounded continuous function $g:\mathbb R\to\mathbb R$,
$$
E[g(X_n)]\longrightarrow E[g(X)].
$$
The expectations may be taken on different probability spaces. Boundedness of the test functions ensures they exist; this criterion does not assert convergence for every continuous unbounded function.

The phrase weak convergence here refers to probability measures, a different setting from weak convergence of vectors in a normed space.

## Intuition

A bounded continuous test observes the distribution through a smooth enough, finite-scale measurement. It cannot isolate a discontinuous boundary with positive limiting mass. This explains why the CDF definition makes an exception at jumps.

For an interval whose endpoints have zero limiting probability, its probability converges to the corresponding limiting probability. Requiring this for every measurable set would impose a stronger condition than convergence in distribution.

## Examples and non-examples

Let $X_n=2/n$ deterministically and $X=0$. For every $x<0$, both relevant CDF values are eventually zero; for every $x>0$, both are eventually one. Thus $X_n\Rightarrow0$. At $x=0$, however, $F_n(0)=0$ while $F(0)=1$. The definition correctly omits this discontinuity.

Let $Z$ be a fair sign and put $X_n=(-1)^n Z$. Every $X_n$ has the law of $Z$, so $X_n\Rightarrow Z$. On odd indices $P(|X_n-Z|>1)=1$, so convergence in probability to this particular $Z$ fails. Indeed, the alternating sequence has no limit in probability.

For a different warning, let $Y_n=n^2$ with probability $n^{-2}$ and zero otherwise. Then $Y_n\to0$ in probability and hence in distribution, but $E[Y_n]=1$ for every $n$. Taking expectations is not automatically a valid limiting operation.

## Important properties

On a common probability space, convergence in probability implies convergence in distribution. A useful proof brackets $\{X_n\le x\}$ between events involving $X\le x-\varepsilon$ and $X\le x+\varepsilon$, together with the error event $|X_n-X|>\varepsilon$. Then let $\varepsilon$ decrease at a continuity point.

Convergence in distribution to a constant does imply convergence in probability to that constant. A nonconstant limit does not have this special property.

The continuous mapping theorem says that if $X_n\Rightarrow X$ and $g$ is measurable with $P(X\in D_g)=0$, where $D_g$ is its discontinuity set, then $g(X_n)\Rightarrow g(X)$. For Borel $A$, the boundary condition $P(X\in\partial A)=0$ likewise guarantees $P(X_n\in A)\to P(X\in A)$.

## Connections and further reading

The central limit theorem uses this mode of convergence, while the law of large numbers commonly gives a stronger mode for sample averages. [Durrett, §3.2](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf) develops test functions and boundary criteria. [Li, §1.4](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html) records 依分布收敛 alongside the other convergence notions.
