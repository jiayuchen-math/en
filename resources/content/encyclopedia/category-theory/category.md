---
{"id":"category","title":"Category","chinese":"范畴","aliases":[],"area":"category-theory","topic":"category-theory","level":"Undergraduate","summary":"A category specifies objects, morphisms and associative composition, including an identity at each object.","prerequisites":["set-function","partial-order","group"],"related":["functor","category-morphism","categorical-product","universal-property"],"references":[{"id":"riehl-category","label":"Emily Riehl — Category Theory in Context, author second-edition draft","url":"https://emilyriehl.github.io/files/context.pdf","locator":"§1.1, Definition 1.1.1, Examples 1.1.3–1.1.4, Definitions 1.1.6–1.1.7 and 1.1.10","checked":"2026-10-15","note":"Definition, standard examples, size conventions and isomorphisms; computations below are original examples."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A category is a mathematical setting in which objects can be connected by composable morphisms. It retains the distinction between a transformation and its source and target. This makes the same language useful for sets and functions, vector spaces and linear maps, ordered sets, and many constructions without underlying elements.

The point is not simply to rename functions as arrows. The allowed arrows determine what structure is visible. All functions between topological spaces and only continuous functions between them produce different mathematical settings, even if their object lists agree.

## Prerequisites

Understand functions, composition, and identity maps. Groups and partial orders provide examples in which arrows behave differently from arbitrary functions. Familiarity with classes versus sets helps with size conventions but is not needed for finite examples.

## Definition and conventions

A category $\mathcal C$ has objects, morphisms with specified sources and targets, an identity $1_X:X\to X$ for each object, and a composite $g\circ f:X\to Z$ whenever $f:X\to Y$ and $g:Y\to Z$. For composable morphisms the laws are
$$
h\circ(g\circ f)=(h\circ g)\circ f,\qquad 1_Y\circ f=f=f\circ1_X.
$$
Our composition order applies the rightmost arrow first. A category is small if its objects and morphisms form sets. It is locally small if each collection $\operatorname{Hom}_{\mathcal C}(X,Y)$ is a set; its entire collection of objects may still be larger. Set-theoretic universes provide another way to manage size.

An isomorphism is a morphism $f:X\to Y$ admitting a two-sided inverse. Merely having an arrow in each direction does not establish an isomorphism.

## Intuition

Objects are locations and morphisms are permitted journeys. Composition records the resulting journey, not necessarily the literal path taken. Associativity lets a string of journeys be combined without parentheses. It does not say that two different routes between the same locations must agree: that additional assertion is the content of a commutative diagram.

## Examples and non-examples

In $\mathbf{Set}$ the objects are sets and morphisms are functions. In $\mathbf{Vect}_k$ they are vector spaces and linear maps. The identity linear map and composite of linear maps give the required operations.

A partially ordered set gives a category with exactly one arrow $x\to y$ when $x\le y$. Reflexivity supplies identities and transitivity supplies composition. For the divisibility order on positive integers, arrows $2\to6$ and $6\to30$ compose to $2\to30$.

A group gives a category with one object: group elements are its endomorphisms and multiplication is composition. More generally any monoid works; invertibility is not a category axiom.

A directed graph alone need not be a category. Three vertices and arrows $a\to b$, $b\to c$, but no arrow $a\to c$, cannot support the required composition. One can instead form the free category of paths in the graph, which adds the missing composites and identities.

## Important properties

Identities are unique. If $e$ and $e'$ both act as identities at an object, then $e=e\circ e'=e'$. A two-sided inverse is also unique: if $g$ and $h$ invert $f$, then $g=g(fh)=(gf)h=h$.

Reversing every arrow produces the opposite category $\mathcal C^{\mathrm{op}}$. Associativity survives reversal, so statements about arrows into objects have dual statements about arrows out of objects. Products and coproducts are an important example of this duality.

## Connections and further reading

Continue to functors, which compare categories while preserving their operations, then natural transformations, which compare functors. Products and universal properties make the abstraction concrete. Riehl, §1.1, develops the formal language and a varied collection of examples; higher categories require additional layers of morphisms rather than just a larger object collection.
