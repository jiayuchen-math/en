---
{
  "id": "ramsey-number",
  "title": "Ramsey Number",
  "chinese": "拉姆齐数",
  "aliases": [
    "two-color clique Ramsey number",
    "Ramsey数"
  ],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "A two-color Ramsey number is the smallest complete-graph size forcing a red clique of one prescribed size or a blue clique of another.",
  "prerequisites": [
    "complete-graph",
    "graph-clique",
    "pigeonhole-principle"
  ],
  "related": [
    "extremal-graph-theory",
    "probabilistic-method"
  ],
  "references": [
    {
      "id": "ramsey-number-source-1",
      "label": "Joy Morris — Combinatorics, version 2.1.1",
      "url": "https://opentext.uleth.ca/PDF/Combinatorics.pdf",
      "locator": "Section 14.2, Definition 14.2.2, Example 14.2.3 and Proposition 14.2.4",
      "checked": "2026-10-14",
      "note": "Definition 14.2.2 and Proposition 14.2.4 support the convention and recurrence; Example 14.2.3 gives R(3,3)."
    },
    {
      "id": "ramsey-number-source-2",
      "label": "中国科学技术大学数学科学学院 — 马杰教授团队在拉姆齐数下界研究中取得突破性进展",
      "url": "https://math.ustc.edu.cn/2026/0505/c18649a736866/page.htm",
      "locator": "文章标题和正文首段「拉姆齐数」；仅作为名称证据",
      "checked": "2026-10-14",
      "note": "The official university article title and opening use 拉姆齐数; no research bound from that news article is asserted here."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Ramsey numbers measure when a large enough system must contain a homogeneous pattern. In the graph formulation every pair receives one of two colors, and the goal is a prescribed monochromatic clique. The forcing statement concerns every coloring; a single counterexample coloring proves that a proposed size is still too small.

## Prerequisites

Know complete graphs, cliques, edge colorings, and the pigeonhole principle. A clique of size $s$ means $s$ vertices with all $\binom s2$ connecting edges present. Colors label edges, rather than vertices.

## Definition and conventions

For positive integers $s,t$, define $R(s,t)$ as the least positive integer $N$ such that every red-blue coloring of the edges of $K_N$ contains a red $K_s$ or a blue $K_t$.

The word “or” is inclusive: both may occur. Monochromatic cliques need not be maximal. A single vertex counts as a monochromatic $K_1$ in either color because it has no edges to check. Consequently $R(1,t)=R(s,1)=1$, while $R(2,t)=t$. The finite Ramsey theorem guarantees existence for these parameters.

## Intuition

The coloring tries to conceal uniform groups. Adding vertices creates more opportunities, but density in one color alone does not settle every parameter. The universal quantifier explains why upper bounds and lower bounds use different arguments: an upper bound must handle all colorings, while a lower bound needs one avoiding both targets.

## Examples and non-examples

For $R(3,3)$, take any vertex in $K_6$. At least three of its five incident edges have the same color, say red. Among their three other endpoints, a red edge completes a red triangle with the chosen vertex. If no such edge exists, those three endpoints form a blue triangle. Thus $R(3,3)\le6$.

To prove the reverse inequality, color the edges of a five-cycle inside $K_5$ red and its remaining edges blue. The red graph is a five-cycle, and the blue graph is also a five-cycle. Neither contains a triangle. Hence $R(3,3)>5$, so it equals six.

An arbitrary coloring of an incomplete six-vertex graph need not contain either triangle. The complete host is a hypothesis, not a cosmetic choice.

## Important properties

Swapping colors proves $R(s,t)=R(t,s)$. Increasing either target size cannot decrease the Ramsey number.

For $s,t\ge2$, the recurrence

$$
R(s,t)\le R(s-1,t)+R(s,t-1)
$$

also proves finiteness inductively. At a chosen vertex in a host of that size, either the red neighborhood has at least $R(s-1,t)$ vertices or the blue neighborhood has at least $R(s,t-1)$. Otherwise the two neighborhoods together would have at most two fewer than the host size, although they contain all remaining vertices. Apply the smaller Ramsey statement within the appropriate neighborhood, then append the chosen vertex when needed.

## Connections and further reading

Probabilistic methods produce colorings avoiding larger monochromatic cliques. Extremal graph theory studies each color class through its forbidden subgraphs. [Morris, §14.2, Definition 14.2.2 and Proposition 14.2.4](https://opentext.uleth.ca/PDF/Combinatorics.pdf) supports the finite two-color formulation. This entry states classical facts and makes no claim about the latest unresolved numerical bounds.

