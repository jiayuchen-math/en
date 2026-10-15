---
{"id":"categorical-product","title":"Categorical Product","chinese":"积","aliases":[],"area":"category-theory","topic":"category-theory","level":"Undergraduate","summary":"A product turns any compatible family of component maps into a unique map to one object.","prerequisites":["category","set-function"],"related":["universal-property","categorical-pullback","categorical-coproduct","categorical-limit"],"references":[{"id":"riehl-product","label":"Emily Riehl — Category Theory in Context, author second-edition draft","url":"https://emilyriehl.github.io/files/context.pdf","locator":"§3.1, Definition 3.1.9, Example 3.1.10 and Definition 3.1.11","checked":"2026-10-15","note":"Product projections, topological products and the empty product; finite computations below are original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A categorical product combines objects so that maps into the combination can be specified one component at a time. Cartesian products of sets and direct products of groups are familiar realizations. The category determines what maps are allowed and therefore what counts as a product.

The notation $A\times B$ can conceal this dependence. It denotes an object together with projection maps, not simply a set of ordered pairs stripped of structure.

## Prerequisites

Know categories, identity maps and composition. Examples use functions, linear maps, continuous functions and the category associated to a partial order. No general theory of limits is needed to understand the binary case.

## Definition and conventions

A product of $A$ and $B$ in a category $\mathcal C$ is an object $P$ with projections $p:P\to A$, $q:P\to B$ such that for every object $X$ and arrows $a:X\to A$, $b:X\to B$, there exists exactly one $h:X\to P$ with
$$
p\circ h=a,\qquad q\circ h=b.
$$
Write $h=\langle a,b\rangle$. A product of a family $(A_i)_{i\in I}$ has one projection for each index and the corresponding unique-factorization condition. The empty product, if it exists, is a terminal object: every object admits exactly one arrow into it.

Products need not exist in every category. Their definition is an existence-and-uniqueness property, not a blanket assertion that a familiar construction remains inside the category.

## Intuition

A map to a product is a simultaneous choice of component maps. There are no compatibility equations between separate components, unlike a pullback. For instance, choosing two real-valued continuous functions on a space is equivalent to choosing a continuous map into the plane with its product topology.

The projections let us verify an equation without describing every element: two arrows into a product agree exactly when all their projection composites agree.

## Examples and non-examples

In sets, $\{0,1\}\times\{a,b,c\}$ has six elements. If $X=\{r,s\}$ and the two component functions send $r$ to $1,b$ and $s$ to $0,c$, the induced map sends $r\mapsto(1,b)$ and $s\mapsto(0,c)$.

In vector spaces, $V\times W$ has coordinatewise operations. For two factors this is also the direct sum. For an infinite family, however, the direct sum permits only finitely supported vectors, while the product contains every tuple. The family of identity maps $k\to k$ indexed by positive integers cannot assemble into a map to the direct sum: the image of $1$ would have infinitely many nonzero coordinates.

In a partially ordered set regarded as a category, the product is a greatest lower bound. For positive integers ordered by divisibility, the product of $12$ and $18$ is $6$, not the integer $216$.

Topological products require the product topology. An arbitrary finer topology on the same ordered pairs need not allow every pair of continuous component maps to assemble continuously.

## Important properties

Products are unique up to a unique isomorphism respecting the projections. The canonical maps $A\times B\to B\times A$ and $A\times(B\times C)\to(A\times B)\times C$ follow by assembling the appropriate component maps; their inverses follow the same way.

Given $f:A\to A'$ and $g:B\to B'$, their product is the unique map $f\times g$ whose components are $fp$ and $gq$. Uniqueness proves the composition and identity laws, so chosen binary products define a functor.

## Connections and further reading

Products are limits of discrete diagrams. Pullbacks add an equation tying the components together, while coproducts reverse the arrows and describe maps out of a combined object. Riehl, §3.1, gives these constructions within the general language of cones.
