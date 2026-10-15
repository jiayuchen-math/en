---
{"id":"categorical-pullback","title":"Categorical Pullback","chinese":"拉回","aliases":["fiber product","纤维积"],"area":"category-theory","topic":"category-theory","level":"Graduate","summary":"A pullback combines two maps to the same target while requiring their images to agree.","prerequisites":["category","categorical-product","universal-property"],"related":["categorical-limit","smooth-vector-bundle","algebraic-prime-spectrum"],"references":[{"id":"riehl-pullback","label":"Emily Riehl — Category Theory in Context, author second-edition draft","url":"https://emilyriehl.github.io/files/context.pdf","locator":"§3.1, Definition 3.1.15, Examples 3.1.18–3.1.19, and Exercise 3.1.vi","checked":"2026-10-15","note":"Pullback universal property, fibers and composition; the finite-set example below is original."},{"id":"gualtieri-transverse-pullback","label":"Marco Gualtieri — Smooth manifolds, Transversality notes","url":"https://www.math.utoronto.ca/mgualt/wiki/Notes21-24.pdf","locator":"§3, Definition 23 and Proposition 3.3, printed pp.21–22","checked":"2026-10-15","note":"Transverse smooth maps have a smooth fiber product; boundaryless setting."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A pullback, also called a fiber product, combines two objects over a common target. An ordinary product allows any pair of coordinates; a pullback permits only pairs with the same image in that target. This construction expresses fibers, intersections and changes of base in a common language.

The same name also appears in operations on functions and differential forms. Those are related constructions but are not definitions of the categorical universal property discussed here.

## Prerequisites

Know categories, binary products and unique factorization. Set maps give the basic model. Topological examples need subspace and product topologies. In other categories, first identify which morphisms are permitted.

## Definition and conventions

Given $f:A\to C$ and $g:B\to C$, a pullback is an object $P$ with maps $p:P\to A$, $q:P\to B$ satisfying $fp=gq$. For every object $X$ and maps $a:X\to A$, $b:X\to B$ with $fa=gb$, there must be a unique $h:X\to P$ such that $ph=a$ and $qh=b$.

The notation is $P=A\times_C B$. The projections and commutativity equation are part of the data. A commutative square alone is not necessarily a pullback square.

In sets the construction is
$$
A\times_C B=\{(a,b)\in A\times B:f(a)=g(b)\}.
$$
This formula is a model in a particular category, not a replacement for the abstract definition.

## Intuition

Imagine two descriptions that carry the same kind of label in $C$. The fiber product matches descriptions precisely when their labels agree. If one map describes a family over a parameter space, pulling back along another parameter map substitutes the new parameters and retains the corresponding fibers.

In contrast to an unrestricted product, a pullback can be empty even when both source objects are nonempty: their images may have no common label.

## Examples and non-examples

Let $C=\{0,1\}$, let $A=\{a_1,a_2,a_3\}$ have labels $0,0,1$, and let $B=\{b_1,b_2\}$ have labels $0,1$. Their product has six pairs but their pullback has just three:
$$
(a_1,b_1),\quad(a_2,b_1),\quad(a_3,b_2).
$$
For any matching pair of maps from $X$, the unique map into these three pairs is $x\mapsto(a(x),b(x))$, verifying universality directly.

For inclusions $A,B\subseteq C$, the pullback is naturally identified with the intersection $A\cap B$. For a point $c\in C$, pulling $A\to C$ back along the singleton map selecting $c$ gives the fiber $f^{-1}(c)$.

A useful non-example takes $A=B=C$ to be singletons and $P$ to have two elements. The square commutes, but a singleton has two possible lifts into $P$. Thus the square fails uniqueness even though it contains no contradictory equations.

## Important properties

Pullbacks are unique up to the unique isomorphism preserving both projections. When a terminal object $1$ exists, $A\times_1 B$ is a product. Pullback along a composite can be performed in two stages: the two resulting objects classify exactly the same compatible tuples, giving a canonical isomorphism.

In topological spaces, use the indicated subset of $A\times B$ with its subspace topology. The product universal property and the subspace criterion verify the required continuity. For smooth manifolds, the set-theoretic fiber product need not be a manifold; transversality is a standard sufficient hypothesis, not an automatic property of all smooth maps.

## Connections and further reading

Pullbacks are limits of cospans. They organize base change of bundles and, in algebraic geometry, fiber products of schemes. The opposite construction is a pushout. Riehl, §3.1, develops the categorical definition and examples before more general results about limits.
