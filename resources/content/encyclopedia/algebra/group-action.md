---
{"id":"group-action","title":"Group Action","chinese":"群作用","aliases":[],"area":"algebra","topic":"abstract-algebra","level":"Undergraduate","summary":"A group action assigns compatible permutations of a set to group elements.","prerequisites":["group"],"related":["group-orbit","group-stabilizer","finite-group-linear-representation"],"references":[{"id":"milne-gt","label":"J. S. Milne — Group Theory","url":"https://www.jmilne.org/math/CourseNotes/GT.pdf","checked":"2026-10-14","locator":"Chapter 4, Definitions and examples; Orbits; Stabilizers","note":"Definitions and principal structural statements; calculations and explanatory prose are original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A group action connects abstract multiplication with transformations of a concrete set. It can describe rotations of vertices, permutations of roots, or multiplication on cosets. Actions organize elements into orbits and measure their symmetries through stabilizers, making them both a structural tool and a counting method.

## Prerequisites

Know groups, subgroups, and bijections. For a set $X$, its permutations form a group $\operatorname{Sym}(X)$ under composition. A group homomorphism preserves multiplication. These facts provide an equivalent formulation of the action axioms.

## Definition and conventions

A left action of a group $G$ on a set $X$ is a function $G\times X\to X$ satisfying
$$
ex=x,\qquad(gh)x=g(hx)
$$
for all $g,h\in G$ and $x\in X$. Each $g$ acts bijectively, with inverse transformation given by $g^{-1}$. Thus an action is equivalently a homomorphism $G\to\operatorname{Sym}(X)$.

The orbit of $x$ is $Gx=\{gx:g\in G\}$. Its stabilizer is $G_x=\{g:gx=x\}$. The action is faithful if only the identity fixes every point, and transitive if $X$ is nonempty and has one orbit. A right action has a different order convention; it must not be substituted silently into these formulas.

## Intuition

The orbit asks where a point can go. The stabilizer asks which transformations leave it where it is. An action may hide some of the group: every element in the kernel of the permutation homomorphism is invisible on the entire set.

## Examples and non-examples

The square's symmetry group has eight elements and acts transitively on its four vertices. A chosen vertex is fixed by the identity and the reflection in the diagonal through it. Its stabilizer therefore has two elements, and the orbit has $8/2=4$ points.

Any group acts trivially on a singleton. This action is transitive but, for a nontrivial group, not faithful. These conditions are independent.

A proposed action of the cyclic group of order two that assigns a three-cycle to its generator fails: the square of the assigned permutation is not the identity. Assigning a bijection to each element is insufficient without compatibility.

## Important properties

Orbits partition $X$. The map $gG_x\mapsto gx$ gives a bijection $G/G_x\to Gx$. For finite $G$, it yields the orbit–stabilizer formula
$$
|Gx|=[G:G_x]=|G|/|G_x|.
$$
To check well-definedness, two representatives differ by an element fixing $x$. Surjectivity follows from the orbit definition, and injectivity reverses that same calculation.

For a finite action, averaging the numbers of fixed points gives the number of orbits. This counts equivalent configurations without choosing representatives.

## Connections and further reading

The conjugation action leads to conjugacy classes and the class equation. Linear actions are representations. See [Milne, Chapter 4](https://www.jmilne.org/math/CourseNotes/GT.pdf), Definitions and examples, Orbits, and Stabilizers.

