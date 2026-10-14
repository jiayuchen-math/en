---
{
  "id": "set-cardinality",
  "title": "Cardinality of a Set",
  "chinese": "集合的基数",
  "aliases": [],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Undergraduate",
  "summary": "Cardinality measures set size by bijections, with injections providing a comparison of sizes.",
  "prerequisites": [
    "bijective-function",
    "injective-function"
  ],
  "related": [
    "equinumerosity",
    "countable-set",
    "continuum-hypothesis"
  ],
  "references": [
    {
      "id": "infinite",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/the_infinite.html",
      "locator": "§22.1 Equinumerosity; §22.2 Countably Infinite Sets; §22.3 Cantor’s Theorem; §22.5 The Cantor-Bernstein Theorem",
      "checked": "2026-10-14",
      "note": "Definition, stated hypotheses and proof framework."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Cardinality extends counting beyond finite collections. Instead of placing two collections side by side geometrically, it asks whether their elements can be paired without omissions or repetitions. Infinite sets make this viewpoint indispensable: a proper subset can have the same cardinality as the whole set.

## Prerequisites

Understand injective, surjective, and bijective functions. A bijection pairs every input with exactly one output and reaches the entire codomain. Take $\mathbb N$ to start at zero. This article uses the usual ZFC background when referring to every cardinal as an initial ordinal.

## Definition and conventions

Sets $A$ and $B$ have the same cardinality, written $|A|=|B|$, when a bijection $A\to B$ exists. Write $|A|\leq|B|$ when an injection $A\to B$ exists. In ZFC, $|A|$ can be represented by the least ordinal bijective with $A$. The comparison language itself can be used before choosing such representatives.

A set is countable here when it is finite or bijective with $\mathbb N$. Some texts reserve “countable” for the infinite case; “countably infinite” removes this ambiguity. Countability says a listing exists, not that a computable listing has been supplied.

## Intuition

Moving elements farther apart changes their spacing but not their number of possible matches. The map $n\mapsto3n$ pairs $\mathbb N$ with its multiples of three. The infinite case therefore breaks the finite intuition that deleting elements must decrease size.

## Examples and non-examples

The set $A=\{0,3,6,\ldots\}$ has cardinality $\aleph_0$: the displayed map is injective, and every member of $A$ is $3n$ for a unique $n$. The same formula regarded as a map $\mathbb N\to\mathbb N$ is not surjective, since it misses one. The codomain matters.

The power set $\mathcal P(\mathbb N)$ is not countable. Given any proposed listing $S_0,S_1,\ldots$, form $D=\{n:n\notin S_n\}$. At index $k$, the sets $D$ and $S_k$ disagree about membership of $k$, so the listing misses $D$.

## Important properties

The Cantor–Bernstein theorem turns injections in both directions into a bijection, with no axiom of choice needed for that theorem. A constructive proof partitions the two sets into chains initiated outside one image and uses one injection on some chains and the inverse of the other on the rest.

Cantor’s argument works for every set $A$: no map $A\to\mathcal P(A)$ is surjective. The singleton map provides an injection the other way, so $|A|<|\mathcal P(A)|$.

## Connections and further reading

Cardinal size differs from order type: $\mathbb N$ and $\mathbb Z$ have equal size but different usual order structures. The continuum hypothesis concerns a possible cardinal between the natural numbers and their power set. Read [Logic and Proof, §22.1–§22.5](https://leanprover-community.github.io/logic_and_proof/the_infinite.html) and [Li, “基数”](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex).

