---
{"id":"short-exact-sequence-modules","title":"Short Exact Sequence of Modules","chinese":"模的短正合列","aliases":[],"area":"algebra","topic":"homological-algebra","level":"Graduate","summary":"A short exact sequence identifies one module as a submodule and another as its quotient.","prerequisites":["left-module","module-homomorphism","quotient-module"],"related":["projective-module","module-ext-group","tensor-product-modules"],"references":[{"id":"clark-ha","label":"Pete L. Clark — MATH 8030 Introduction to Homological Algebra","url":"https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf","checked":"2026-10-14","locator":"Subsection 2.3, Splitting; Subsection 6.5, Ext and Extensions","note":"Scoped definition and stated comparisons; original explanatory examples."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A short exact sequence presents a module in terms of a submodule and the corresponding quotient. It retains more information than the two outer modules alone: the way they are assembled can change the middle module. This distinction is central to extension problems and the meaning of projectivity.

## Prerequisites

Know modules over a unital ring $R$, module homomorphisms, kernels, images, and quotients. Exactness at an object means that the image of the incoming map equals the kernel of the outgoing map. All maps in the sequence must be $R$-linear.

## Definition and conventions

A sequence
$$
0\longrightarrow A\xrightarrow{i}B\xrightarrow{p}C\longrightarrow0
$$
is short exact if $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$. Thus $A$ is identified with a submodule of $B$ and $C\cong B/i(A)$.

It splits if there is an $R$-linear section $s:C\to B$ with $ps=\operatorname{id}_C$. Equivalently, $i$ has a linear retraction, and the sequence is isomorphic to the direct-sum sequence for $A\oplus C$. A section merely as a set map does not meet this condition.

## Intuition

The quotient reports the part visible after the submodule has been suppressed. A splitting chooses compatible representatives of quotient elements inside $B$, creating a complementary submodule. Without that compatibility the middle object can be a nontrivial extension.

## Examples and non-examples

The sequence of abelian groups
$$
0\longrightarrow\mathbb Z/2\mathbb Z
\xrightarrow{i}\mathbb Z/4\mathbb Z
\xrightarrow{p}\mathbb Z/2\mathbb Z
\longrightarrow0
$$
with $i(\bar1)=\bar2$ and $p$ reduction modulo two is exact. It does not split. A section would send the element of order two to an element mapping to $\bar1$, but both such elements in $\mathbb Z/4\mathbb Z$ have order four.

The direct-sum sequence with middle term $(\mathbb Z/2\mathbb Z)^2$ does split. It has the same outer terms but a nonisomorphic middle group, illustrating the extra extension data.

The sequence $\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{3}\mathbb Z$ is not even a complex: the composite is multiplication by six, not zero. Merely arranging homomorphisms in a row does not yield exactness.

## Important properties

Every short exact sequence of vector spaces splits: choose a basis of the quotient and lift its basis vectors. For arbitrary modules, those lifts may violate relations. Projective modules are precisely the modules $C$ for which every short exact sequence ending in $C$ splits.

Given a section, the isomorphism is $(a,c)\mapsto i(a)+s(c)$. Surjectivity follows by subtracting the chosen lift of $p(b)$; injectivity follows by applying $p$ and then using injectivity of $i$.

Tensoring preserves right exactness, but may lose injectivity on the left. Flatness guarantees preservation of the whole short exact sequence.

## Connections and further reading

The group $\operatorname{Ext}^1_R(C,A)$ classifies extensions with the outer modules fixed; its zero class represents split sequences. See [Clark, Splitting and Ext and Extensions](https://plclark.github.io/PeteLClark/Expositions/Math8030_Exercises.pdf), Subsections 2.3 and 6.5.

