---
{"id":"riemann-surface","title":"Riemann Surface","chinese":"黎曼曲面","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"A Riemann surface is a connected complex manifold of complex dimension one, specified by holomorphic changes of local coordinates.","prerequisites":["smooth-manifold","holomorphic-function"],"related":["covering-space","orientable-surface-genus","complex-residue"],"references":[{"id":"teleman-riemann-surfaces","label":"Constantin Teleman — Riemann Surfaces","url":"https://math.berkeley.edu/~teleman/math/Riemann.pdf","locator":"Lecture 3, Definition 3.1, Proposition 3.2, Example 3.3, Theorems 3.5–3.6 and 3.10; Lecture 4, Theorem 4.3","checked":"2026-10-15","note":"Inspected the holomorphic atlas definition, sphere charts, compact maximum principle, local power-map form, and meromorphic maps to the sphere."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A Riemann surface is a space on which one-variable complex analysis makes sense in compatible local coordinates. It has one complex dimension and two real dimensions. Its defining structure controls which functions are holomorphic, rather than specifying lengths or angles through a particular Riemannian metric. The similar names “Riemann surface” and “Riemannian surface” therefore refer to different kinds of data.

## Prerequisites

Use topological and smooth surfaces, holomorphic functions, and the complex inverse function theorem. Charts translate local questions into questions on open subsets of $\mathbb C$. Understanding the complex derivative and the maximum modulus principle is especially useful for the global consequences below.

## Definition and conventions

Here a Riemann surface is a connected Hausdorff, second countable space $X$ with an atlas of homeomorphisms $z_\alpha:U_\alpha\to V_\alpha\subset\mathbb C$, where each $V_\alpha$ is open and all transition maps
$$
z_\beta\circ z_\alpha^{-1}:z_\alpha(U_\alpha\cap U_\beta)
\longrightarrow z_\beta(U_\alpha\cap U_\beta)
$$
are holomorphic. Transition inverses are holomorphic as well. Equivalent atlases define the same complex structure. Some authors allow disconnected surfaces; this entry explicitly requires connectedness.

No compactness is imposed. A boundary is excluded: neighborhoods are modeled on open complex sets, not on closed half-disks. A holomorphic function $f:X\to\mathbb C$ is one for which every $f\circ z_\alpha^{-1}$ is holomorphic. Maps between Riemann surfaces are tested using coordinates on both source and target.

## Intuition

Holomorphic coordinate changes ensure that “complex differentiable” has a consistent meaning across overlapping charts. A point need not carry a globally defined complex number as its coordinate. Indeed, a compact surface cannot be covered by a single complex chart, since its image would have to be both compact and a nonempty open subset of $\mathbb C$.

Complex charts also give a real orientation. For a holomorphic transition $w=h(z)$, its real Jacobian determinant is $|h'(z)|^2>0$, since the inverse transition makes $h'$ nonzero. Thus the orientation is compatible on overlaps.

## Examples and non-examples

Every connected open subset of $\mathbb C$ is a Riemann surface. The Riemann sphere adds a point $\infty$ to $\mathbb C$, using $z$ away from infinity and $w=1/z$ near infinity. On the overlap the transition is holomorphic with derivative $-1/z^2\ne0$.

The power map $f(z)=z^2$ is holomorphic and is a two-sheeted covering of $\mathbb C\setminus\{0\}$ by itself. At zero it is not a covering map: every neighborhood of zero contains a small pair $z,-z$ with the same image, so no neighborhood maps homeomorphically onto a neighborhood of zero. Zero is a branch point, while the source surface itself is nonsingular.

An arbitrary smooth chart change need not be holomorphic. The map $z\mapsto\overline z$ is a smooth real diffeomorphism but reverses orientation and fails the Cauchy–Riemann equations. A real surface atlas containing this transition is not, as given, a holomorphic atlas. This does not prevent the underlying surface from carrying some other complex atlas.

The closed unit disk is not a Riemann surface in this boundary-free convention. Its interior is one, and boundary versions require a separate definition.

## Important properties

Every holomorphic function $f:X\to\mathbb C$ on a compact connected Riemann surface is constant. **Proof sketch:** compactness gives a point where $|f|$ attains a maximum. In a complex chart the maximum principle makes $f$ locally constant. The maximum set is then open and closed, and connectedness finishes the argument. Both compactness and the complex-valued target matter: the identity of the sphere is a nonconstant holomorphic map to the sphere.

A nonconstant holomorphic map between connected Riemann surfaces has local coordinate expression $z\mapsto z^m$ for an integer $m\geq1$. To see the proof idea, factor its local power series as $z^m u(z)$ with $u(0)\ne0$, choose a local holomorphic $m$th root of $u$, and absorb it into a coordinate. The case $m=1$ is locally invertible; larger $m$ gives branching.

## Connections and further reading

Meromorphic functions can be viewed as holomorphic maps to the Riemann sphere, with poles mapping to infinity; the identically infinite map is excluded from the function convention. Coverings, genus, and complex analysis meet naturally here. Read [Teleman, Lectures 3–4](https://math.berkeley.edu/~teleman/math/Riemann.pdf) for the inspected atlas and local mapping theorems.
