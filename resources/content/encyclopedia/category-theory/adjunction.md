---
{
  "id": "adjunction",
  "title": "Adjunction",
  "chinese": "伴随对",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Graduate",
  "summary": "An adjunction identifies maps out of one functor’s value with maps into another’s value, naturally in both variables.",
  "prerequisites": [
    "functor",
    "natural-transformation",
    "universal-property"
  ],
  "related": [
    "adjunction-unit",
    "adjunction-counit",
    "categorical-limit"
  ],
  "references": [
    {
      "id": "adjoint",
      "label": "Emily Riehl — Category Theory in Context (current second-edition draft)",
      "url": "https://emilyriehl.github.io/files/context.pdf",
      "locator": "§4.1 Adjoint Functors, Definition 4.1.1; §4.2, Lemmas 4.2.2–4.2.3 and Definition 4.2.5; §4.5 Adjunctions, Limits, and Colimits",
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

An adjunction pairs two functors through a universal correspondence of maps. Free constructions and forgetful constructions are familiar examples, but adjunctions also appear in order theory and topology. The correspondence controls how one construction responds to the other without asserting that the constructions undo each other.

## Prerequisites

Understand locally small categories, functors, natural transformations, and hom-sets. A universal property provides a unique extension or factorization for every suitable map. Naturality requires these extensions to remain compatible when either the input or the output changes.

## Definition and conventions

Let $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$. An adjunction $F\dashv G$ consists of bijections
$$
\operatorname{Hom}_{\mathcal D}(F(X),Y)
\cong
\operatorname{Hom}_{\mathcal C}(X,G(Y))
$$
natural in $X$ and $Y$. The functor $F$ is the left adjoint and $G$ the right adjoint. A collection of unrelated bijections with the right cardinalities is insufficient.

Equivalently, the data are natural transformations $\eta:1_{\mathcal C}\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_{\mathcal D}$ satisfying $\varepsilon_{F(X)}F(\eta_X)=1_{F(X)}$ and $G(\varepsilon_Y)\eta_{G(Y)}=1_{G(Y)}$.

## Intuition

A left adjoint builds the most flexible object allowed by some input data. Maps from that object are determined by how they handle the original data. The right adjoint exposes precisely the data needed to specify those maps.

## Examples and non-examples

Fix a field $k$. For a set $S$, let $F(S)$ be the vector space of finite formal linear combinations of symbols $e_s$, with $s\in S$. Let $U$ send a vector space to its underlying set. A function $a:S\to U(V)$ extends uniquely to a linear map by
$$
\sum_s c_s e_s\longmapsto\sum_s c_s a(s).
$$
Restriction to the basis is the inverse correspondence. Precomposing a function of sets or postcomposing a linear map commutes with this extension, so the bijection is natural and $F\dashv U$.

These functors are not inverse equivalences. A free vector space on the underlying set of $V$ introduces a symbol for every vector, including zero; the counit evaluates those symbols and can have a large kernel.

## Important properties

The unit sends $s$ to $e_s$; the counit evaluates formal sums of vectors in $V$. Their triangle identities follow by evaluating a basis element, then extending linearly.

Right adjoints preserve limits, and left adjoints preserve colimits, whenever those constructions exist. For the first assertion, translate maps into the proposed image of a limit using the adjunction, apply the original limit property, and translate back. Naturality supplies compatibility with the cone legs.

## Connections and further reading

Equivalences can be organized as adjunctions with invertible unit and counit, but general adjunctions need neither invertibility. Representability packages each individual universal map; adjunctions organize them functorially. See [Riehl, §4.1–§4.2 and §4.5](https://emilyriehl.github.io/files/context.pdf) and [Li, “伴随函子,” definitions def:adjunction-pair and def:adjunction-unit-counit](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).

