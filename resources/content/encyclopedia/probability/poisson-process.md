---
{
  "id": "poisson-process",
  "title": "Poisson Process",
  "chinese": "泊松过程",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "A homogeneous Poisson process counts arrivals in continuous time with stationary independent increments and a fixed positive rate.",
  "prerequisites": ["stochastic-process", "poisson-distribution", "exponential-distribution", "independent-random-variables"],
  "related": ["stopping-time", "martingale", "markov-chain"],
  "references": [
    {"id":"lawler-poisson","label":"Gregory F. Lawler — Stochastic Calculus: An Introduction with Applications","url":"https://www.math.uchicago.edu/~lawler/finbook.pdf","locator":"§6.2, printed pp.188–191, exponential waiting times, right-continuous counting construction, and increment distribution","checked":"2026-10-15","note":"Homogeneous process, interarrival construction, Poisson increment law, and small-time probabilities."},
    {"id":"lidf-poisson","label":"李东风 — 应用随机过程（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/poisson.html","locator":"§3.1, Definitions 3.1–3.2; §3.2.1, Theorem 3.3 and Definition 3.4","checked":"2026-10-15","note":"Chinese terminology, path convention, independent increments, and iid exponential waiting times."},
    {"id":"lidf-compensation","label":"李东风 — 应用随机过程，第6章 鞅（北京大学）","url":"https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/martingale.html","locator":"§6.5.1, Example 6.33 and its conditional-increment proof","checked":"2026-10-15","note":"Compensated Poisson martingale for the natural filtration."}
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A Poisson process models a succession of single arrivals at a constant probabilistic rate. Its output $N_t$ is the number observed by time $t$. Specifying the distribution of each $N_t$ separately is insufficient: the model also prescribes how counts in different intervals fit together.

This entry uses the homogeneous process with rate $\lambda>0$ on continuous time $t\ge0$. A rate that changes with time requires a different increment formula; a process with clustered arrivals may fail independent increments altogether.

## Prerequisites

The Poisson distribution with parameter $a$ assigns mass $e^{-a}a^k/k!$ to $k\ge0$. An exponential waiting time with rate $\lambda$ has survival probability $e^{-\lambda t}$ and mean $1/\lambda$.

Independence for increments concerns counts on disjoint intervals. It should not be confused with independence of the accumulated values $N_s$ and $N_t$.

## Definition and conventions

A homogeneous Poisson process is a nondecreasing, integer-valued process $(N_t)_{t\ge0}$ with right-continuous paths, $N_0=0$, independent increments, and
$$
N_t-N_s\sim\operatorname{Pois}(\lambda(t-s))
\qquad(0\le s<t).
$$
Independent increments means that for every deterministic partition $0=t_0<t_1<\cdots<t_m$, the counts $N_{t_j}-N_{t_{j-1}}$ are mutually independent. Their laws depend on interval length, which is stationarity of increments.

The right-continuous convention counts an arrival occurring exactly at $t$ in $N_t$. One concrete construction uses iid exponential waiting times $W_j$ of rate $\lambda$, arrival times $T_n=\sum_{j=1}^n W_j$, and
$$
N_t=\max\{n\ge0:T_n\le t\},\qquad T_0=0.
$$
The arrival times tend to infinity almost surely, so counts are finite on bounded time intervals.

## Intuition

The rate $\lambda$ measures expected arrivals per unit time, not fixed spacing between arrivals. Exponential waiting times allow both short gaps and long silences. Their memoryless property makes the future after a fixed time behave like a fresh counting process.

The construction makes the typical path a staircase with jumps of size one. It has stationary increments while $N_t$ itself is not stationary: its mean grows with elapsed time.

## Examples and non-examples

At rate $\lambda=4$ per hour, the chance of exactly two arrivals during a half-hour interval is
$$
e^{-2}\frac{2^2}{2!}=2e^{-2}.
$$
The probability of no arrival during the next quarter-hour, conditional on the entire count history up to the present deterministic time, is $e^{-1}$. This follows from independent increments.

The process $N_t=\lfloor4t\rfloor$ has the same long-run average rate but is not Poisson: for a quarter-hour increment its count is deterministic rather than Poisson with mean one.

Batch arrivals also change the model. If $M_t$ is a rate-one Poisson process and $B_t=2M_t$, then $B$ has independent stationary increments but only even counts and jumps of size two. These increment properties alone do not establish the Poisson count law.

## Important properties

For each $t$, $E[N_t]=\operatorname{Var}(N_t)=\lambda t$. For $s\le t$, write $N_t=N_s+(N_t-N_s)$. The independent increment is uncorrelated with $N_s$, giving
$$
\operatorname{Cov}(N_s,N_t)=\lambda s.
$$
Thus nontrivial accumulated counts at different times are dependent.

With respect to the natural filtration $\mathcal F_t=\sigma(N_u:0\le u\le t)$, $N_t-\lambda t$ is a martingale. Proof: the future increment is independent of $\mathcal F_s$ and has mean $\lambda(t-s)$, so its compensated conditional mean is zero.

For a short interval of length $h$, the count law gives probability $\lambda h+O(h^2)$ of exactly one arrival and $O(h^2)$ of two or more. These statements concern interval probabilities, not differentiability of sample paths.

## Connections and further reading

The $T_n$ are stopping times for the natural filtration, since $\{T_n\le t\}=\{N_t\ge n\}$. Counts sampled at integer times form a Markov chain on an infinite state space, outside the finite-state scope of the companion article. See [Lawler, §6.2](https://www.math.uchicago.edu/~lawler/finbook.pdf) and [Li, §§3.1–3.2.1](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/poisson.html).
