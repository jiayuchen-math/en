---
{"id":"tensor-product-modules","title":"Tensor Product of Modules","chinese":"模的张量积","aliases":[],"area":"algebra","topic":"abstract-algebra","level":"Graduate","summary":"The tensor product represents balanced bilinear maps from a right module and a left module.","prerequisites":["left-module","module-homomorphism"],"related":["short-exact-sequence-modules","flat-module","free-module"],"references":[{"id":"clark-ha","label":"Pete L. Clark — MATH 8030 Introduction to Homological Algebra","url":"https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf","checked":"2026-10-14","locator":"Subsection 2.2, Tensor and Hom; Subsection 2.7, Flat Modules","note":"Definition and structural properties; examples and explanation written for this compilation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

The tensor product turns a compatible two-input operation into a one-input linear map. Its defining property is universal, rather than a prescription that every element is a single tensor. It appears in change of scalars, multilinear algebra, and the study of exactness.

## Prerequisites

For a possibly noncommutative ring $R$, take a right $R$-module $M$ and a left $R$-module $N$. Understand additive maps and quotient groups. Over a commutative ring, left modules may be treated as right modules by using the same scalar action.

## Definition and conventions

The abelian group $M\otimes_RN$ has a map $(m,n)\mapsto m\otimes n$ that is additive in each variable and satisfies the balancing relation
$$
(mr)\otimes n=m\otimes(rn).
$$
Every balanced biadditive map $b:M\times N\to A$, for an abelian group $A$, factors uniquely through an additive map $M\otimes_RN\to A$.

It can be constructed as a free abelian group on pairs, divided by the additivity and balancing relations. If $R$ is commutative, the tensor product is naturally an $R$-module. A general element is a finite sum of pure tensors, not necessarily one pure tensor.

## Intuition

Balancing says that applying a scalar to one input is indistinguishable from applying it to the other. The quotient records precisely those identifications. The universal property lets one prove an identity by checking it on pure tensors, since pure tensors generate the group.

## Examples and non-examples

For an ideal $I$ in a commutative ring,
$$
(R/I)\otimes_RN\cong N/IN.
$$
The map takes $\bar r\otimes n$ to the class of $rn$. Balancing and the quotient relations verify that this is well-defined. Consequently
$$
(\mathbb Z/4\mathbb Z)\otimes_{\mathbb Z}(\mathbb Z/6\mathbb Z)
\cong\mathbb Z/2\mathbb Z.
$$

For finite-dimensional vector spaces with bases $(v_i)$ and $(w_j)$, the vectors $v_i\otimes w_j$ form a tensor basis. In two dimensions, $v_1\otimes w_1+v_2\otimes w_2$ is not a pure tensor: a pure tensor's coefficient matrix has rank at most one, while this sum has the identity coefficient matrix of rank two.

## Important properties

Tensoring is right exact. It preserves a surjection and the description of its cokernel, but may destroy an injection. Tensor the injection $\mathbb Z\xrightarrow{2}\mathbb Z$ with $\mathbb Z/2\mathbb Z$: the resulting map is zero, hence not injective.

A module is flat precisely when tensoring with it preserves injections as well. Free modules are flat because tensoring with a free module forms a direct sum of copies of the input. Over a field every vector space is free, so tensoring is exact.

## Connections and further reading

Tensor–Hom adjunction translates maps out of a tensor product into maps taking values in a Hom group. Tor measures the failure of left exactness. See [Clark, Subsections 2.2 and 2.7](https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf) for the universal property and flatness.

