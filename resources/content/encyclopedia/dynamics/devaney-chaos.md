---
{
  "id": "devaney-chaos",
  "title": "Devaney Chaos and Other Chaos Notions",
  "chinese": "Devaney混沌",
  "aliases": [],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Graduate",
  "summary": "Devaney chaos combines topological transitivity and dense periodic points under an explicit metric-space convention, and differs from other chaos criteria.",
  "prerequisites": [
    "topological-transitivity",
    "dynamical-periodic-point"
  ],
  "related": [
    "sensitive-dependence",
    "li-yorke-chaos",
    "topological-entropy"
  ],
  "references": [
    {
      "id": "teschl-reference",
      "label": "Gerald Teschl — Ordinary Differential Equations and Dynamical Systems",
      "url": "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf",
      "locator": "§11.3 On the definition of chaos, Devaney definition and Lemma 11.3; §11.5 Symbolic dynamics",
      "checked": "2026-10-14",
      "note": "Inspected definition, example, or proof formulation used in this entry."
    },
    {
      "id": "litan-reference",
      "label": "李健、谭枫 — 关于 Li-Yorke δ-混沌与按序列分布 δ-混沌的等价性",
      "url": "https://journal-n.scnu.edu.cn/cn/article/pdf/preview/hnsfdxxbzrkxb-378.pdf",
      "locator": "Printed p.34, Definition 1; p.36, Remark 3(3)–(5)",
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

“Chaos” names several mathematically different phenomena. Devaney chaos organizes how open regions communicate and how periodic trajectories are distributed. Li–Yorke chaos compares pairs of trajectories. Positive entropy counts distinguishable orbit patterns, while sensitive dependence concerns amplification of small perturbations.

A rigorous claim should state its criterion and its state-space assumptions. A complicated-looking plot, or one expanding trajectory, does not settle all of these conditions.

## Prerequisites

Consider a continuous map $T:X\to X$ on an infinite compact metric space without isolated points. One needs iterates, dense sets, periodic points, and topological transitivity. Pairwise chaos uses lower and upper limits of distances between iterated points.

## Definition and conventions

Here Devaney chaos means topological transitivity together with density of periodic points in $X$. Under the stated hypotheses these conditions imply sensitive dependence: some $\delta>0$ satisfies, for every $x$ and every neighborhood $U$ of $x$, the existence of $y\in U$ and $n\ge0$ with
$$
d(T^nx,T^ny)>\delta.
$$
Some definitions list sensitivity as a third condition. Keeping the hypotheses explicit explains why it is redundant here.

A Li–Yorke scrambled pair consists of distinct points $x,y$ with
$$
\liminf_n d(T^nx,T^ny)=0,\qquad
\limsup_n d(T^nx,T^ny)>0.
$$
Li–Yorke chaos asks for an uncountable set all of whose distinct pairs are scrambled. One such pair alone is not this definition of chaos.

## Intuition

Transitivity provides communication across the state space. Dense periodic points place repeating patterns near every state. Their interaction forces nearby trajectories to separate eventually.

A scrambled pair repeatedly becomes close but does not remain close. This is a different description from counting many orbit patterns or studying infinitesimal growth of tangent vectors.

## Examples and non-examples

The one-sided full binary shift is Devaney chaotic. Cylinder sets specify finite words. Concatenation connects any two cylinders, proving transitivity. Repeating a prescribed finite word produces a periodic sequence inside its cylinder, proving density of periodic points.

An irrational circle rotation is transitive but has no periodic points. It preserves distances, so it lacks sensitivity and cannot have a scrambled pair. Dense trajectories alone do not make it Devaney chaotic.

The map $T(x)=2x$ on $(0,\infty)$ separates nearby initial points and has exponential derivative growth. Its orbits escape to infinity and it is not transitive: a sufficiently high interval cannot reach a lower one by forward iteration. Positive growth is not a universal chaos criterion.

## Important properties

The sensitivity proof uses two disjoint periodic orbits with positive separation. Near any initial point, choose another periodic point. Transitivity sends a nearby point toward the distant periodic orbit; synchronizing a later iterate with the nearby point's period forces a definite separation from at least one of the two trajectories.

On compact spaces, topological conjugacy preserves the Devaney conditions and sensitivity, using uniform continuity in both directions. Entropy and Li–Yorke criteria have their own theorems and hypothesis requirements. Their definitions should not be replaced by one another.

## Connections and further reading

Measure-theoretic mixing requires a chosen invariant law and is not a definition of Devaney chaos. Lyapunov exponents require derivative or cocycle data and supply a further kind of information. [Teschl, §11.3](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) gives the Devaney criterion and sensitivity proof. [李健–谭枫, Definition 1 and Remark 3](https://journal-n.scnu.edu.cn/cn/article/pdf/preview/hnsfdxxbzrkxb-378.pdf) distinguishes Li–Yorke pairs, uncountable scrambled sets, Devaney chaos, and entropy, while documenting the Chinese names.

