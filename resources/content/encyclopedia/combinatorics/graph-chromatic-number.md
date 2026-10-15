---
{
  "id": "graph-chromatic-number",
  "title": "Chromatic Number",
  "chinese": "色数",
  "aliases": ["vertex chromatic number"],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "The chromatic number of a finite simple graph is the minimum number of colors needed to give adjacent vertices different colors.",
  "prerequisites": ["finite-simple-graph", "graph-independent-set", "graph-clique"],
  "related": ["bipartite-graph", "graph-tree", "graph-vertex-degree", "ramsey-number", "probabilistic-method", "additive-combinatorics"],
  "references": [
    {
      "id": "morris-vertex-colouring",
      "label": "Joy Morris — Combinatorics, version 2.1.1",
      "url": "https://opentext.uleth.ca/PDF/Combinatorics.pdf",
      "locator": "§14.3: Definitions 14.3.2–14.3.3, Notation 14.3.4, Proposition 14.3.5, Examples 14.3.6–14.3.7, Corollary 14.3.11; printed pp.161–162 / PDF pp.167–168",
      "checked": "2026-10-15",
      "note": "Supports proper vertex coloring, complete and odd-cycle examples, bipartiteness and the maximum-degree upper bound; the zero-vertex convention is stated separately here."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

Graph coloring turns pairwise incompatibility into a partition problem. Vertices represent objects and edges indicate pairs that cannot receive the same label. The chromatic number asks for the smallest supply of labels that accommodates every constraint. Finding one valid assignment gives an upper bound; proving it optimal also requires a lower bound.

## Prerequisites

Use finite simple graphs, independent sets and cliques. An independent set contains no adjacent pair; a clique has every possible edge between its vertices. Coloring uses both notions: color classes are independent, while clique vertices require distinct colors.

## Definition and conventions

A proper $k$-coloring of $G=(V,E)$ is a function

$$
c:V\longrightarrow\{1,\ldots,k\}
$$

such that $c(u)\ne c(v)$ for every edge $uv$. The map need not use all available colors. The chromatic number $\chi(G)$ is the least nonnegative integer $k$ for which such a coloring exists.

For $k=0$ the target is empty. Thus the graph with no vertices has chromatic number zero, while a nonempty graph with no edges has chromatic number one. All graphs here are loopless: a loop would demand $c(v)\ne c(v)$ and prevent any proper coloring.

This is vertex coloring. Proper edge coloring and arbitrary red/blue edge colorings in Ramsey theory are separate constructions with different conditions.

## Intuition

A proper coloring partitions the vertices into independent classes. Reusing a color is permitted precisely when its class creates no conflict. In scheduling terms, a color could denote a time slot for tasks, with an edge marking a pair that cannot run together.

The number of colors in a displayed coloring need not be minimal. Even a coloring that uses a new color only when forced by earlier choices can depend heavily on the order of the vertices.

## Examples and non-examples

Let $C_5$ have vertices $v_1,\ldots,v_5$ and edges between consecutive vertices cyclically. With two colors, the edges force alternating colors: if $v_1$ receives color one, then $v_2,v_3,v_4,v_5$ must receive two, one, two, one. The edge $v_5v_1$ then violates properness. Three colors suffice with labels $1,2,1,2,3$, so $\chi(C_5)=3$.

By contrast, $C_4$ admits the cyclic assignment $1,2,1,2$, and its edges rule out one color. A triangle needs three colors because every pair of its vertices is adjacent. But $C_5$ has no triangle and still needs three: clique size need not equal chromatic number.

For a worked failure of greedy optimality, take the path $v_1v_2v_3v_4$ and process vertices in the order $v_1,v_4,v_2,v_3$. Assigning the smallest available positive color gives $1,1,2,3$ in that processing order. The final vertex sees colors one and two. Yet the path has a proper two-coloring, so greedy output alone does not establish its chromatic number.

## Important properties

If a nonempty finite simple graph has largest clique size $\omega(G)$ and maximum degree $\Delta(G)$, then

$$
\omega(G)\le\chi(G)\le\Delta(G)+1.
$$

Proof sketch: clique vertices force the lower bound. For the upper bound, process vertices in any order. At most $\Delta(G)$ colors occur on already colored neighbors, leaving a choice among $\Delta(G)+1$ colors. Induction completes the assignment.

A graph is two-colorable exactly when it is bipartite: the two color classes give the two parts, and a bipartition supplies the coloring. Its chromatic number is exactly two when it also has an edge. This explains the value for every tree with at least two vertices.

Restricting a proper coloring to a subgraph proves $\chi(H)\le\chi(G)$ whenever $H\subseteq G$. For a disjoint union, the chromatic number is the maximum of the component chromatic numbers, since different components can reuse labels.

## Connections and further reading

The probabilistic method studies coloring obstructions that are not explained by a single large clique. Ramsey theory instead constrains patterns in arbitrary edge colorings. Color classes also provide a useful language for additive combinatorics: coloring a set of integers partitions it into classes in which one may seek arithmetic patterns. No equivalence between these different coloring questions is implied.

See [Morris, §14.3, Definitions 14.3.2–14.3.3 and Corollary 14.3.11](https://opentext.uleth.ca/PDF/Combinatorics.pdf) for proper vertex coloring and the maximum-degree bound.
