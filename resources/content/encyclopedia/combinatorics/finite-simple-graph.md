---
{
  "id": "finite-simple-graph",
  "title": "Finite Simple Graph",
  "chinese": "简单图",
  "aliases": [],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "A finite simple graph records an undirected adjacency relation without loops or repeated edges.",
  "prerequisites": [
    "binomial-coefficient"
  ],
  "related": [
    "graph-vertex-degree",
    "bipartite-graph",
    "graph-tree",
    "graph-isomorphism"
  ],
  "references": [
    {
      "id": "finite-simple-graph-source-1",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_graphs_intro.html",
      "locator": "Section 5.1, graph/degree/subgraph/path/cycle/isomorphism/tree definitions; Theorem 5.9",
      "checked": "2026-10-14",
      "note": "Supports graph conventions, the degree sum identity, and graph isomorphism."
    },
    {
      "id": "finite-simple-graph-source-2",
      "label": "新疆大学 — 本科课程教学大纲汇编，图论（050762）",
      "url": "https://math.xju.edu.cn/__local/0/67/DB/5C21D11D29F36A4B66B2BFBE0F9_3E63DCBE_14FD47.pdf",
      "locator": "PDF pp.94–95 (printed pp.93–94), 四、课程教学内容，第一部分及第三部分（名称证据）",
      "checked": "2026-10-14",
      "note": "The Graph Theory syllabus names 简单图 in its first part."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A finite simple graph models which pairs of objects are connected. It keeps adjacency while discarding geometric details such as distance, angle, and the shape of a drawn edge. This separation makes one model useful for collaboration networks, incompatible tasks, and forbidden-pattern problems, provided the relation is symmetric and self-relations are irrelevant.

## Prerequisites

Use finite sets, unordered pairs, subsets, and bijections. Basic counting explains why an $n$-vertex simple graph can have at most $\binom n2$ edges. No embedding in a plane is part of the definition.

## Definition and conventions

A finite simple graph is $G=(V,E)$, where $V$ is a finite set and $E$ is a subset of the two-element subsets of $V$. An edge $\{u,v\}$ may be written $uv$; $uv$ and $vu$ are the same edge. A vertex is adjacent to another precisely when their pair lies in $E$.

There are no loops and no parallel edges. Write $n=|V|$, $m=|E|$, and $d(v)=|\{u:uv\in E\}|$. A subgraph may delete vertices and edges; the induced subgraph $G[W]$ keeps every original edge with both endpoints in $W$. We allow $V=\varnothing$, although later theorems may require at least one vertex.

## Intuition

A drawing is a convenient representation, not extra data. Crossing two edge curves does not introduce a vertex. Similarly, moving vertices around does not change adjacency. An isomorphism formalizes relabeling: it is a vertex bijection preserving both edges and nonedges.

## Examples and non-examples

Suppose four tasks $a,b,c,d$ have conflicts $ab,bc,cd$. Their conflict graph has degrees $1,2,2,1$, hence three edges. It is a path. Tasks $a,c$ can be performed together because they are nonadjacent, even though the drawing might place them close together.

The induced graph on $\{a,b,c\}$ must contain both $ab$ and $bc$. Keeping only $ab$ gives a subgraph on that vertex set, but not the induced subgraph.

A transport model that records two separate routes between the same pair of stations is not a simple graph if those routes must remain distinct edges. Replacing them by one edge produces a simple graph but loses route multiplicity. A directed connection also needs a different model.

## Important properties

The degree sum identity is

$$
\sum_{v\in V}d(v)=2m.
$$

Its proof counts incidences between vertices and edges: every edge has exactly two distinct endpoints. Consequently the number of odd-degree vertices is even, since an even total cannot contain an odd number of odd summands.

Equal degree lists do not guarantee isomorphism. A cycle on six vertices and two disjoint triangles both have six vertices of degree two; the former is connected and the latter is disconnected. Connectivity is preserved by every isomorphism, so these graphs cannot be isomorphic.

## Connections and further reading

Matching theory selects edges without shared endpoints. Extremal graph theory asks how many edges can coexist while a specified subgraph is forbidden. Probability assigns distributions to possible edge sets. [Keller and Trotter, §5.1](https://rellek.net/book-2016/s_graphs_intro.html) provides the basic language and Theorem 5.9 gives the degree sum identity.

