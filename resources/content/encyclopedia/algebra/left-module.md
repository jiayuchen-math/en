---
{"id":"left-module","title":"Left Module","chinese":"左模","aliases":[],"area":"algebra","topic":"abstract-algebra","level":"Undergraduate","summary":"A left module replaces the scalar field of a vector space by a unital ring.","prerequisites":["unital-ring","abelian-group"],"related":["free-module","submodule","tensor-product-modules"],"references":[{"id":"clark-ha","label":"Pete L. Clark — MATH 8030 Introduction to Homological Algebra","url":"https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf","checked":"2026-10-14","locator":"Section 2, R-Modules; Subsections 2.1 Some Constructions and 2.4 Free Modules","note":"Definition and structural properties; examples and explanation written for this compilation."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Modules extend vector spaces by allowing scalars from a ring. This small change has major consequences: a nonzero scalar may fail to be invertible, nonzero vectors may be killed by scalars, and a basis need not exist. Modules provide one language for abelian groups, linear operators, and many structures arising from rings.

## Prerequisites

Know rings with identity and abelian groups. A module uses the ring's multiplication to compose scalar actions. When the ring is noncommutative, distinguish left multiplication from right multiplication; the order cannot be discarded.

## Definition and conventions

Let $R$ be a unital ring. A left $R$-module is an abelian group $M$ with an action $R\times M\to M$ satisfying
$$
r(m+n)=rm+rn,\quad(r+s)m=rm+sm,\quad(rs)m=r(sm),\quad1m=m.
$$
All variables range over their indicated structures. A submodule is an additive subgroup closed under the scalar action. A module homomorphism preserves addition and that action.

For a right module, scalars are written on the right and the associativity law is $(mr)s=m(rs)$. Over a commutative ring a left module gives a right module by $mr=rm$, but this conversion is not automatic for general rings.

## Intuition

The ring supplies allowable operations on the additive group. Unlike a field, it may contain scalars that compress or annihilate information. Consequently modules retain divisibility and torsion phenomena that vector spaces erase.

## Examples and non-examples

Every abelian group is a $\mathbb Z$-module: positive integers act by repeated addition, negative integers by additive inverses. For $M=\mathbb Z/6\mathbb Z$, the nonzero class of $2$ is killed by the scalar $3$. This cannot happen for a nonzero vector scaled by a nonzero field element.

The same module is not free over $\mathbb Z$. Any nonzero element of a free abelian group has infinite additive order, whereas every element here has finite order.

A vector space $V$ with an endomorphism $T$ becomes an $F[x]$-module by setting $p(x)v=p(T)v$. The equation $(pq)(T)=p(T)q(T)$ verifies the scalar associativity axiom. This example makes operator theory part of module theory.

A nonabelian group cannot be a module with its existing group operation as addition, since the additive group of a module must be abelian.

## Important properties

The quotient $M/N$ by a submodule inherits a scalar action, because changing a representative by an element of $N$ changes its multiple by another element of $N$. For a homomorphism $f:M\to P$, the kernel and image are submodules and
$$
M/\ker f\cong\operatorname{im}f.
$$
The map sends the class of $m$ to $f(m)$; the kernel relation proves well-definedness and injectivity.

Free modules have bases, but general modules are described by generators and relations. Finite generation and freeness are distinct conditions.

## Connections and further reading

Tensor products combine module actions, and exact sequences express relations between modules. Read [Clark, Section 2](https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf), particularly Some Constructions and Free Modules, for these structural constructions.

