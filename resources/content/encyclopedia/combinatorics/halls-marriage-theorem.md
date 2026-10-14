---
{
  "id": "halls-marriage-theorem",
  "title": "Hall’s Marriage Theorem",
  "chinese": "Hall定理",
  "aliases": [
    "Hall's theorem",
    "marriage theorem"
  ],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "A finite bipartite graph has a matching saturating one side exactly when every subset of that side has enough distinct neighbors.",
  "prerequisites": [
    "bipartite-graph",
    "graph-matching",
    "graph-augmenting-path"
  ],
  "related": [
    "graph-perfect-matching",
    "graph-maximum-matching",
    "graph-vertex-cover"
  ],
  "references": [
    {
      "id": "halls-marriage-theorem-source-1",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_flowapplications_bip-match.html",
      "locator": "Section 14.2, matching and maximum matching definitions; Theorem 14.7",
      "checked": "2026-10-14",
      "note": "Section 14.2, Theorem 14.7 supports the necessary and sufficient condition."
    },
    {
      "id": "halls-marriage-theorem-source-2",
      "label": "Reinhard Diestel — Graph Theory, fourth electronic edition (2010), corrected reprint 2012",
      "url": "https://diestel-graph-theory.com/Sample.pdf",
      "locator": "Chapter 2 opening; Section 2.1, alternating/augmenting paths, vertex cover definition, Theorem 2.1.1 and its proof",
      "checked": "2026-10-14",
      "note": "The augmenting-path construction supports the proof strategy."
    },
    {
      "id": "halls-marriage-theorem-source-3",
      "label": "南京大学计算机科学与技术系 — 二部图中的匹配，离散数学课程组",
      "url": "https://cs.nju.edu.cn/shiyh/DM2018/parts/25.pdf",
      "locator": "slides 3, 6–9 (PDF pp.3, 6–9), 二部图、图中的匹配、完备匹配、Hall定理",
      "checked": "2026-10-14",
      "note": "Slides 7–9 distinguish 完备匹配 from 完美匹配 and state Hall定理."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Hall’s theorem determines whether distinct resources can be assigned to every member of a finite demand set. Checking each member separately is insufficient: several members may depend on the same small pool. The theorem identifies every possible obstruction through subsets, making a global existence question precise.

## Prerequisites

Know finite bipartite graphs, matchings, neighbor sets, and cardinality inequalities. A matching uses no vertex twice. An augmenting path has positive length, alternates between edges outside and inside a matching, and has unmatched endpoints.

## Definition and conventions

Let $G=(L\cup R,E)$ be a finite simple bipartite graph with disjoint parts $L,R$. For $S\subseteq L$, define

$$
N(S)=\{r\in R:\text{some }s\in S\text{ satisfies }sr\in E\}.
$$

There exists a matching saturating every vertex of $L$ if and only if

$$
|N(S)|\ge |S|\qquad\text{for every }S\subseteq L.
$$

Neighbors are counted once, even if many vertices of $S$ share them. The condition includes $S=\varnothing$, where both sizes are zero, and $S=L$, which forces $|R|\ge|L|$. A matching saturating $L$ is perfect only if it also saturates $R$; in this setting equal part sizes ensure that.

## Intuition

Think of a subset of applicants negotiating together. If their combined list contains fewer available jobs than applicants, no rearrangement can place them all. Hall’s theorem says that finite bipartite assignment has no other kind of obstruction.

## Examples and non-examples

Let three requests $a,b,c$ have allowed resources

$$
N(a)=\{1,2\},\quad N(b)=\{2\},\quad N(c)=\{1,3\}.
$$

Each singleton has at least one neighbor. The three pairs have respectively two, three, and three neighbors, while the full set has three. The empty case also holds. Thus Hall’s condition is satisfied, and $a2$ is not the best initial choice: the complete assignment $a1,b2,c3$ works.

If instead $N(a)=N(b)=\{1\}$ and $N(c)=\{2,3\}$, every request has a neighbor and the full set has three neighbors. Nevertheless $\{a,b\}$ has only one neighbor, so no matching saturates all requests. Both the singleton checks and the total-size check miss this obstruction.

## Important properties

Necessity follows because matching edges assign distinct neighbors to vertices of any $S$. For sufficiency, choose a maximum matching and suppose an unmatched vertex lies in $L$. Explore alternating paths from it. If an unmatched right vertex is reached, switching edge membership along the path increases the matching, a contradiction.

Otherwise let $S$ be the reached left vertices and $T$ the reached right vertices. All neighbors of $S$ are reached, so $T=N(S)$. Every vertex of $T$ is matched to a reached left vertex, while the starting left vertex is unmatched. Hence $|S|>|T|$, contradicting Hall’s condition.

## Connections and further reading

The theorem also expresses the existence of distinct representatives for a finite family of sets. Network flows provide an algorithmic route, and vertex covers give related optimality certificates. See [Keller and Trotter, §14.2, Theorem 14.7](https://rellek.net/book-2016/s_flowapplications_bip-match.html). Preferences and stable matching add a separate requirement that Hall’s theorem does not address.

