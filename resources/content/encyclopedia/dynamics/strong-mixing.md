---
{
  "id": "strong-mixing",
  "title": "Strong Mixing in Measure-Preserving Dynamics",
  "chinese": "强混合",
  "aliases": [
    "measure-theoretic mixing"
  ],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Graduate",
  "summary": "Strong mixing means probabilities of two fixed events separated by long evolution factor in the limit.",
  "prerequisites": [
    "ergodic-transformation",
    "independent-events"
  ],
  "related": [
    "weak-mixing",
    "topological-mixing",
    "invariant-measure"
  ],
  "references": [
    {
      "id": "sarig-reference",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.4 Ergodicity and mixing; §1.5.3 Bernoulli schemes",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "bruin-reference",
      "label": "Henk Bruin — Notes on Ergodic Theory",
      "url": "https://www.mat.univie.ac.at/~bruin/ET3.pdf",
      "locator": "Section 12, Mixing and weak mixing, Definitions 13–14 and Theorems 15–16",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Strong mixing describes loss of correlation between two fixed measurable events as the time separating them tends to infinity. The evolving system may be completely deterministic; randomness enters through its invariant probability measure and the initial state sampled from that measure.

The qualifier matters. Weak mixing averages correlation errors over time, while ergodicity allows signed cancellations. Topological mixing concerns intersections of open sets and contains no probability factors.

## Prerequisites

Assume $(X,\mathcal B,\mu,T)$ is probability preserving. One needs event independence, inverse images, and numerical limits. Square-integrable observables offer an equivalent correlation formulation, with integration replacing event probabilities.

## Definition and conventions

The system is strongly mixing when, for every $A,B\in\mathcal B$,
$$
\mu(A\cap T^{-n}B)\longrightarrow\mu(A)\mu(B)
\quad\text{as }n\to\infty.
$$
Authors often call this simply mixing. Weak mixing instead requires
$$
\frac1N\sum_{n=0}^{N-1}
|\mu(A\cap T^{-n}B)-\mu(A)\mu(B)|\longrightarrow0.
$$
These definitions fix the two events before taking the limit. They do not assert a uniform bound over all choices of events. In particular, this entry's strong mixing should not be identified with a stochastic-process alpha-mixing coefficient without checking the different quantifiers.

## Intuition

If the starting point is sampled from $\mu$, the event $A$ describes its present and $T^{-n}B$ describes a later observation. Mixing says these two fixed questions become asymptotically independent. It does not say every coordinate of the state is independent of every past coordinate at a finite time.

Averaging absolute errors allows occasional large correlations on a sparse set of times. Removing the absolute values allows positive and negative correlations to cancel and yields a still weaker average condition.

## Examples and non-examples

Take the binary Bernoulli shift with independent fair coordinates. Two cylinder events depending on finite blocks of coordinates become exactly independent once their blocks are separated by a sufficiently large shift. For instance, the probability that coordinates zero and $n$ are both one is $1/4$ for every $n\ge1$.

This calculation proves mixing for cylinders. Approximate arbitrary measurable events by finite unions of cylinders in measure; invariance keeps the approximation errors bounded uniformly in the iterate, extending the conclusion to all events.

An irrational circle rotation is not strongly mixing. Its eigenfunction $f(x)=e^{2\pi ix}$ has
$$
\int f(T^nx)\overline{f(x)}\,d\mu(x)=e^{2\pi i n\alpha},
$$
whose modulus is always one. The product of the two means is zero.

## Important properties

Strong mixing implies weak mixing because a bounded numerical sequence tending to zero has vanishing Cesàro averages. If an event is invariant modulo null sets, its correlation with itself is constantly $\mu(A)$. Weak mixing then forces $\mu(A)=\mu(A)^2$, proving ergodicity.

For square-integrable observables, mixing is equivalent to convergence of their correlations to the product of their means. Indicator functions give one direction; simple-function approximation and Cauchy–Schwarz give the other. No rate of convergence is included in the definition.

## Connections and further reading

Mixing is useful for long-time statistical behavior, but limit theorems with quantitative error estimates usually require further assumptions. [Sarig, §§1.4 and 1.5.3](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) introduces mixing and Bernoulli examples. [Bruin, Section 12](https://www.mat.univie.ac.at/~bruin/ET3.pdf) separates the hierarchy. [UCAS, Chapter 2, Section 1 of the ergodic-theory syllabus](https://jwba.ucas.ac.cn/sc/course/courseplan/236472) documents the Chinese names 强混合 and 弱混合; it is naming evidence, not a normative terminology standard.

