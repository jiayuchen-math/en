---
{
  "id": "equivalence-relation",
  "title": "Equivalence Relation",
  "chinese": "等价关系",
  "aliases": [],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Undergraduate",
  "summary": "An equivalence relation partitions a set into classes of mutually equivalent elements.",
  "prerequisites": [
    "set",
    "cartesian-product"
  ],
  "related": [
    "equivalence-class",
    "quotient-set"
  ],
  "references": [
    {
      "id": "relations",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/relations.html",
      "locator": "§13.1 Order Relations; §13.3 Equivalence Relations and Equality",
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

An equivalence relation specifies when two elements should count as interchangeable for a particular purpose. It replaces literal equality with a precisely controlled comparison. The resulting classes let mathematics collect many representatives into one object, as in residue classes, fractions, or objects classified up to a specified relation.

## Prerequisites

A binary relation on a set $X$ is a subset of $X\times X$. Write $x\sim y$ when $(x,y)$ belongs to this subset. Know subsets and functions, especially the requirement that a function assign one unambiguous value to every input.

## Definition and conventions

A relation $\sim$ on $X$ is an equivalence relation when, for every $x,y,z\in X$, it satisfies reflexivity $x\sim x$, symmetry $x\sim y\Rightarrow y\sim x$, and transitivity $(x\sim y\land y\sim z)\Rightarrow x\sim z$.

The equivalence class of $x$ is $[x]=\{y\in X:y\sim x\}$. The quotient set $X/{\sim}$ consists of these classes. The canonical map $q:X\to X/{\sim}$ sends an element to its class. No algebraic operation on the quotient is implied until compatibility with the relation has been proved.

## Intuition

A class records a shared feature while forgetting which representative supplied it. For congruence, the feature is a remainder. For reduced fractions, different pairs of integers may name the same rational number. The equivalence conditions ensure that sharing the feature behaves consistently.

## Examples and non-examples

On $\mathbb Z$, define $a\sim b$ when $4$ divides $a-b$. Reflexivity follows from $a-a=0$; symmetry from negating a multiple of four; transitivity from adding two such multiples. There are four classes, represented by $0,1,2,3$. Thus $[6]=[2]$, although $6\ne2$.

The relation $aRb$ meaning $|a-b|\leq1$ is reflexive and symmetric but not transitive: $0R1$ and $1R2$, while $0R2$ fails. “Close enough” cannot be used as equivalence without checking the missing condition.

## Important properties

Two equivalence classes are either equal or disjoint. If $z$ belongs to both $[x]$ and $[y]$, symmetry and transitivity give $x\sim y$, and then every element equivalent to one is equivalent to the other. Reflexivity ensures every element belongs to its own class, so the classes partition $X$.

A function $f:X\to Y$ descends to $\bar f:X/{\sim}\to Y$ exactly when $x\sim y$ implies $f(x)=f(y)$. Then $\bar f([x])=f(x)$ is well-defined, and $f=\bar f\circ q$. For congruence modulo four, parity descends, but the identity map to $\mathbb Z$ does not.

## Connections and further reading

Quotient constructions appear in algebra, topology, and model building. A preorder can also be converted to a partial order by identifying mutually comparable elements in both directions. See [Logic and Proof, §13.3](https://leanprover-community.github.io/logic_and_proof/relations.html) and [Li’s “ZFC 公理一览,” equivalence-relation paragraph](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex).

