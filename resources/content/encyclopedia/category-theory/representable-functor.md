---
{"id":"representable-functor","title":"Representable Functor","chinese":"可表函子","aliases":[],"area":"category-theory","topic":"category-theory","level":"Graduate","summary":"A representable set-valued functor describes maps to or from one object through natural bijections.","prerequisites":["category","functor","natural-transformation","universal-property"],"related":["yoneda-lemma","categorical-product","adjunction"],"references":[{"id":"riehl-representable","label":"Emily Riehl — Category Theory in Context, author second-edition draft","url":"https://emilyriehl.github.io/files/context.pdf","locator":"§2.1, Definition 2.1.4 and Examples 2.1.5–2.1.6; §2.3, Corollary 2.3.2 and Definition 2.3.3; §3.5, Theorems 3.5.5(i), 3.5.6 and 3.5.10(i)","checked":"2026-10-15","note":"Variance, natural representations and compatible uniqueness; polynomial and product examples below are original applications."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A representable functor converts a mathematical classification problem into a question about maps involving one object. Rather than list solutions separately for every test object, it identifies all solution sets with hom-sets in a way compatible with changing the test object.

This is useful for universal constructions and for moduli problems. Representability is an actual existence claim: not every set-valued assignment is representable, even if it is already a functor.

## Prerequisites

Use locally small categories, covariant and contravariant functors, and natural isomorphisms. Products and universal properties provide concrete examples. Familiarity with the Yoneda lemma explains why the representing object is essentially unique.

## Definition and conventions

For a locally small category $\mathcal C$, a functor $F:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ is representable if there is an object $R$ and a natural isomorphism
$$
\operatorname{Hom}_{\mathcal C}(-,R)\cong F.
$$
A covariant functor $G:\mathcal C\to\mathbf{Set}$ is representable when $G\cong\operatorname{Hom}_{\mathcal C}(R,-)$. Some authors call this second variance corepresentable. Always check the stated direction instead of inferring it from the word alone.

For the contravariant case, naturality means that if $a:Y\to X$ and $f:X\to R$, the datum associated with $fa$ is obtained by applying $F(a)$ to the datum associated with $f$. The family of bijections must satisfy this identity for every arrow.

## Intuition

A representing object is a container for a universal example. Every example over a test object is obtained by mapping that test object into the container, or mapping out of the container in the covariant case. Naturality ensures that this description works consistently rather than depending on unrelated choices of bijections.

This viewpoint separates building a moduli object from merely defining a moduli functor. The latter records the classification problem; the former requires proving that one object actually solves it.

## Examples and non-examples

For sets and a fixed $A$, the covariant functor $X\mapsto X^A$ is represented by $A$, because $X^A$ is exactly the set of functions $A\to X$. A map $X\to Y$ acts by postcomposition.

For fixed objects $A,B$ in a category with their product, the contravariant functor
$$
X\longmapsto\operatorname{Hom}(X,A)\times\operatorname{Hom}(X,B)
$$
is represented by $A\times B$. The representing natural bijection is the product universal property, not an independent theorem about cardinalities.

In commutative unital rings, $R\mapsto R$ as a set is represented covariantly by $\mathbb Z[t]$: a unital homomorphism is determined by the image of $t$. Evaluation at $r\in R$ supplies the inverse correspondence. More specifically, homomorphisms from $\mathbb Z[t]/(t^2)$ classify elements $r$ with $r^2=0$.

For a nonrepresentable example, the constant empty functor on a nonempty locally small category cannot be represented in either variance. At a proposed representing object $R$, its identity would belong to $\operatorname{Hom}(R,R)$, contradicting emptiness.

## Important properties

A representation includes the natural isomorphism, not just its object. The Yoneda lemma implies that two representations of the same functor admit a unique isomorphism respecting these chosen identifications. Different identifications on the same object can encode different universal elements.

Representable contravariant functors send colimits that exist in $\mathcal C$ to limits of sets: mapping out of a colimit means giving compatible maps from all its pieces. Covariant representables preserve limits. These statements do not assert that the ambient category possesses every limit or colimit.

## Connections and further reading

The Yoneda lemma makes the relationship between universal elements and representing natural transformations precise. Adjunctions can be expressed as representability varying with a parameter. Riehl, §§2.1–2.3, develops these viewpoints before their applications to limits and more elaborate constructions.
