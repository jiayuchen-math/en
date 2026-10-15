---
{"id":"equivalence-of-categories","title":"Equivalence of Categories","chinese":"范畴等价","aliases":[],"area":"category-theory","topic":"category-theory","level":"Graduate","summary":"Equivalent categories have the same objects up to isomorphism and the same morphism structure, without requiring literal inverse functors.","prerequisites":["category","functor","natural-transformation","natural-isomorphism"],"related":["full-functor","faithful-functor","adjunction","yoneda-lemma"],"references":[{"id":"riehl-equivalence","label":"Emily Riehl — Category Theory in Context, author second-edition draft","url":"https://emilyriehl.github.io/files/context.pdf","locator":"§1.5, Definition 1.5.4, Definition 1.5.7 and Theorem 1.5.9","checked":"2026-10-15","note":"Quasi-inverses and the full, faithful, essentially-surjective criterion; explicit duplicate-object example below is original."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Two categories may express the same mathematics while using different names or multiple interchangeable copies of their objects. Equivalence is the relation that ignores these presentation choices but retains the morphisms and their compositions. It is weaker than an isomorphism of categories and stronger than merely having the same isomorphism classes of objects.

This distinction matters when replacing a category by convenient representatives. Choosing one vector space for each finite dimension changes the objects available literally, but not the essential linear algebra.

## Prerequisites

Know functors, natural transformations, isomorphisms, and natural isomorphisms. A natural isomorphism requires invertible components and compatibility with every arrow. A collection of unrelated objectwise isomorphisms is not sufficient.

## Definition and conventions

A functor $F:\mathcal C\to\mathcal D$ is an equivalence if there is a functor $G:\mathcal D\to\mathcal C$ and natural isomorphisms
$$
GF\cong1_{\mathcal C},\qquad FG\cong1_{\mathcal D}.
$$
The functor $G$ is a quasi-inverse. The composites need not equal the identity functors. An isomorphism of categories requires a strict inverse with both equalities holding literally.

A functor is full when each induced hom-set map is surjective and faithful when it is injective. It is essentially surjective when every target object is isomorphic to an image object. With the usual appropriate choice assumptions for representatives, a functor is an equivalence exactly when it is full, faithful and essentially surjective. For arbitrary large categories one must manage the relevant size and choice issues explicitly.

## Intuition

Full faithfulness preserves every way of mapping between image objects, without losing or identifying arrows. Essential surjectivity says that these image objects cover the target up to the category's own notion of sameness. Together they preserve structure while permitting redundant copies of objects to disappear.

## Examples and non-examples

Let $\mathcal D$ have two objects $a,b$ and exactly one morphism for each ordered pair of objects. Both composites between $a$ and $b$ are identities because each endomorphism set is a singleton. Thus $a$ and $b$ are isomorphic.

The inclusion of the full one-object subcategory on $a$ into $\mathcal D$ is full, faithful and essentially surjective. A quasi-inverse sends both objects to $a$. The composite on $\mathcal D$ is not its identity on objects, but the unique component arrows define a natural isomorphism. The categories cannot be isomorphic because one has one object and the other has two.

Finite-dimensional $k$-vector spaces are equivalent to the matrix category whose objects are nonnegative integers and whose arrows $n\to m$ are $m$ by $n$ matrices. The functor sends $n$ to $k^n$. Every finite-dimensional space is isomorphic to one of these, although it is not literally one of them with a specified basis.

For a non-example, two one-object categories can have the same single isomorphism class of objects but different endomorphism groups. A functor from the trivial group category to a nontrivial group category is not full, so object classification alone does not produce an equivalence.

## Important properties

Equivalences preserve and reflect isomorphisms. Full faithfulness lifts the inverse of an image morphism to an actual inverse. They also preserve universal constructions, including limits and colimits that exist: universal factorization can be transferred using the hom-set bijections and a quasi-inverse.

In the full-faithful-essentially-surjective criterion, choose for each $d$ an object $c_d$ and isomorphism $F(c_d)\cong d$. Full faithfulness lifts arrows between these chosen images uniquely, defining $G$ and proving its functor laws. This explains exactly where choices enter the construction.

## Connections and further reading

A skeleton keeps one representative of each isomorphism class when the required choices are available. An adjoint equivalence equips an equivalence with coherent unit and counit data. Riehl, §1.5, develops the recognition criterion and examples; higher-categorical equivalences require the corresponding higher notion of coherence.
