---
{
  "id": "natural-transformation",
  "title": "Natural Transformation",
  "chinese": "自然变换",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Undergraduate",
  "summary": "A natural transformation compares two functors by components commuting with every source morphism.",
  "prerequisites": [
    "functor"
  ],
  "related": [
    "natural-isomorphism",
    "functor-category",
    "yoneda-lemma"
  ],
  "references": [
    {
      "id": "riehl",
      "label": "Emily Riehl — Category Theory in Context (current second-edition draft)",
      "url": "https://emilyriehl.github.io/files/context.pdf",
      "locator": "§1.3 Functoriality, Definition 1.3.1; §1.4 Naturality, Definition 1.4.1",
      "checked": "2026-10-14",
      "note": "Formal definitions and structural claims; examples below are editorial constructions."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A natural transformation is a map between functors. Its components compare the outputs for individual objects, but those comparisons must also respect every map between the inputs. Naturality converts an informal assertion such as “this construction is compatible with change of input” into a testable equation.

## Prerequisites

Understand covariant functors and composition of arrows. The two functors must have a common source and a common target. A family of maps between their values has the right shape to be a transformation, but shape alone does not guarantee naturality.

## Definition and conventions

For $F,G:\mathcal C\to\mathcal D$, a natural transformation $\eta:F\Rightarrow G$ consists of arrows $\eta_X:F(X)\to G(X)$ for every object $X$ such that, for every $f:X\to Y$,
$$
G(f)\circ\eta_X=\eta_Y\circ F(f).
$$
The subscript $X$ names a component. The double arrow records a transformation between functors rather than a morphism between objects of $\mathcal C$. If every component is invertible, $\eta$ is a natural isomorphism. Componentwise invertibility without the naturality equation is insufficient.

## Intuition

There are two routes from $F(X)$ to $G(Y)$. One first compares the constructions at $X$ and then transports along $f$; the other first transports inside $F$ and then compares at $Y$. Naturality says the routes agree, so the comparison does not depend on which route a calculation takes.

## Examples and non-examples

On sets, let $F(A)=A\times A$ and let $G$ be the identity functor. First-coordinate projections $p_A(a,b)=a$ form a natural transformation. Indeed, for any $f:A\to B$, both $f\circ p_A$ and $p_B\circ(f\times f)$ send $(a,b)$ to $f(a)$.

For a non-example, use the category whose objects are sets of size two and whose morphisms are all functions between them. Choose one distinguished element $a_A$ in each object and define $\eta_A$ to be the constant map with that value. This is a family of endomorphisms of the identity functor. At a two-element set $A$, the swap map $s$ gives $s\eta_A$ constant at $s(a_A)$ but $\eta_As$ constant at $a_A$. The maps differ, so the family is not natural.

## Important properties

Natural transformations compose vertically by composing components. If $\eta:F\Rightarrow G$ and $\theta:G\Rightarrow H$, then $(\theta\eta)_X=\theta_X\eta_X$. Substituting the two naturality equations proves naturality of the composite.

If $\eta$ is natural and its components invertible, rearranging $G(f)\eta_X=\eta_YF(f)$ gives $F(f)\eta_X^{-1}=\eta_Y^{-1}G(f)$. Thus the inverse components are automatically natural. This is the proof that a componentwise isomorphism is an isomorphism in the functor category.

## Connections and further reading

Natural transformations are morphisms in functor categories and supply the unit and counit of adjunctions. Yoneda shows that some transformations are determined by just one element at one object. Read [Riehl, §1.4, Definition 1.4.1](https://emilyriehl.github.io/files/context.pdf) and [Li, the natural-transformation definition in “函子与自然变换”](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).

