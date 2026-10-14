---
{"id":"differential-form","title":"Differential Form","chinese":"外微分形式","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"Differential forms are the natural objects integrated over oriented curves, surfaces, and higher-dimensional manifolds.","prerequisites":["smooth-manifold","cotangent-space"],"related":["exterior-derivative","stokes-theorem-manifolds"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§2.3, Tensor fields (exterior forms); §3.2.1, The exterior derivative; §3.4, Integration on manifolds","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Differential forms are the natural objects integrated over oriented curves, surfaces, and higher-dimensional manifolds. A form can accept tangent vectors at each point and return a number in a way that changes predictably under coordinates. Its alternating structure handles orientation and Jacobian determinants, allowing one notation to express several familiar integral theorems.

## Prerequisites

Use tangent and cotangent spaces, multilinear algebra, and determinants. A smooth vector bundle is a family of vector spaces that admits compatible local trivializations. The exterior power of the cotangent bundle packages alternating multilinear covectors into a bundle.

## Definition and conventions

On a smooth Hausdorff, second countable manifold $M$, a differential $k$-form is a smooth section of $\Lambda^kT^*M$. At $p$, it is an alternating $k$-linear function on $T_pM$. Zero-forms are smooth real functions. Forms of degree above $\dim M$ vanish.

The wedge product uses the determinant normalization, so $dx^1\wedge\cdots\wedge dx^k$ evaluates to $1$ on the corresponding ordered coordinate vectors. The exterior derivative $d:\Omega^k(M)\to\Omega^{k+1}(M)$ obeys the graded product rule and $d^2=0$. Boundaries are permitted for integration when explicitly stated.

## Intuition

Alternation means that interchanging two directions reverses the sign and repeating a direction gives zero. A two-form therefore measures an oriented infinitesimal area rather than the length of either input vector. The degree tells us the dimension of an object on which the form can be integrated.

## Examples and non-examples

On $\mathbb R^2$, let $\alpha=x\,dy$. Then $d\alpha=dx\wedge dy$. Along the positively oriented unit square, its integral is $1$: the right edge contributes $1$, and the other three edges contribute zero. Integrating $d\alpha$ over the square also gives $1$.

The metric tensor $dx\otimes dx+dy\otimes dy$ is not a two-form. It is symmetric and gives a positive value on two equal nonzero vectors, whereas a two-form must vanish on repeated inputs. A differential form and a metric are different tensor types, despite both using coordinate differentials.

## Important properties

A smooth map $F:M\to N$ pulls forms back by applying $dF$ to all their tangent inputs. Pullback preserves wedge products and commutes with exterior differentiation. No inverse map is required, unlike a naive attempt to transport vector fields along an arbitrary map.

Stokes' theorem states $\int_Md\beta=\int_{\partial M}\beta$ for an oriented compact smooth $k$-manifold with boundary and a smooth $(k-1)$-form. The boundary uses the outward-normal-first orientation. For noncompact manifolds, compact support provides a standard sufficient hypothesis. Partitions of unity reduce its proof to coordinate domains and the one-variable fundamental theorem of calculus.

## Connections and further reading

Closed forms and exact forms lead to de Rham cohomology. Nondegenerate closed two-forms lead to symplectic geometry. Read [Nicolaescu, §§2.3, 3.2.1, and 3.4](https://academicweb.nd.edu/~lnicolae/Lectures.pdf) for the inspected algebra, differential, and integration conventions.

