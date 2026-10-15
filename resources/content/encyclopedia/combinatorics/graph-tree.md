---
{
  "id": "graph-tree",
  "title": "Tree in Graph Theory",
  "chinese": "树",
  "aliases": [],
  "area": "combinatorics",
  "topic": "combinatorics",
  "level": "Undergraduate",
  "summary": "A finite tree is a nonempty connected simple graph without cycles, equivalently one with a unique path between every pair of vertices.",
  "prerequisites": ["finite-simple-graph", "graph-path", "graph-cycle", "connected-graph"],
  "related": ["graph-spanning-tree", "graph-vertex-degree", "bipartite-graph", "graph-chromatic-number", "partial-order", "extremal-graph-theory"],
  "references": [
    {
      "id": "keller-trotter-trees",
      "label": "Keller and Trotter — Applied Combinatorics (2016)",
      "url": "https://rellek.net/book-2016/s_graphs_intro.html",
      "locator": "§5.1: walk/path/cycle, connected graph, forest/tree and spanning-tree definitions; Proposition 5.11 and its proof",
      "checked": "2026-10-15",
      "note": "Supports path and tree conventions and the two-leaf property for finite trees with at least two vertices."
    },
    {
      "id": "morris-trees",
      "label": "Joy Morris — Combinatorics, version 2.1.1",
      "url": "https://opentext.uleth.ca/PDF/Combinatorics.pdf",
      "locator": "§12.4: Definition 12.4.1, Propositions 12.4.2–12.4.4 and Theorem 12.4.5 with proof, printed pp.129–132 / PDF pp.135–138",
      "checked": "2026-10-15",
      "note": "Supports edge deletion, leaf removal and the equivalent n−1-edge characterizations."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

A tree connects vertices without introducing any cyclic redundancy. Between two vertices there is one route without repeated vertices, so removing an edge destroys a connection and adding an edge creates a cycle. Trees provide a first setting for induction on graphs and a basic model for branching structures.

This entry concerns finite undirected simple graphs. Infinite trees share the connectedness and acyclicity definition, but statements about leaves and finite edge counts need separate treatment.

## Prerequisites

Know vertices, edges, adjacency, paths, cycles and connectedness. A path has distinct vertices and its length counts edges; a walk may repeat vertices. A path from a vertex to itself may have length zero. These conventions avoid excluding a one-vertex tree.

## Definition and conventions

A tree is a nonempty connected graph containing no cycle. A forest is an acyclic graph, possibly disconnected. A leaf is a vertex of degree one. The graph with one vertex and no edges is a tree with no leaves under this degree convention; the graph with no vertices is not a tree here.

A spanning tree of a connected graph $G$ is a subgraph that contains every vertex of $G$ and is itself a tree. It need not contain every edge of $G$, and usually does not. A rooted tree is a tree with one distinguished vertex; choosing the root changes the extra structure, rather than the underlying edges.

## Intuition

Connectedness supplies routes and acyclicity removes alternative routes. If two distinct simple paths joined the same vertices, follow them to a point of divergence and then to their first reunion. The two intervening segments would form a cycle. This explains the unique-path characterization directly.

Conversely, a connected graph containing a cycle has two distinct paths between vertices on that cycle. Thus uniqueness of paths captures both requirements in the definition.

## Examples and non-examples

Take $V=\{a,b,c,d,e\}$ and $E=\{ab,bc,bd,de\}$. Every vertex is connected to $b$, and no cycle occurs. The unique path from $c$ to $e$ is $c,b,d,e$, of length three. The leaves are $a,c,e$, and the degree sum is $1+3+1+2+1=8=2|E|$.

Adding $ce$ creates exactly the cycle $c,b,d,e,c$. Deleting $bd$ instead separates the original tree into components on $\{a,b,c\}$ and $\{d,e\}$.

Having $n-1$ edges alone does not certify a tree. A triangle together with one isolated vertex has $n=4$ and three edges, but is disconnected and contains a cycle. Nor does acyclicity alone suffice: two disjoint edges form a forest with two components.

## Important properties

For a finite simple graph with $n\ge1$ vertices, being a tree is equivalent to being connected with $n-1$ edges, or to being acyclic with $n-1$ edges. Both paired hypotheses matter.

Proof sketch of the edge count: a longest path in a tree with at least two vertices has leaves at both ends. An extra neighbor outside the path would extend it, while an extra neighbor on the path would create a cycle. Remove a leaf and its edge; the remaining graph is again a tree. Induction from the one-vertex case gives $|E|=n-1$.

More generally, a forest on $n$ vertices with $c$ components has $n-c$ edges, by summing the tree formula over its components. This proves the acyclic characterization. Every connected finite graph has a spanning tree: repeatedly delete an edge of a cycle, preserving connectedness, until no cycles remain. The resulting tree also proves the connected characterization by comparing edge counts.

Root a tree and assign colors by the parity of distance from the root. Adjacent vertices have opposite parities, giving a bipartition. A tree with an edge consequently has chromatic number two.

## Connections and further reading

Trees are the minimally connected graphs and the maximal acyclic graphs on a fixed nonempty vertex set. Their spanning versions support network algorithms; their ancestor relations provide examples of partial orders. The edge-count arguments are also an entry point to extremal graph theory, where connectivity or forbidden configurations constrain graph size.

See [Keller–Trotter, §5.1](https://rellek.net/book-2016/s_graphs_intro.html) for the definitions and leaf theorem, and [Morris, §12.4, Theorem 12.4.5](https://opentext.uleth.ca/PDF/Combinatorics.pdf) for the equivalent characterizations.
