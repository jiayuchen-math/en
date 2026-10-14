---
{
  "id": "martingale",
  "title": "Martingale",
  "chinese": "鞅",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Graduate",
  "summary": "A martingale is an integrable adapted process whose future conditional expectation equals its present value.",
  "prerequisites": [
    "conditional-expectation",
    "probability-filtration"
  ],
  "related": [
    "stopping-time",
    "submartingale",
    "brownian-motion"
  ],
  "references": [
    {
      "id": "lawler-reference",
      "label": "Gregory F. Lawler — Notes on Probability",
      "url": "https://www.math.uchicago.edu/~lawler/probnotes.pdf",
      "locator": "§6.2 Martingales",
      "checked": "2026-10-14",
      "note": "Inspected formulation and properties relevant to this entry."
    },
    {
      "id": "durrett-reference",
      "label": "Rick Durrett — Probability: Theory and Examples, fifth edition",
      "url": "https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf",
      "locator": "§4.2 Martingales, Almost Sure Convergence; §4.6 Uniform Integrability, Convergence in L1",
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

A martingale models a quantity whose current value is the best conditional prediction of its future value. Fair cumulative winnings and sequential estimates of a fixed unknown quantity are important examples. The definition always includes the information available at each time.

Martingale behavior is therefore relative to a filtration. Supplying future information can destroy it, even when the process itself is unchanged. Equal unconditional means alone do not establish the martingale property.

## Prerequisites

One needs integrable random variables, conditional expectation, and a filtration $(\mathcal F_n)$, an increasing sequence of information sigma-algebras. Adaptedness means $M_n$ is measurable with respect to the information at time $n$. Stopping times describe decisions that do not inspect future observations.

## Definition and conventions

A discrete-time process $(M_n)_{n\ge0}$ is a martingale with respect to $(\mathcal F_n)$ if it is adapted, $E|M_n|<\infty$ for every $n$, and
$$
E[M_{n+1}\mid\mathcal F_n]=M_n\quad\text{almost surely}.
$$
The tower property gives $E[M_m\mid\mathcal F_n]=M_n$ for $m\ge n$. A submartingale has the inequality $\ge M_n$ and a supermartingale has $\le M_n$, using integrability throughout this article.

A continuous-time martingale uses the corresponding identity for every deterministic pair $s\le t$. A local martingale needs only become a martingale after suitable stopping and can fail to be a true martingale.

## Intuition

The process need not stay near its current value. Its upward and downward future possibilities balance conditionally on everything already observed. This conditional balance supports arguments for dependent processes where independence of all observations would be unrealistic.

In estimation, $M_n=E[Z\mid\mathcal F_n]$ updates an integrable target $Z$. More observations change the estimate, but conditional on the present, the next estimate averages back to today's estimate.

## Examples and non-examples

Let $\xi_j$ be independent fair signs and $S_n=\sum_{j=1}^n\xi_j$. For $\mathcal F_n=\sigma(\xi_1,\ldots,\xi_n)$,
$$
E[S_{n+1}\mid\mathcal F_n]=S_n+E[\xi_{n+1}]=S_n.
$$
Also $S_n^2-n$ is a martingale: expanding the next square leaves the conditional increment $E[\xi_{n+1}^2]-1=0$.

If the information at time zero already includes $\xi_1$, then $E[S_1\mid\mathcal F_0]=\xi_1$, not $S_0=0$. The enlarged information invalidates the first-step martingale identity.

The deterministic process $M_n=n$ is a submartingale but not a martingale.

## Important properties

Expectations are constant, and integrable linear combinations with a common filtration remain martingales. Conditional Jensen's inequality makes integrable convex transforms submartingales.

Optional stopping at a bounded stopping time $T$ gives $E[M_T]=E[M_0]$. One proof writes stopped gains as increments multiplied by indicators of having not yet stopped; each indicator is measurable before its increment. Passing to unbounded times needs additional hypotheses.

An $L^1$-bounded martingale converges almost surely, but convergence in $L^1$ generally requires uniform integrability. Constancy of the finite-time expectations does not automatically survive the limit.

## Connections and further reading

Brownian motion is a continuous-time example, and stochastic integrals generate many local martingales. [Lawler, §6.2](https://www.math.uchicago.edu/~lawler/probnotes.pdf) gives basic examples and stopping. [Durrett, §§4.2 and 4.6](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf) separates pathwise and integrable convergence. [Peking University, §6.1.1](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/martingale.html) documents 鞅, 下鞅, and 上鞅.

