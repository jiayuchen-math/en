---
{"id":"group","title":"Group","chinese":"群","aliases":[],"area":"algebra","topic":"abstract-algebra","level":"Undergraduate","summary":"A group is a set with an associative operation, an identity, and inverses for every element.","prerequisites":["monoid"],"related":["abelian-group","group-action","normal-subgroup"],"references":[{"id":"milne-gt","label":"J. S. Milne — Group Theory","url":"https://www.jmilne.org/math/CourseNotes/GT.pdf","locator":"Chapter 1, Definitions and examples, Definition 1.1 and Examples 1.3–1.4","checked":"2026-10-14","note":"Group axioms, additive groups and composition of permutations."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A group records operations that can be composed and undone. Its elements might be integers, invertible matrices, or symmetries of a figure. The operation belongs to the data: the integers under addition form a group, whereas the same set under ordinary multiplication does not. Understanding that distinction prevents treating a familiar set as an algebraic structure before specifying its operation.

## Prerequisites

Use sets, functions, and composition of functions. A binary operation on $G$ is a function $G\times G\to G$, so closure is already built into this notation. A monoid has an associative operation and an identity; a group adds invertibility of every element.

## Definition and conventions

A group consists of a set $G$, an operation written $ab$, and an element $e$ such that, for all $a,b,c\in G$,

$$
(ab)c=a(bc),\qquad ea=ae=a,
$$

and each $a$ has an element $a^{-1}$ satisfying $aa^{-1}=a^{-1}a=e$. These axioms force the identity and each inverse to be unique. Commutativity is an additional condition, $ab=ba$; a group satisfying it is abelian. Additive notation uses $0$ and $-a$ in place of $e$ and $a^{-1}$. For permutations, this article composes from right to left.

## Intuition

Think of an element as a reversible instruction. Associativity says that batching consecutive instructions does not change the result. It says nothing about exchanging their order. Reversibility is the decisive difference between a group and a general collection of operations: a projection loses information, but a rotation can be undone.

## Examples and non-examples

In $(\mathbb Z,+)$, the inverse of $7$ is $-7$. In $(\mathbb Z/5\mathbb Z,+)$, the inverse of the class of $2$ is the class of $3$, since $2+3\equiv0\pmod5$.

The permutations of three letters give a nonabelian example. With the convention above, $(12)(23)$ sends $1$ to $2$, whereas $(23)(12)$ sends $1$ to $3$. Thus these operations do not commute. Nonnegative integers under addition form a monoid but not a group: $1$ has no additive inverse within that set. All square matrices under multiplication also fail the inverse axiom because the zero matrix is singular.

## Important properties

Cancellation follows from inverses. If $ab=ac$, multiplying on the left by $a^{-1}$ gives $b=c$. Likewise right cancellation holds. The inverse of a product reverses the order:

$$
(ab)^{-1}=b^{-1}a^{-1}.
$$

Indeed, multiplying either way gives the identity. The reversal matters in nonabelian groups. For finite groups, cosets of a subgroup partition the group into equal-sized pieces; consequently the subgroup's order divides the group's order. Finiteness is essential to that numerical statement.

## Connections and further reading

Group actions turn this abstract operation into actual transformations of sets. Normal subgroups permit quotient groups, and representations turn group elements into invertible linear maps. Read [Milne, Chapter 1](https://www.jmilne.org/math/CourseNotes/GT.pdf) for the foundational definitions and permutation examples before proceeding to these constructions.
