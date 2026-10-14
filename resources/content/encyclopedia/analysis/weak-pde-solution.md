---
{
  "id": "weak-pde-solution",
  "title": "Weak Solution of a PDE",
  "chinese": "弱解",
  "aliases": [],
  "area": "analysis",
  "topic": "differential-equations",
  "level": "Graduate",
  "summary": "A weak PDE solution satisfies a specified integral identity in an explicitly chosen function space.",
  "prerequisites": [
    "sobolev-space",
    "hilbert-space",
    "sobolev-trace"
  ],
  "related": [
    "analysis-distribution",
    "weak-derivative"
  ],
  "references": [
    {
      "id": "p-analysis-notes",
      "label": "John K. Hunter — Notes on Partial Differential Equations",
      "url": "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf",
      "locator": "§§4.1–4.5 and §4.7, Definition 4.1, Theorem 4.20",
      "checked": "2026-10-14",
      "note": "Inspected definitions and scoped theorem statements; original formulation, examples, and proof explanations."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A weak solution satisfies a differential equation through an integral identity, allowing fewer classical derivatives than a pointwise formulation. “Weak” describes the formulation and admissible regularity; it does not mean that the equation is approximately satisfied.

There is no single weak-solution definition for every PDE. The equation, testing class, function space, and boundary or initial conditions must all be specified. This article uses the real Dirichlet Poisson problem as a precise model.

## Prerequisites

Know weak derivatives, the Sobolev space $H^1$, Hilbert-space duality, and integration by parts. Define $H^1_0(\Omega)$ as the closure of $C_c^\infty(\Omega)$ in $H^1$. Its continuous dual is denoted $H^{-1}(\Omega)$ here.

## Definition and conventions

Let $\Omega\subseteq\mathbb R^n$ be a bounded open set and $f\in H^{-1}(\Omega)$. A weak solution of
$$
-\Delta u=f,\qquad u|_{\partial\Omega}=0
$$
is $u\in H^1_0(\Omega)$ such that
$$
\int_\Omega\nabla u\cdot\nabla v\,dx=\langle f,v\rangle
\quad\text{for every }v\in H^1_0(\Omega).
$$
For $f\in L^2(\Omega)$ the right side is $\int fv$. The boundary condition is encoded by the space; on a Lipschitz domain this agrees with zero trace. An arbitrary distributional solution need not belong to this energy space or satisfy this boundary condition.

## Intuition

Testing asks whether the equation balances against every admissible probe. Integration by parts moves one derivative off the unknown, so only first derivatives need square-integrable control. The formulation matches the quadratic energy of the problem and behaves well under energy-norm limits.

## Examples and non-examples

On $(0,1)$ with $f=2$, take $u(x)=x(1-x)$. It vanishes at both endpoints, and
$$
\int_0^1u'v'\,dx=\int_0^1(1-2x)v'\,dx=2\int_0^1v\,dx
$$
first for smooth compactly supported $v$, then for every $v\in H^1_0$ by density.

The constant function one satisfies $-\Delta u=0$ distributionally but fails the homogeneous Dirichlet condition, so it is not a solution of this boundary problem. On $(-1,1)$, $|x|$ has zero classical second derivative away from zero, yet $-u''=-2\delta_0$ distributionally. Ignoring one point would incorrectly make it a solution with zero forcing.

## Important properties

The bilinear form $a(u,v)=\int\nabla u\cdot\nabla v$ is bounded and coercive on $H^1_0$ using Poincaré's inequality for bounded domains. Lax–Milgram therefore gives existence and uniqueness for every $f\in H^{-1}$.

Uniqueness has a direct energy proof: subtract two solutions, test the resulting identity with their difference, and obtain zero gradient norm. Poincaré's inequality then forces the difference itself to vanish.

Regularity requires additional information about the domain, coefficients, and forcing. Existence of an energy solution alone does not make the solution twice continuously differentiable.

## Connections and further reading

Variational minimization of $\tfrac12\int|\nabla u|^2-\langle f,u\rangle$ produces the same identity and motivates finite element approximation. Nonlinear conservation laws may require entropy conditions beyond a distributional equation. [Hunter, §§4.1–4.5 and 4.7](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) fixes the model formulation and existence hypotheses.

