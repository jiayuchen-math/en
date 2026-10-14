---
{
  "id": "probabilistic-method",
  "title": "Probabilistic Method",
  "chinese": "概率方法",
  "aliases": [
    "probabilistic existence method"
  ],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "The probabilistic method proves existence by placing candidate combinatorial objects in a probability space and showing that a desired property has positive probability.",
  "prerequisites": [
    "finite-simple-graph",
    "binomial-coefficient"
  ],
  "related": [
    "ramsey-number",
    "extremal-graph-theory",
    "binomial-random-graph"
  ],
  "references": [
    {
      "id": "probabilistic-method-source-1",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_ramsey_probability.html",
      "locator": "Section 11.4, proof of Theorem 11.4 and random-graph probability-space formulation",
      "checked": "2026-10-14",
      "note": "The probability-space formulation in §11.4 supports positive-probability existence and the random clique argument."
    },
    {
      "id": "probabilistic-method-source-2",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_ramsey_girth.html",
      "locator": "Section 11.6, Theorem 11.7, random-graph construction and alteration proof",
      "checked": "2026-10-14",
      "note": "Theorem 11.7 illustrates alteration after a random construction."
    },
    {
      "id": "probabilistic-method-source-3",
      "label": "Reinhard Diestel — 图论，第五版，官方中文目录",
      "url": "https://diestel-graph-theory.com/Chinese/ChineseContents5.pdf",
      "locator": "目录，§11.2「概率方法」（名称证据）",
      "checked": "2026-10-14",
      "note": "The official Chinese contents label §11.2 概率方法."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The probabilistic method proves that a combinatorial object exists by analyzing a randomly chosen candidate. Randomness belongs to the proof, not necessarily to the object eventually obtained. The method is particularly useful when a satisfactory explicit construction is difficult but unfavorable configurations can be counted.

## Prerequisites

Use finite probability spaces, expectation, indicator variables, and elementary counting. Understand that linearity of expectation does not require independence. Independence is needed only when a calculation multiplies probabilities of events whose joint distribution has been justified.

## Definition and conventions

Choose a probability distribution on a finite set $\Omega$ of candidate objects. If the desired event $D\subseteq\Omega$ satisfies $\mathbb P(D)>0$, at least one candidate has the desired property.

A common formulation counts bad configurations using a nonnegative integer random variable $X$. If $\mathbb E X<1$, then $\mathbb P(X=0)>0$: otherwise $X\ge1$ everywhere except possibly on probability-zero outcomes, forcing $\mathbb E X\ge1$. The strict inequality is essential. It is enough to use any distribution that supports the argument; uniform sampling is not required.

## Intuition

Bad configurations can overlap heavily. Counting their expected number is often easier than evaluating the probability of each complete outcome. A favorable average rules out the possibility that every candidate is bad. This argument says that a good candidate exists without specifying where to find it efficiently.

## Examples and non-examples

Color each edge of $K_n$ red or blue independently with probability $1/2$. Fix an integer $k$ with $2\le k\le n$, and let $X$ count monochromatic $k$-vertex cliques. A fixed $k$-set is monochromatic with probability $2^{1-\binom k2}$, so

$$
\mathbb E X=\binom nk\,2^{1-\binom k2}.
$$

For $n=8$ and $k=4$, this is $70/32>1$, which establishes no avoiding coloring through this criterion. For $n=5$ and $k=3$, it is $10/4>1$, although the five-cycle coloring does avoid monochromatic triangles. Failure of a sufficient criterion is therefore not evidence of nonexistence.

Conversely, $n=10$ and $k=5$ give $252/512<1$. Thus there exists a coloring of $K_{10}$ with no monochromatic $K_5$, proving $R(5,5)>10$ without locating a particular coloring.

## Important properties

Writing $X$ as a sum of indicator variables justifies the expectation formula even though indicators for overlapping cliques are dependent. The independent edge choices justify the probability for each fixed clique.

Another elementary use assigns each vertex of a finite $m$-edge simple graph independently and uniformly to one of two parts. Each edge crosses with probability $1/2$, so some partition has at least $m/2$ crossing edges. Deleting the noncrossing edges yields a bipartite subgraph of that size.

Alteration extends the method: start with an almost suitable random object, then remove or modify a controlled number of obstructions. The modification must preserve the useful features already established.

## Connections and further reading

The method connects Ramsey lower bounds, extremal constructions, and randomized algorithms. Existence alone supplies neither a success rate suitable for computation nor an efficient search algorithm. [Keller and Trotter, §11.4](https://rellek.net/book-2016/s_ramsey_probability.html) presents random clique avoidance; [§11.6, Theorem 11.7](https://rellek.net/book-2016/s_ramsey_girth.html) illustrates alteration.

