---
{
  "id": "independent-events",
  "title": "Independent Events",
  "chinese": "独立事件",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "Mutual independence requires probability factorization for every finite collection, rather than only pairs.",
  "prerequisites": [
    "conditional-probability"
  ],
  "related": [
    "pairwise-independent-events",
    "independent-random-variables",
    "conditionally-independent-events"
  ],
  "references": [
    {
      "id": "weber-reference",
      "label": "Richard Weber — Probability",
      "url": "https://www.statslab.cam.ac.uk/~rrw1/prob/prob-weber.pdf",
      "locator": "§§5.2–5.3 Independence of two / multiple events",
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

Independence expresses a precise absence of probabilistic information between events. It belongs to a specified probability law: the same sets can be independent for one weighting of outcomes and dependent for another. Physical separation or different names for events are not sufficient mathematical evidence.

For several events, independence requires all their finite combinations to factor. This requirement is stronger than checking each pair, and the distinction matters when analyzing repeated observations or sums of random quantities.

## Prerequisites

One needs events, intersections, probability spaces, and conditional probability for events of positive probability. Products of nonnegative numbers describe the factorization condition. No density or numerical random variable is needed to define independence of events.

## Definition and conventions

Two events $A,B$ are independent when $P(A\cap B)=P(A)P(B)$. A family $(A_i)_{i\in I}$ is mutually independent when every nonempty finite subset $J\subseteq I$ satisfies
$$
P\left(\bigcap_{i\in J}A_i\right)=\prod_{i\in J}P(A_i).
$$
Pairwise independence imposes this only for sets $J$ of size two. For an infinite family, the definition still concerns finite subfamilies; it does not ask for an undefined infinite intersection product.

When $P(B)>0$, independence of $A$ and $B$ is equivalent to $P(A\mid B)=P(A)$. The factorization definition also covers probability-zero events.

## Intuition

An independent event does not change the probability of another when learned. Mutual independence extends this to learning several specified outcomes together. A hidden constraint can evade all pairwise checks and become visible only when three or more observations are combined.

Independence is symmetric even though conditional probability generally is not. It should also be distinguished from mutual exclusivity: two positive-probability events that cannot occur together are necessarily dependent.

## Examples and non-examples

On the four equally likely outcomes $\{00,01,10,11\}$, let $A$ mean the first bit is one, $B$ mean the second bit is one, and $C$ mean the two bits differ. Each event has probability $1/2$, and each pairwise intersection has probability $1/4$. Thus every pair is independent.

However, $A\cap B\cap C$ is empty, whereas the product of the three probabilities is $1/8$. These three events are not mutually independent. The third bit of information was determined by the first two.

For a mutually independent example, take three independently sampled fair bits and let each event specify that its corresponding bit is one. Any selected $r$ conditions leave $2^{3-r}$ of the eight outcomes, giving probability $2^{-r}$.

## Important properties

Complementing independent events preserves independence. For two events, subtract $P(A\cap B)$ from $P(B)$ to obtain $P(A^c\cap B)=P(A^c)P(B)$. Repeating this subtraction proves the corresponding finite-family result.

Measurable functions of independent random variables remain independent when each function uses its own variable. By contrast, overlapping functions can introduce dependence. Zero covariance is a weaker condition, even for bounded random variables, because it checks only one numerical moment.

## Connections and further reading

Random-variable independence applies this principle to all measurable questions about each variable. Conditional independence concerns a different law after information is supplied; unconditional and conditional independence need not imply one another. [Weber, §§5.2–5.3](https://www.statslab.cam.ac.uk/~rrw1/prob/prob-weber.pdf) states the finite-subfamily requirements. [Peking University, §1.5.1, Definition 1.15](https://math.pku.edu.cn/teachers/lidf/course/stochproc/stochprocnotes/html/_book/prob.html) records the Chinese usage.

