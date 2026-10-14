---
{
  "id": "higher-category",
  "title": "Higher Categories and the Topos Bridge",
  "chinese": "高阶范畴",
  "aliases": [],
  "area": "category-theory",
  "topic": "category-theory",
  "level": "Research",
  "summary": "Higher categories retain coherent higher morphisms, providing the setting for space-valued presheaves and infinity-topoi.",
  "prerequisites": [
    "category",
    "functor",
    "categorical-limit",
    "adjunction"
  ],
  "related": [
    "groupoid",
    "yoneda-lemma"
  ],
  "references": [
    {
      "id": "higher",
      "label": "Jacob Lurie — Higher Topos Theory (author IAS PDF)",
      "url": "https://www.math.ias.edu/~lurie/papers/HTT.pdf",
      "locator": "§1.1.2, Definition 1.1.2.4 and Examples 1.1.2.5–1.1.2.6; §6.1, Definition 6.1.0.4",
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

Higher category theory keeps relations between morphisms as mathematical data, then keeps relations between those relations. This overview concentrates on $(\infty,1)$-categories: morphisms above dimension one are invertible in the appropriate homotopical sense. Other higher-category theories allow more noninvertible dimensions and require different definitions.

## Prerequisites

Ordinary categories, functors, limits, and adjunctions provide the first layer. A technical reading also requires simplicial sets, horns, and homotopy theory. To follow the topos connection, understand presheaves and localization; the formulation below explicitly names the additional accessibility and exactness requirements.

## Definition and conventions

In the quasi-category model, an $(\infty,1)$-category is a simplicial set $K$ such that every map $\Lambda_i^n\to K$, for $0<i<n$, extends to $\Delta^n\to K$. These are inner horn fillers. Fillers need not be unique. Lurie calls these objects infinity-categories; the terminology identifies this model of higher categories rather than every possible higher-category structure.

For a small infinity-category $\mathcal C$, let $\mathcal P(\mathcal C)=\operatorname{Fun}(\mathcal C^{\mathrm{op}},\mathcal S)$, where $\mathcal S$ is the infinity-category of spaces. An infinity-topos is an infinity-category obtained as an accessible left exact localization of such a presheaf category. Left exact means preserving finite limits. Accessibility is a technical size condition, not an optional adjective.

## Intuition

Ordinary uniqueness of factorization becomes a contractible space of coherent choices. Recording only homotopy classes of maps can hide the homotopies needed to assemble a construction. Space-valued presheaves retain those choices, while suitable localizations impose descent conditions without losing finite-limit compatibility.

## Examples and non-examples

The nerve of an ordinary category is a quasi-category. Its inner horn fillers are uniquely determined by composition. A Kan complex is another example and models a space, with all morphisms invertible homotopically.

Consider the inner horn $\Lambda_1^2$ itself as a simplicial set. It has composable edges $0\to1$ and $1\to2$, but no required two-simplex completing their composite. The identity map from this horn cannot extend across $\Delta^2$, so it is a concrete non-example of a quasi-category.

The presheaf infinity-category on the terminal category is $\mathcal S$ itself, an infinity-topos via the identity localization. Merely possessing higher morphisms does not make an arbitrary infinity-category a topos.

## Important properties

The ordinary nerve example explains the weakened uniqueness: retaining fillers while allowing them to vary admits coherent homotopy information. In a genuine infinity-category, mapping objects are spaces, and appropriate universal properties use these spaces rather than just sets of arrows.

Topos recognition is a separate structural theorem. The localization requirement controls how presheaf constructions interact with finite limits; not every reflective subcategory has the required exactness. This overview does not supply a proof of the higher Giraud theorem.

## Connections and further reading

The bridge from set-valued to space-valued presheaves connects categorical foundations with descent, homotopy theory, and derived geometry. Read [Lurie, Definition 1.1.2.4 and Examples 1.1.2.5–1.1.2.6; Definition 6.1.0.4](https://www.math.ias.edu/~lurie/papers/HTT.pdf). The Chinese name is independently evidenced in [Xu Fei’s university research introduction](https://math.stu.edu.cn/jsdw/zrjs/xf.htm).

