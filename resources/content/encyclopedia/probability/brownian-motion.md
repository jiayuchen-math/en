---
{
  "id": "brownian-motion",
  "title": "Brownian Motion",
  "chinese": "布朗运动",
  "aliases": [
    "Wiener process"
  ],
  "area": "probability",
  "topic": "probability",
  "level": "Graduate",
  "summary": "Standard Brownian motion has continuous paths and independent Gaussian increments with variance equal to elapsed time.",
  "prerequisites": [
    "stochastic-process",
    "gaussian-distribution"
  ],
  "related": [
    "gaussian-process",
    "martingale",
    "stochastic-differential-equation"
  ],
  "references": [
    {
      "id": "lawler-reference",
      "label": "Gregory F. Lawler — Notes on Probability",
      "url": "https://www.math.uchicago.edu/~lawler/probnotes.pdf",
      "locator": "Section 7, Brownian motion, defining conditions (i)–(iv)",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    },
    {
      "id": "finbook-reference",
      "label": "Gregory F. Lawler — Stochastic Calculus: An Introduction with Applications",
      "url": "https://www.math.uchicago.edu/~lawler/finbook.pdf",
      "locator": "§2.4 Brownian motion; §2.8 Quadratic variation, Theorem 2.8.2, printed p.65 / PDF p.71",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Brownian motion is a probability law for continuous random trajectories. It combines simple increment distributions with highly irregular paths, making it a fundamental model for diffusion and a driver of stochastic differential equations.

The specification concerns the whole process, not just one observation at each time. Having the correct normal marginal distributions does not guarantee independent increments or the Brownian path law.

## Prerequisites

One needs probability spaces, normal distributions, independence, and stochastic processes. A process supplies a random variable at each time; fixing an outcome instead gives a sample path. Filtrations distinguish knowledge of the past from information about the future.

## Definition and conventions

A standard one-dimensional Brownian motion $(B_t)_{t\ge0}$ starts at $B_0=0$ almost surely, has almost surely continuous paths, and has independent increments on disjoint time intervals. For $0\le s<t$,
$$
B_t-B_s\sim N(0,t-s).
$$
The second parameter here is variance. Relative to a filtration, one additionally requires adaptedness and independence of $B_t-B_s$ from $\mathcal F_s$. The natural filtration provides the usual starting example.

A Brownian motion with drift $\mu$ and variance parameter $\sigma^2$ has form $\mu t+\sigma B_t$. “Wiener process” commonly means standard Brownian motion. Path continuity is included explicitly in this article's convention.

## Intuition

An increment over a short time $h$ has typical size $\sqrt h$, rather than size $h$. Subdividing time therefore produces many small fluctuations whose squares accumulate instead of vanishing. This scaling explains both continuous paths and the failure of ordinary differentiable motion.

Independent increments mean that the displacement over a future interval contains fresh randomness. The positions themselves are dependent because each includes all the preceding displacements.

## Examples and non-examples

For standard Brownian motion, $B_2=B_1+(B_2-B_1)$ with independent summands of variance one. Thus
$$
E[B_1B_2]=E[B_1^2]=1,\qquad \operatorname{Var}(B_2)=2.
$$
Its covariance at arbitrary times is $\min(s,t)$.

Let $Z\sim N(0,1)$ and set $X_t=\sqrt t\,Z$. Every $X_t$ has distribution $N(0,t)$ and its paths are continuous. Nevertheless $X_2-X_1=(\sqrt2-1)Z$ depends on $X_1$, so this is not Brownian motion.

A Poisson counting process also has stationary independent increments, but its paths jump and its increment laws are Poisson. It is another stochastic process, not a Brownian motion.

## Important properties

The process $B_t$ is a martingale relative to its past, and $B_t^2-t$ is also a martingale. The latter identity follows by expanding a future square and using zero mean and variance $t-s$ for the independent increment.

For $c>0$, the process $c^{-1/2}B_{ct}$ has the same law as $B_t$; checking Gaussian increments and continuity proves the scaling property. Its quadratic variation on $[0,t]$ is $t$, for example as the limit in probability of squared increments over deterministic partitions $\Pi_n$ whose mesh $\|\Pi_n\|=\max_j(t_{j,n}-t_{j-1,n})$ tends to zero. Nestedness is not required for this convergence in probability. The partition convention matters in stronger pathwise statements.

## Connections and further reading

Stochastic integration accounts for the nonzero quadratic variation, and Itô's formula contains an extra second-derivative term. [Lawler, Section 7](https://www.math.uchicago.edu/~lawler/probnotes.pdf) includes continuity among the defining conditions. [Lawler's stochastic-calculus text, §§2.4 and 2.8](https://www.math.uchicago.edu/~lawler/finbook.pdf) develops the path law. [Peking University, §7.2.2](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/bm.html) records the Chinese name and Wiener-process variant; its displayed Definition 7.3 is used for naming, not as a substitute for the continuity requirement here.

