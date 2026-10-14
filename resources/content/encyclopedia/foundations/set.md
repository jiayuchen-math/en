---
{
  "id": "set",
  "title": "Set",
  "chinese": "集合",
  "aliases": [],
  "area": "foundations",
  "topic": "set-theory",
  "level": "Undergraduate",
  "summary": "A set is an extensional object determined by its members, with legitimate constructions controlled by the background axioms.",
  "prerequisites": [],
  "related": [
    "subset",
    "power-set",
    "cartesian-product"
  ],
  "references": [
    {
      "id": "logic-proof-sets",
      "label": "Avigad, Hua, Lewis and van Doorn — Logic and Proof",
      "url": "https://leanprover-community.github.io/logic_and_proof/sets.html",
      "locator": "§11.1 Elementary Set Theory; §11.4 Cartesian Product and Power Set",
      "checked": "2026-10-14",
      "note": "Elementary membership, subsets and set constructions."
    },
    {
      "id": "li-zfc",
      "label": "李文威 — 代数学方法，第一卷（作者源码）",
      "url": "https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex",
      "locator": "第1章「ZFC 公理一览」",
      "checked": "2026-10-14",
      "note": "Extensionality, separation and the obstruction to unrestricted comprehension."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Sets provide a language for collecting mathematical objects and comparing collections. Their defining feature is extensionality: membership, rather than the order of a description or the number of times something is mentioned, determines identity. This makes sets useful for solution spaces, possible outcomes, and domains of functions. A set of solutions records which answers are allowed without recording how an algorithm found them.

## Prerequisites

No advanced course is required. Read $x\in A$ as “$x$ belongs to $A$,” and distinguish a mathematical object from a collection containing that object. Logical phrases such as “every” and “there exists” enter naturally when expressing membership conditions.

## Definition and conventions

In Zermelo–Fraenkel set theory, set and membership are primitive notions rather than definitions in terms of simpler objects. Extensionality asserts
$$
\forall A\,\forall B\;\bigl[\forall x\;(x\in A\leftrightarrow x\in B)\ \to A=B\bigr].
$$
Write $A\subseteq B$ when every member of $A$ belongs to $B$; equality is allowed. Write $A\subsetneq B$ when additionally $A\ne B$. The empty set $\emptyset$ has no members. The expression $\{x\in U:P(x)\}$ selects members of an already available set $U$ satisfying a specified formula. It does not license forming a set from every imaginable condition without an ambient set.

## Intuition

Think of membership as a yes-or-no test. A description can change while its answers remain identical. For instance, “integers strictly between one and four” and “the integers two and three” select the same objects. This explains why set equality is proved by checking membership in both directions. It also explains why a list with repeated entries may describe a perfectly ordinary set.

## Examples and non-examples

Let $A=\{2,3\}$ and $B=\{3,5\}$. Then $A\cap B=\{3\}$, $A\cup B=\{2,3,5\}$, and $A\setminus B=\{2\}$. The set $\{2,2,3\}$ is still $A$, whereas the sequences $(2,2,3)$ and $(2,3)$ differ.

Also $\emptyset\ne\{\emptyset\}$: the latter contains one member. A proposed “set of all sets” is a non-example in ZF. If it were a set $U$, separation would produce $R=\{x\in U:x\notin x\}$. Substituting $R$ gives $R\in R$ exactly when $R\notin R$, a contradiction.

## Important properties

To prove $A=B$, establish both $A\subseteq B$ and $B\subseteq A$. This is more informative than comparing names or presentations. The same method proves identities: $x\in A\cap B$ means both membership conditions hold, so reversing their order shows $A\cap B=B\cap A$. The empty set is a subset of every set because no member can violate the required implication.

## Connections and further reading

Functions and relations can be encoded using sets of ordered pairs. Power sets collect possible subcollections, while quotient sets collect equivalence classes. Read [Logic and Proof, §11.1 and §11.4](https://leanprover-community.github.io/logic_and_proof/sets.html) for elementary constructions, and [Li, “ZFC 公理一览”](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter1.tex) for their axiomatic setting.

