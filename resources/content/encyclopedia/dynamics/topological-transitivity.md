---
{
  "id": "topological-transitivity",
  "title": "Topological Transitivity",
  "chinese": "拓扑传递",
  "aliases": [],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Undergraduate",
  "summary": "Topological transitivity means some iterate connects any prescribed pair of nonempty open regions.",
  "prerequisites": [
    "topological-dynamical-system",
    "dynamical-orbit"
  ],
  "related": [
    "topological-mixing",
    "minimal-dynamical-system",
    "devaney-chaos"
  ],
  "references": [
    {
      "id": "teschl-reference",
      "label": "Gerald Teschl — Ordinary Differential Equations and Dynamical Systems",
      "url": "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf",
      "locator": "§11.3 On the definition of chaos, topological-transitivity definition",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "litan-reference",
      "label": "李健、谭枫 — 关于 Li-Yorke δ-混沌与按序列分布 δ-混沌的等价性",
      "url": "https://journal-n.scnu.edu.cn/cn/article/pdf/preview/hnsfdxxbzrkxb-378.pdf",
      "locator": "Printed p.36, Remark 3(4), topological transitivity and Devaney chaos",
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

Topological transitivity expresses the ability of a continuous dynamical system to connect any two open regions by iteration. It concerns the topology of the state space and needs no probability measure. It is one ingredient of several definitions of chaos, but is not a complete definition by itself.

A system may explore its whole space without amplifying small errors. Irrational circle rotations illustrate why transitivity and sensitive dependence must be distinguished.

## Prerequisites

The basic setting is a continuous map $T:X\to X$ on a nonempty compact metric space. Open sets describe regions with some tolerance around their points. Iteration gives the forward orbit $\{x,T(x),T^2(x),\ldots\}$. No differentiation is needed.

## Definition and conventions

We use the open-set definition: for every nonempty open $U,V\subseteq X$, there is $n\ge0$ such that
$$
T^n(U)\cap V\ne\varnothing.
$$
Some authors require $n\ge1$. On the compact metric spaces without isolated points used for the dense-orbit characterization below, these formulations agree.

A point with dense forward orbit is called transitive. Under these same hypotheses, existence of such a point is equivalent to topological transitivity. Outside an appropriate Baire and countability setting, one should state the open-set and dense-orbit formulations separately.

## Intuition

An initial condition in $U$ can eventually reach $V$. The required time and initial condition may depend on both regions. Transitivity does not assert that every starting point visits every region, or that every sufficiently large time works.

Minimality requires every forward orbit to be dense. Topological mixing requires all sufficiently late iterates to connect the two regions. Both impose stronger requirements than the definition above.

## Examples and non-examples

Let $T(x)=x+\alpha\bmod1$ with irrational $\alpha$. Every orbit is dense in the circle, so the map is transitive and even minimal. Yet it preserves distances. Two initially close points remain equally close forever.

For the one-sided full shift on $\{0,1\}^{\mathbb N}$, a basic open set specifies a finite initial word. Given two such words, append the second after the first. Shifting by the first word's length takes a sequence in the first cylinder into the second. Adding arbitrary intervening symbols works at every sufficiently large shift, proving mixing as well.

The identity map on a space with two disjoint nonempty open sets is not transitive: all iterates leave the first set fixed and never reach the second.

## Important properties

Transitivity is preserved by topological conjugacy. A conjugating homeomorphism transports open sets and intertwines all iterates, so the open-set condition transfers directly.

For a compact metric space without isolated points, choose a countable base $(V_j)$. Each set $\bigcup_{n\ge0}T^{-n}V_j$ is open and dense by transitivity. The Baire theorem makes their intersection dense. Every point in this intersection visits every basic open set and hence has a dense orbit. This proof identifies why both the topology and its countable base are relevant.

## Connections and further reading

Measure-theoretic ergodicity uses measurable invariant sets and depends on a chosen invariant law. A full-support ergodic invariant probability measure can imply topological transitivity, but the concepts are not interchangeable. [Teschl, §11.3](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) gives the open-set condition. [李健–谭枫, Remark 3(4), p.36](https://journal-n.scnu.edu.cn/cn/article/pdf/preview/hnsfdxxbzrkxb-378.pdf) documents 拓扑传递 in the same open-set sense.

