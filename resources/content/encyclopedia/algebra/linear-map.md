---
{"id":"linear-map","title":"Linear Map","chinese":"线性映射","aliases":[],"area":"algebra","topic":"linear-algebra","level":"Undergraduate","summary":"A linear map preserves addition and scalar multiplication between vector spaces over the same field.","prerequisites":["vector-space"],"related":["linear-map-rank","rank-nullity-theorem","diagonalizable-linear-map"],"references":[{"id":"hefferon-la","label":"Jim Hefferon — Linear Algebra, fourth edition","url":"https://jheffero.w3.uvm.edu/linearalgebra/book.pdf","checked":"2026-10-14","locator":"Chapter Three, II.1 Definition and Examples; II.2 Range Space and Null Space","note":"Definitions and principal structural statements; calculations and explanatory prose are original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Linear maps express the structural part of matrix calculations. A matrix represents a map after bases have been selected; the map itself can be defined without coordinates. Keeping this distinction visible makes kernels, images, and composition intelligible across spaces of polynomials and functions as well as coordinate spaces.

## Prerequisites

Use vector spaces over a field $F$, linear combinations, and bases. Domain and codomain must be declared. A formula that preserves real scaling may fail to preserve complex scaling when the same underlying sets are regarded as complex vector spaces.

## Definition and conventions

For $F$-vector spaces $V,W$, a map $T:V\to W$ is linear if
$$
T(av+bw)=aT(v)+bT(w)
$$
for all $v,w\in V$ and $a,b\in F$. Equivalently it preserves addition and scalar multiplication separately. Its kernel is $\{v:T(v)=0\}$ and its image is $\{T(v):v\in V\}$. Both are subspaces.

An endomorphism has $V=W$. An isomorphism is a bijective linear map; its inverse is then linear. An affine map has the form $v\mapsto T(v)+c$ and is linear precisely when $c=0$.

## Intuition

A linear map respects how a vector is assembled from other vectors. Knowing its values on a basis determines its values everywhere: expand the input and apply the same coefficients to the basis images. The kernel describes information erased by the map, while the image describes attainable outputs.

## Examples and non-examples

Differentiation $D:\mathbb R[x]_{\le2}\to\mathbb R[x]_{\le1}$ is linear. In the bases $(1,x,x^2)$ and $(1,x)$,
$$
D(a+bx+cx^2)=b+2cx.
$$
Its kernel consists of constant polynomials and its image is the whole codomain. Thus its rank is two and its nullity is one.

The map $x\mapsto x^2$ on $\mathbb R$ is not linear, since its value at $2$ is four rather than twice its value at $1$. Translation by a nonzero vector fails already at zero. Complex conjugation is real-linear but not complex-linear: conjugating $i\cdot1$ gives $-i$, whereas multiplying the conjugate of $1$ by $i$ gives $i$.

## Important properties

Every linear map sends zero to zero. It is injective exactly when its kernel is zero: $T(v)=T(w)$ is equivalent to $v-w$ lying in the kernel. For finite-dimensional $V$,
$$
\dim V=\dim\ker T+\dim\operatorname{im}T.
$$
A proof extends a kernel basis to a domain basis; the images of the added vectors form an image basis. Composition corresponds to matrix multiplication only when the intermediate bases match.

## Connections and further reading

Quotienting by the kernel gives $V/\ker T\cong\operatorname{im}T$, a model for broader isomorphism theorems. See [Hefferon, Chapter Three, Section II](https://jheffero.w3.uvm.edu/linearalgebra/book.pdf), including Definition and Examples and Range Space and Null Space.

