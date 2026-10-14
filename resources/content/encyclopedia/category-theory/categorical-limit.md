---
{
  "id": "categorical-limit",
  "title": "Categorical Limit",
  "chinese": "极限",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Graduate",
  "summary": "A categorical limit is a universal cone through which every compatible cone factors uniquely.",
  "prerequisites": [
    "functor",
    "natural-transformation",
    "universal-property"
  ],
  "related": [
    "categorical-product",
    "categorical-pullback",
    "categorical-colimit"
  ],
  "references": [
    {
      "id": "limit",
      "label": "Emily Riehl — Category Theory in Context (current second-edition draft)",
      "url": "https://emilyriehl.github.io/files/context.pdf",
      "locator": "§3.1 Limits and Colimits as Universal Cones; Definitions 3.1.9, 3.1.11, 3.1.13, 3.1.15",
      "checked": "2026-10-14",
      "note": "Formal definitions and structural claims; examples below are editorial constructions."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Limits organize constructions that combine data subject to compatibility equations. Products collect independent coordinates, equalizers impose equality of two outputs, and pullbacks match outputs of maps to a common target. Their common feature is a universal property describing every compatible map into the constructed object.

## Prerequisites

Know categories, functors, and natural transformations. A diagram is a functor $D:J\to\mathcal C$, where $J$ records the pattern of objects and arrows. Assume $J$ is small and $\mathcal C$ locally small when using sets of cones or the usual hom-set formulation.

## Definition and conventions

A cone with vertex $X$ consists of arrows $x_j:X\to D(j)$ satisfying $D(u)x_j=x_k$ for every $u:j\to k$ in $J$. A limit is a cone $(L,\ell_j)$ such that every cone $(X,x_j)$ admits a unique arrow $h:X\to L$ with $\ell_jh=x_j$ for all $j$.

Equivalently, the limit cone is terminal in the category of cones. The cone maps are part of the construction; an object without these maps is not the full limit data. This is the categorical limit, not an analytic limiting process for numbers.

## Intuition

A limit stores exactly the compatible tuples, together with a uniform way to produce them from any source. The universal property determines how a map into the limit must behave on every coordinate. It is stronger than simply exhibiting some tuples satisfying the diagram’s equations.

## Examples and non-examples

In $\mathbf{Set}$, let $f:\mathbb Z\to\mathbb Z$ be $f(a)=2a$ and $g:\mathbb Z\to\mathbb Z$ be $g(b)=3b$. Their pullback consists of pairs with $2a=3b$. Every such pair is uniquely $(3k,2k)$ for an integer $k$, so the pullback is represented by $\mathbb Z$ with projections $k\mapsto3k$ and $k\mapsto2k$.

For maps $u:X\to\mathbb Z$ and $v:X\to\mathbb Z$ with $2u=3v$, define $h(x)=u(x)/3=v(x)/2$. The divisibility equation guarantees integrality, and the two projections determine $h$ uniquely.

The entire cartesian product $\mathbb Z\times\mathbb Z$ with its standard projections is a non-example: at $(1,1)$ the required outputs are two and three, so the cone equation fails.

## Important properties

Two limit cones for the same diagram admit unique maps to one another respecting their legs. Composing these maps gives endomorphisms respecting the legs; uniqueness forces those endomorphisms to be identities. Thus limits are unique up to the unique compatible isomorphism, rather than literal equality.

All small limits exist in sets: take the subset of the product satisfying every diagram equation. General categories need not contain such limits. Products and equalizers suffice to construct all small limits when both types of construction exist.

## Connections and further reading

Colimits reverse all arrows and express universal gluing. Right adjoints preserve limits that exist. Higher categories replace unique factorization by a suitably contractible space of compatible choices. Read [Riehl, §3.1–§3.2](https://emilyriehl.github.io/files/context.pdf) and [Li, “极限,” definition labelled def:limit and its terminology table](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).

