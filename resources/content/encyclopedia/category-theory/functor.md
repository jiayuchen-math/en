---
{
  "id": "functor",
  "title": "Functor",
  "chinese": "函子",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Undergraduate",
  "summary": "A functor assigns objects and morphisms between categories while preserving identities and composition.",
  "prerequisites": [
    "category",
    "set-function"
  ],
  "related": [
    "contravariant-functor",
    "natural-transformation",
    "adjunction"
  ],
  "references": [
    {
      "id": "riehl",
      "label": "Emily Riehl — Category Theory in Context (current second-edition draft)",
      "url": "https://emilyriehl.github.io/files/context.pdf",
      "locator": "§1.3 Functoriality, Definition 1.3.1; §1.4 Naturality, Definition 1.4.1",
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

A functor is a structure-preserving passage between categories. It converts both objects and the maps relating them. This second requirement makes categorical constructions useful: transforming an input map produces an output map, and successive transformations remain compatible with composition. Merely assigning an invariant to each object supplies less information.

## Prerequisites

Know a category’s objects, morphisms, composition, and identity morphisms. Concrete examples include sets with functions and vector spaces over a fixed field with linear maps. Be comfortable with the direction of a map: its domain and codomain determine whether another map can be composed with it.

## Definition and conventions

A covariant functor $F:\mathcal C\to\mathcal D$ assigns an object $F(X)$ to each $X$, and an arrow $F(f):F(X)\to F(Y)$ to each $f:X\to Y$, satisfying
$$
F(1_X)=1_{F(X)},\qquad F(g\circ f)=F(g)\circ F(f).
$$
A contravariant functor from $\mathcal C$ to $\mathcal D$ is formally a covariant functor $\mathcal C^{\mathrm{op}}\to\mathcal D$; it reverses arrows and composition order. “Functor” without a qualifier means covariant here. Set-size questions can be handled using classes or a fixed universe; neither convention changes these equations.

## Intuition

A functor translates an entire system of relationships, not just a collection of names. If one calculation can be done in two stages, translating the stages should agree with translating their composite. This requirement permits information to move through a construction without repeatedly rebuilding it from scratch.

## Examples and non-examples

Define $F:\mathbf{Set}\to\mathbf{Set}$ by $F(A)=A\times A$ and $F(f)(a,b)=(f(a),f(b))$. For maps $f:A\to B$ and $g:B\to C$, both $F(gf)$ and $F(g)F(f)$ send $(a,b)$ to $(g(f(a)),g(f(b)))$. The identity equation follows coordinatewise.

Preserving identities is an independent obligation. Regard the natural numbers under addition as a one-object category. Sending every morphism to the zero linear map on a nonzero vector space preserves composition, because zero composed with zero is zero. It fails the identity axiom: the monoid identity $0$ must map to the identity linear map, not the zero map.

## Important properties

Every functor preserves isomorphisms. If $gf=1_X$ and $fg=1_Y$, applying $F$ makes $F(g)$ a two-sided inverse of $F(f)$. A functor need not reflect isomorphisms or distinguish different arrows.

Faithfulness means each induced map on hom-sets is injective; fullness means each is surjective. These conditions concern arrows between specified object pairs. Neither is a claim that the functor gives an injective or surjective function on objects.

## Connections and further reading

Natural transformations compare functors, while adjunctions pair functors through universal mapping properties. Representable functors use maps to or from an object as probes of its structure. See [Riehl, §1.3, Definition 1.3.1](https://emilyriehl.github.io/files/context.pdf) and [Li, “函子与自然变换,” definition labelled def:functor](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).

