---
{
  "id": "stopping-time",
  "title": "Stopping Time",
  "chinese": "停时",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Graduate",
  "summary": "A stopping time is a random time for which deciding whether stopping has occurred uses only information already available.",
  "prerequisites": ["probability-filtration", "adapted-stochastic-process", "conditional-expectation"],
  "related": ["martingale", "poisson-process", "brownian-motion"],
  "references": [
    {"id":"lawler-stopping","label":"Gregory F. Lawler — Notes on Probability","url":"https://www.math.uchicago.edu/~lawler/probnotes.pdf","locator":"§6.2, stopping-time definition, Proposition 6.4, and doubling-strategy example (21)","checked":"2026-10-15","note":"Discrete stopping times, stopped martingales, and failure of unrestricted optional stopping."},
    {"id":"lidf-stopping","label":"李东风 — 应用随机过程（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/martingale.html","locator":"§6.2.1, Definitions 6.7–6.9; §6.5.2, Definition 6.14","checked":"2026-10-15","note":"Chinese term and discrete/continuous definitions; the continuous definition there additionally requires almost-sure finiteness."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A stopping time describes an observation rule such as stopping at the first threshold crossing. The realized time is unknown in advance, but the decision to stop must be possible when it occurs. The information available to the observer is therefore part of the definition.

Stopping times let probability theory evaluate processes at observation-dependent times. This is useful for sequential decisions and boundary problems, but replacing a deterministic time by a stopping time can invalidate an expectation identity unless the appropriate theorem applies.

## Prerequisites

A filtration $(\mathcal F_n)_{n\ge0}$ is an increasing sequence of sigma-algebras representing accumulated information. A process is adapted when its value at time $n$ is $\mathcal F_n$-measurable. Conditional expectation expresses predictions based on this information.

The main results below concern discrete time. The continuous-time definition is stated separately so that assumptions about paths and filtrations are not silently imported.

## Definition and conventions

A map $T:\Omega\to\{0,1,2,\ldots\}\cup\{\infty\}$ is a stopping time for $(\mathcal F_n)$ if
$$
\{T\le n\}\in\mathcal F_n\qquad(n\ge0).
$$
Equivalently, $\{T=n\}\in\mathcal F_n$ for every finite $n$. Finite unions prove one direction; taking the difference between $\{T\le n\}$ and $\{T\le n-1\}$ proves the other.

In continuous time, the condition is $\{T\le t\}\in\mathcal F_t$ for all $t\ge0$, with values in $[0,\infty]$. Right-continuity of the filtration is an additional assumption, not part of this definition. Here infinite values are allowed. Almost-sure finiteness and deterministic boundedness are stronger, different restrictions.

## Intuition

An observer needs to answer “have I stopped yet?” using the record accumulated so far. The observer need not know at time zero when stopping will occur. First occurrence rules have this character; last occurrence rules usually require knowledge of what happens afterward.

The same random time may satisfy the definition for one filtration and fail it for a smaller one. Conversely, revealing the entire future at time zero makes every measurable random time a stopping time, but changes the probabilistic information structure.

## Examples and non-examples

For independent fair coin tosses, let $T$ be the index of the first head and $\mathcal F_n$ the information from the first $n$ tosses. Then $\{T\le n\}$ means at least one of those tosses was a head. Also $P(T>n)=2^{-n}$, so $T$ is almost surely finite but has no deterministic upper bound.

Define $L=1$ if the second toss is a head and $L=2$ otherwise. Then $\{L\le1\}$ depends on the second toss and is not $\mathcal F_1$-measurable. Thus a bounded random time need not be a stopping time.

For any discrete adapted real process, $T=\inf\{n\ge0:X_n\ge a\}$ is a stopping time: $\{T\le n\}$ is a finite union of observable threshold events. Use $\inf\varnothing=\infty$. This argument does not establish every continuous-time hitting-time claim without additional regularity.

## Important properties

The minimum and maximum of two stopping times are stopping times, as is $T\wedge n$. If $M_n$ is an integrable discrete-time martingale and $T$ a stopping time, then $M_{n\wedge T}$ is a martingale.

Proof sketch: its next increment is
$$
M_{(n+1)\wedge T}-M_{n\wedge T}
=1_{\{T>n\}}(M_{n+1}-M_n).
$$
The indicator is $\mathcal F_n$-measurable, so the conditional expected increment vanishes. Integrability follows because each stopped value is a finite sum of integrable terms.

If $T\le N$ almost surely for a deterministic $N$, this proves $E[M_T]=E[M_0]$. Almost-sure finiteness alone does not justify passing from $T\wedge n$ to $T$. One sufficient additional condition is uniform integrability of the family $\{M_{T\wedge n}:n\ge0\}$: combined with almost-sure convergence, it permits passage of expectations to $M_T$. Integrability of $M_T$ alone is not sufficient.

## Connections and further reading

Arrival times of counting processes and threshold times of random walks motivate the subject. [Lawler, §6.2](https://www.math.uchicago.edu/~lawler/probnotes.pdf) proves the stopped-process result and explains the doubling-strategy obstruction. [Li, §§6.2.1 and 6.5.2](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/martingale.html) documents 停时 and illustrates why finiteness conventions must be checked.
