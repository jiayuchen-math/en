---
{
  "id": "yoneda-lemma",
  "title": "Yoneda Lemma",
  "chinese": "米田引理",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Graduate",
  "summary": "The Yoneda lemma identifies transformations from a representable presheaf with one element of the target presheaf.",
  "prerequisites": [
    "natural-transformation",
    "representable-functor",
    "opposite-category"
  ],
  "related": [
    "functor-category",
    "universal-property"
  ],
  "references": [
    {
      "id": "yoneda",
      "label": "Tom Leinster — Basic Category Theory (author arXiv edition)",
      "url": "https://arxiv.org/pdf/1612.09375",
      "locator": "§4.2, Theorem 4.2.1; §4.3, Corollary 4.3.7",
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

The Yoneda lemma says that a natural family of operations defined on all maps into one object is determined by its value on that object’s identity map. It makes precise the idea of understanding an object through the ways other objects map to it. The statement is abstract, but its proof is a direct calculation with naturality.

## Prerequisites

Know locally small categories and contravariant set-valued functors. Such a functor $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ is a presheaf. For a small $\mathcal C$, its presheaves form an ordinary locally small functor category. Broader size settings require a fixed universe or explicit control of the transformation collections.

## Definition and conventions

For an object $A$ of a small category $\mathcal C$ and a presheaf $P$, write $h_A=\operatorname{Hom}_{\mathcal C}(-,A)$. Yoneda gives a bijection, natural in $A$ and $P$,
$$
\operatorname{Nat}(h_A,P)\cong P(A),
\qquad
\eta\longmapsto\eta_A(1_A).
$$
This is the contravariant formulation. A dual formulation applies to covariant functors using maps out of $A$. Keeping these variances explicit avoids reversing the formula by accident.

## Intuition

The identity $1_A$ is a universal input. Every map $f:X\to A$ is obtained from it by precomposition. If the operation respects all precompositions, its value at $f$ is forced by its value at the identity. Thus a huge family can be encoded by a single element.

## Examples and non-examples

Let $\mathcal C$ be the ordered category $\{0<1<2\}$, with one arrow precisely when the order permits it. Then $h_1$ takes singleton values at zero and one, and the empty value at two. Take $P$ to be the constant two-element presheaf with every restriction map the identity.

A natural transformation $h_1\to P$ must choose the same value at zero and one because of the arrow $0\to1$. Its component at two is the unique empty function. There are exactly two transformations, corresponding to $P(1)$.

Choosing zero at object zero and one at object one gives correctly typed component functions, but violates naturality. It is a non-example of a transformation, not an extra solution missed by the lemma.

## Important properties

Given $u\in P(A)$, define $\eta_X(f)=P(f)(u)$. Contravariant functoriality proves naturality. Conversely, naturality at $f:X\to A$ forces exactly that formula from $\eta_A(1_A)$; the two constructions are inverse.

Taking $P=h_B$ shows that natural transformations $h_A\to h_B$ correspond to arrows $A\to B$. Hence the Yoneda embedding is fully faithful. A natural isomorphism of these representable functors forces $A$ and $B$ to be isomorphic, not necessarily equal.

## Connections and further reading

Representability is the existence of a universal element whose induced transformation is invertible. Limits, moduli problems, and many universal constructions can be studied through this language. See [Leinster, Theorem 4.2.1 and Corollary 4.3.7](https://arxiv.org/pdf/1612.09375) and [Li, “可表函子,” theorem labelled prop:Yoneda-lemma](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter2.tex).

