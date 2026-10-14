---
{"id":"vector-space","title":"Vector Space","chinese":"向量空间","aliases":[],"area":"algebra","topic":"linear-algebra","level":"Undergraduate","summary":"A vector space is an abelian group with scalar multiplication by a field satisfying the distributive and associative laws.","prerequisites":["field","abelian-group"],"related":["vector-basis","linear-map","left-module"],"references":[{"id":"hefferon-la","label":"Jim Hefferon — Linear Algebra, fourth edition","url":"https://jheffero.w3.uvm.edu/linearalgebra/book.pdf","checked":"2026-10-14","locator":"Chapter Two, I.1 Definition and Examples; II Linear Independence; III.1 Basis","note":"Definitions and principal structural statements; calculations and explanatory prose are original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A vector space describes addition and scaling independently of a chosen coordinate system. Points in a coordinate plane are one example, but polynomials, matrices, and functions also supply vector spaces. The field of scalars is part of the specification: changing it can change dimension and the meaning of linear independence.

## Prerequisites

Know fields and abelian groups. A field supplies addition, multiplication, and division by nonzero scalars. The additive group of vectors supplies addition and additive inverses. These operations must interact compatibly; merely having two unrelated operations on a set is insufficient.

## Definition and conventions

Let $F$ be a field. An $F$-vector space is an abelian group $(V,+)$ with an operation $F\times V\to V$, written $(a,v)\mapsto av$, such that
$$
a(v+w)=av+aw,\quad(a+b)v=av+bv,\quad a(bv)=(ab)v,\quad1v=v.
$$
These equations apply to every suitable choice of scalars and vectors. They imply $0v=0_V$ and $a0_V=0_V$. We allow the zero space, whose only vector is $0_V$. Unless specified otherwise, scalar multiplication is written on the left.

A subspace is a subset containing zero and closed under addition and scalar multiplication. A basis is a linearly independent spanning family; expansions in a basis are finite, even when the basis is infinite.

## Intuition

A vector is something that can participate in linear combinations. Coordinates name a vector relative to a basis; they are not an intrinsic feature of the vector. Different coordinate lists may describe the same object after a basis change. This viewpoint lets the same argument apply to geometric arrows and formal polynomials.

## Examples and non-examples

The polynomials of degree at most two form a three-dimensional vector space over $\mathbb R$, with basis $1,x,x^2$. For example, $3-2x+5x^2$ has coordinates $(3,-2,5)$ in that basis.

Polynomials of degree exactly two do not form a vector space: subtracting a polynomial from itself gives zero, which is outside the proposed set. Likewise the affine line $\{(x,y):y=1\}$ is not a subspace of $\mathbb R^2$.

The complex numbers have dimension one over $\mathbb C$, but dimension two over $\mathbb R$, with real basis $1,i$. Thus dimension requires a stated scalar field.

## Important properties

For a finite spanning family, delete any vector that is a linear combination of the others until an independent spanning family remains. Conversely, an independent family can be enlarged to a basis in finite dimension. The exchange argument proves that all finite bases have the same size, defining dimension.

Subspaces are again vector spaces. Their intersection is a subspace, while their union usually is not: the two coordinate axes contain $(1,0)$ and $(0,1)$ but not their sum.

## Connections and further reading

Linear maps preserve the two operations and connect vector spaces. Modules generalize the scalar field to a ring, where bases may fail to exist. See [Hefferon, Chapter Two](https://jheffero.w3.uvm.edu/linearalgebra/book.pdf), especially Definition and Examples, Linear Independence, and Basis.

