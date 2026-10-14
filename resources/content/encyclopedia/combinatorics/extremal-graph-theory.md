---
{
  "id": "extremal-graph-theory",
  "title": "Extremal Graph Theory",
  "chinese": "极值图论",
  "aliases": [],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "Extremal graph theory studies the largest or smallest graph parameters compatible with specified structural restrictions.",
  "prerequisites": [
    "finite-simple-graph",
    "graph-subgraph",
    "graph-vertex-degree"
  ],
  "related": [
    "graph-clique",
    "ramsey-number",
    "probabilistic-method"
  ],
  "references": [
    {
      "id": "extremal-graph-theory-source-1",
      "label": "Yufei Zhao — Graph Theory and Additive Combinatorics, author manuscript",
      "url": "https://yufeizhao.com/gtacbook/gtacbook.pdf",
      "locator": "Chapter 1, Definition 1.0.2; Section 1.1, Theorem 1.1.1 and first proof; Section 1.2, Construction 1.2.2 and Theorem 1.2.4",
      "checked": "2026-10-14",
      "note": "Definition 1.0.2 and Theorems 1.1.1, 1.2.4 support the scoped forbidden-subgraph formulation."
    },
    {
      "id": "extremal-graph-theory-source-2",
      "label": "Reinhard Diestel — 图论，第五版，官方中文目录",
      "url": "https://diestel-graph-theory.com/Chinese/ChineseContents5.pdf",
      "locator": "目录，第七章「极值图论」（名称证据）",
      "checked": "2026-10-14",
      "note": "Official Chinese contents name the field 极值图论."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Extremal graph theory asks how far a graph parameter can be pushed under a structural restriction. A central example maximizes the number of edges without creating a particular subgraph. A successful solution supplies both a construction attaining the proposed value and an argument excluding every larger value.

## Prerequisites

Use finite simple graphs, degrees, subgraphs, complete graphs, and basic inequalities. Distinguish an ordinary subgraph from an induced subgraph: extra edges among selected vertices matter only for the induced version.

## Definition and conventions

This entry focuses on forbidden ordinary subgraphs. Fix a finite simple graph $H$ containing at least one edge. For an integer $n\ge0$, define $\operatorname{ex}(n,H)$ to be the largest edge count among $n$-vertex simple graphs containing no subgraph isomorphic to $H$.

Thus $H$-free means free of ordinary copies, not merely induced copies. The maximum exists because there are finitely many edge sets on a fixed labeled vertex set. If $n<|V(H)|$, then $\operatorname{ex}(n,H)=\binom n2$. Other extremal problems optimize minimum degree, clique counts, or parameters of set systems; they require their own specifications.

## Intuition

Adding edges increases density but can create a forbidden pattern. Extremal constructions distribute edges so that many pairs are connected while certain configurations remain impossible. Upper bounds exploit the same obstruction locally and then sum it across the whole graph.

## Examples and non-examples

A complete bipartite graph with parts of sizes three and four has seven vertices and twelve edges. It has no triangle, because any three vertices include two in one part, and those two are nonadjacent. Mantel’s theorem says twelve is the maximum possible: $\operatorname{ex}(7,K_3)=\lfloor49/4\rfloor=12$.

For a convention check, the complete graph on four vertices contains an ordinary three-vertex path: select three vertices and retain two of their edges. It has no induced three-vertex path, since all three selected edges remain in an induced subgraph. Therefore a prohibition of ordinary paths cannot be replaced by a prohibition of induced paths.

## Important properties

Mantel’s bound has a useful degree proof. Let a triangle-free graph have $n>0$ vertices and $m>0$ edges. For each edge $uv$, its endpoint neighborhoods are disjoint, giving $d(u)+d(v)\le n$. Summing over edges yields $\sum_v d(v)^2\le mn$.

Cauchy–Schwarz and the degree sum identity give $(2m)^2/n\le\sum_v d(v)^2$. Combining and dividing by $m$ gives $m\le n^2/4$. Since $m$ is integral, take the floor. The cases $m=0$ and $n=0$ satisfy the bound directly.

For larger forbidden cliques, Turán’s theorem identifies the complete $r$-partite graph with part sizes differing by at most one as an extremal $K_{r+1}$-free graph, for integers $r\ge1$. Empty parts are allowed when $r>n$.

## Connections and further reading

Ramsey theory uses forbidden patterns in complementary colors. Random constructions often provide lower bounds when balanced partitions no longer suffice. Stability asks whether graphs near the extremal edge count resemble an extremal construction. [Zhao, Chapter 1, §§1.1–1.2](https://yufeizhao.com/gtacbook/gtacbook.pdf) develops the triangle and clique cases before more difficult forbidden graphs.

