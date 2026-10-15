---
{"id":"sheaf","title":"Sheaf","chinese":"层","aliases":[],"area":"algebra","topic":"algebraic-geometry","level":"Graduate","summary":"A sheaf assigns data to open sets with restriction maps so that compatible local sections glue uniquely.","prerequisites":["topological-space"],"related":["scheme","algebraic-prime-spectrum","module-ext-group"],"references":[{"id":"stacks-sheaves","label":"The Stacks Project — Sheaves","url":"https://stacks.math.columbia.edu/tag/006S","locator":"Section 6.7, Definition 6.7.1, Remark 6.7.2, Example 6.7.3 and Definition 6.7.4","checked":"2026-10-15","note":"Sheaf axiom, empty open set, continuous functions and constant sheaves."},{"id":"stacks-sheaf-points","label":"The Stacks Project — Exactness and points","url":"https://stacks.math.columbia.edu/tag/007S","locator":"Section 6.16, Lemma 6.16.1 and Definition 6.16.2","checked":"2026-10-15","note":"Isomorphisms detected on stalks and locally defined surjectivity."},{"id":"li-sheaves","label":"Wen-Wei Li — Introduction to Modular Forms","url":"https://www.wwli.asia/downloads/books/Modulform.pdf","locator":"Appendix B.1 层与局部系统, Definition B.1.1, Remark B.1.2 and the following stalk and ring-sheaf discussion, printed pp.341–342 (PDF pp.347–348)","checked":"2026-10-15","note":"Presheaves, sheaves, restriction maps, stalks and algebra-valued variants; Chinese usage of 层."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A sheaf describes mathematical data that can be specified locally and reconstructed uniquely when the local specifications agree. Continuous functions are the basic model: functions on overlapping open sets combine into one function precisely when their values match on the overlap. Sheaves extend this organization to algebraic data whose sections need not be ordinary functions with a single fixed codomain.

## Prerequisites

Know topological spaces, open covers, and restriction of functions. The initial definition uses sets; groups, rings, and modules can be added afterward. A stalk uses germs, meaning that two sections are identified if they agree on some sufficiently small neighborhood of a chosen point.

## Definition and conventions

A presheaf $\mathcal F$ on a topological space $X$ assigns a set $\mathcal F(U)$ to each open $U$ and a restriction map $\rho^U_V:\mathcal F(U)\to\mathcal F(V)$ whenever $V\subseteq U$. Restrictions satisfy $\rho^U_U=\operatorname{id}$ and $\rho^V_W\rho^U_V=\rho^U_W$. Elements of $\mathcal F(U)$ are sections over $U$.

It is a sheaf if, for every open cover $U=\bigcup_iU_i$, sections $s_i\in\mathcal F(U_i)$ satisfying
$$
s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}
$$
come from a unique $s\in\mathcal F(U)$ with $s|_{U_i}=s_i$. The empty cover is included; it forces $\mathcal F(\varnothing)$ to be a singleton. A sheaf of abelian groups has group-valued sections and homomorphic restrictions, with the same gluing condition on underlying sets. Ring and module sheaves are defined similarly.

## Intuition

The axiom has two parts. Uniqueness says sections are determined locally. Existence says compatible local data are sufficient. A presheaf can satisfy one part and fail the other. In particular, a global restriction such as boundedness may obstruct gluing even when the data are genuine functions and local agreement is unambiguous.

## Examples and non-examples

For any topological space $X$, let $\mathcal C(U)$ be the continuous real-valued functions on $U$, with ordinary restrictions. Compatible functions define a function point by point. Its continuity follows because the inverse image of an open set is the union of its open inverse images on the covering sets. This proves both existence and, by pointwise equality, uniqueness.

Now let $\mathcal B(U)$ consist only of bounded continuous real-valued functions. This is a presheaf, but generally not a sheaf. On $X=\mathbb R$, cover by $U_n=(-n,n)$ for positive integers $n$. Each $f_n(x)=x$ is bounded on $U_n$, and the functions agree on overlaps. Their only possible glued function is $f(x)=x$, which is unbounded on $\mathbb R$. The failure is existence, despite uniqueness holding.

For a set $A$, the constant sheaf $\underline A$ assigns locally constant maps $U\to A$. It does not require every section on a disconnected open set to have one global value. On two disjoint nonempty opens, independent constant values glue. By contrast, the presheaf assigning $A$ to every nonempty open with identity restrictions, and a singleton to the empty open, fails gluing on a two-point discrete space when $A$ has at least two elements.

## Important properties

The stalk $\mathcal F_x$ consists of germs of sections near $x$, or equivalently the direct limit over open neighborhoods of $x$. Equality of germs is stronger than equality of point values: two continuous functions can agree at $x$ without agreeing on any neighborhood.

A morphism $\varphi:\mathcal F\to\mathcal G$ is a family of maps on sections commuting with restrictions. For sheaves of sets on the same topological space, it is an isomorphism exactly when every stalk map $\varphi_x$ is bijective. Proof sketch: stalk surjectivity supplies local lifts of any target section. Stalk injectivity makes those lifts agree after shrinking around each point, hence on overlaps by uniqueness. The sheaf axiom glues them into a unique inverse image. Merely having abstractly isomorphic stalk sets, without a compatible morphism, is not this criterion.

## Connections and further reading

A scheme carries a sheaf of rings recording regular functions, while sheaf cohomology measures failures of global exactness. See [Stacks, Section 6.7](https://stacks.math.columbia.edu/tag/006S) for gluing and [Li, Appendix B.1](https://www.wwli.asia/downloads/books/Modulform.pdf) for stalks and algebra-valued sheaves.
