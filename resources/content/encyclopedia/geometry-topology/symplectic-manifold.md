---
{"id":"symplectic-manifold","title":"Symplectic Manifold","chinese":"辛流形","aliases":[],"area":"geometry-topology","topic":"symplectic-geometry","level":"Graduate","summary":"A symplectic manifold carries a closed nondegenerate differential two-form.","prerequisites":["smooth-manifold","differential-form","exterior-derivative"],"related":["hamiltonian-vector-field","lagrangian-submanifold"],"references":[{"id":"cannas-symplectic","label":"Ana Cannas da Silva — Lectures on Symplectic Geometry","url":"https://people.math.ethz.ch/~acannas/Papers/lsg.pdf","locator":"§§1.1–1.4, Symplectic Forms; §§2.2–2.3, canonical cotangent form; Chapter 8, Darboux Theorem; §18.1, Hamiltonian and Symplectic Vector Fields","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A symplectic manifold carries a closed nondegenerate differential two-form. This structure is the geometric setting for Hamiltonian mechanics and for global rigidity phenomena that cannot be inferred from volume alone. It measures a skew pairing of tangent directions rather than their lengths, so a symplectic form does not by itself supply a distance.

## Prerequisites

Use smooth manifolds, alternating bilinear forms, differential forms, and exterior differentiation. Nondegeneracy is a pointwise linear-algebra condition, while closedness is a differential condition. Both matter, and neither should be silently inferred from the other.

## Definition and conventions

A symplectic manifold $(M,\omega)$ consists of a smooth Hausdorff, second countable manifold without boundary and $\omega\in\Omega^2(M)$ such that $d\omega=0$ and $v\mapsto\omega_p(v,\cdot)$ is an isomorphism $T_pM\to T_p^*M$ for every $p$. Its dimension is even, say $2n$.

We use $\omega_0=\sum_i dq_i\wedge dp_i$ in canonical coordinates and the Hamiltonian convention $\iota_{X_H}\omega=dH$. On a cotangent bundle, the tautological one-form is $\lambda=\sum_i p_i\,dq_i$ and the canonical symplectic form is $-d\lambda$. Boundary cases require explicit additional discussion.

## Intuition

Nondegeneracy pairs every nonzero direction with some direction on which the form detects it. Closedness makes these local pairings fit a differential conservation law. The resulting Hamiltonian fields preserve the form. Choosing a compatible almost complex structure can produce a metric, but that choice is additional data.

## Examples and non-examples

The standard form on $\mathbb R^{2n}$ is closed and nondegenerate. On $\mathbb R^2$, $\omega=f(x,y)\,dx\wedge dy$ is symplectic precisely when the smooth function $f$ never vanishes; closedness is automatic in dimension two.

In higher dimension it is not automatic. On $\mathbb R^4$, the nondegenerate form
$$
dx_1\wedge dy_1+e^{x_1}dx_2\wedge dy_2
$$
has exterior derivative $e^{x_1}dx_1\wedge dx_2\wedge dy_2\ne0$, so it is not symplectic. A zero two-form on a positive-dimensional manifold is closed but degenerate.

## Important properties

The form $\omega^n/n!$ gives an orientation and volume form. A nonempty, positive-dimensional compact symplectic manifold without boundary cannot have an exact symplectic form: if $\omega=d\lambda$ and $n\ge1$, then $\omega^n=d(\lambda\wedge\omega^{n-1})$, and Stokes' theorem contradicts the positive total symplectic volume. The dimension qualification matters: a point with the zero two-form is symplectic under the definition above and that form is exact.

Darboux's theorem gives local coordinates in which $\omega=\omega_0$. Its proof interpolates nearby forms and solves for a vector field whose flow compensates for the change. Consequently local symplectic geometry has no curvature invariant analogous to Riemannian curvature; global symplectic invariants remain highly nontrivial.

## Connections and further reading

Lagrangian submanifolds and Hamiltonian flows lead to Floer theory. Moment maps and reduction impose symmetry constraints before taking a quotient. See [Cannas da Silva, Chapters 1–2, 8, and 18](https://people.math.ethz.ch/~acannas/Papers/lsg.pdf) for the inspected form and sign conventions.

