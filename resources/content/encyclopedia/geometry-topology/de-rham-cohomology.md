---
{"id":"de-rham-cohomology","title":"de Rham Cohomology","chinese":"de Rham 上同调","aliases":[],"area":"geometry-topology","topic":"differential-geometry","level":"Graduate","summary":"de Rham cohomology measures the failure of closed differential forms to have global primitives.","prerequisites":["differential-form","exterior-derivative"],"related":["singular-cohomology","poincare-duality"],"references":[{"id":"nicolaescu-manifolds","label":"Liviu I. Nicolaescu — Lectures on the Geometry of Manifolds","url":"https://academicweb.nd.edu/~lnicolae/Lectures.pdf","locator":"§7.1.1, Poincaré lemma; §7.1.3, Very little homological algebra, Example 7.1.9 (The DeRham complex); §7.1.4, Functorial properties; §7.1.5, Some simple examples","checked":"2026-10-14","note":"Inspected definitions; differences of conventions are stated in the article."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

de Rham cohomology measures the failure of closed differential forms to have global primitives. It turns a local calculus question into a topological invariant. Local solvability can hold everywhere while no single primitive works across the entire manifold; periods around loops provide the most accessible example of the obstruction.

## Prerequisites

Use smooth differential forms, the exterior derivative, and quotient vector spaces. Understand the difference between a local primitive on each coordinate neighborhood and one globally defined form. Integration and pullback connect the construction with cycles and maps.

## Definition and conventions

For a smooth Hausdorff, second countable manifold $M$, use real-valued forms and define
$$
H^k_{\mathrm{dR}}(M)=
\frac{\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))}
{\operatorname{im}(d:\Omega^{k-1}(M)\to\Omega^k(M))}.
$$
The identity $d^2=0$ ensures that the denominator lies inside the numerator. We set $\Omega^{-1}=0$. The convention is ordinary cohomology, without a compact-support requirement.

The standard discussion here concerns manifolds without boundary. Smooth manifolds with boundary also have a de Rham theorem, but relative cohomology and boundary conditions are separate constructions. Integral torsion is not retained by real differential forms.

## Intuition

A closed form satisfies a consistency condition for being a derivative. An exact form actually is such a derivative globally. The quotient forgets changes caused by global derivatives and keeps the remaining obstruction. Poincaré's lemma says positive-degree obstructions disappear on sufficiently simple coordinate domains, but topology can obstruct gluing the local primitives.

## Examples and non-examples

On $\mathbb R^2\setminus\{0\}$, consider
$$
\alpha=\frac{-y\,dx+x\,dy}{x^2+y^2}.
$$
Direct differentiation gives $d\alpha=0$. On the unit circle, parametrized by $(\cos t,\sin t)$, the pullback is $dt$ and its integral is $2\pi$. An exact form integrates to zero around a closed loop, so $\alpha$ is not exact.

The same expression on a simply connected angular sector equals the derivative of a single angle function. Removing the origin changes global solvability, even though the derivative calculation is local. In degree zero, closed functions are locally constant; on a connected manifold this gives $H^0_{\mathrm{dR}}\cong\mathbb R$.

## Important properties

The wedge product descends to cohomology because replacing a closed representative by an exact correction changes its product with another closed form by an exact form. It gives a graded-commutative algebra.

Pullback induces maps in the reverse direction, and smoothly homotopic maps induce the same cohomology map. Integration identifies de Rham cohomology with singular cohomology with real coefficients. The proof combines the local Poincaré lemma with a gluing argument; it does not assert that every closed form is globally exact.

## Connections and further reading

For compact oriented manifolds without boundary, integration of products supplies the de Rham version of Poincaré duality. With noncompact manifolds, compactly supported cohomology enters the appropriate pairing. See [Nicolaescu, §7.1](https://academicweb.nd.edu/~lnicolae/Lectures.pdf) for the inspected local lemma, functoriality, and examples.

