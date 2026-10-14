---
{
  "id": "complex-residue",
  "title": "Residue at an Isolated Complex Singularity",
  "chinese": "留数",
  "aliases": [],
  "area": "analysis",
  "topic": "complex-analysis",
  "level": "Undergraduate",
  "summary": "The residue is the coefficient of the inverse first power in a local Laurent expansion.",
  "prerequisites": [
    "holomorphic-function",
    "laurent-series"
  ],
  "related": [
    "residue-theorem",
    "complex-pole"
  ],
  "references": [
    {
      "id": "c-analysis-notes",
      "label": "Michael Taylor — Introduction to Complex Analysis",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf",
      "locator": "§16, equations (16.1)–(16.5)",
      "checked": "2026-10-14",
      "note": "Definition and stated hypotheses inspected; original examples and explanatory synthesis."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

A residue extracts one coefficient from the behavior of a holomorphic function around an isolated singularity. That coefficient measures the function's contribution to a contour integral. It is a local quantity with a global use: contributions from finitely many enclosed singularities can be added to evaluate an integral.

A residue does not classify a singularity by itself. Different singularities can have the same residue, including zero, while having very different growth near the exceptional point.

## Prerequisites

Understand holomorphic functions, oriented contour integration, and Laurent series. A Laurent expansion permits negative as well as nonnegative powers, and represents a holomorphic function on an annulus. Positive orientation around a disk means counterclockwise traversal.

## Definition and conventions

Suppose $f$ is holomorphic on $0<|z-a|<r$. In its Laurent expansion
$$
f(z)=\sum_{k=-\infty}^{\infty}c_k(z-a)^k,
$$
the residue is $\operatorname{Res}(f,a)=c_{-1}$. Equivalently, for $0<\rho<r$,
$$
\operatorname{Res}(f,a)=\frac1{2\pi i}\int_{|z-a|=\rho}f(z)\,dz.
$$
The circle has positive orientation. The residue at infinity is a separate convention, defined through the coordinate $w=1/z$ with the differential's sign taken into account.

## Intuition

Integrating a Laurent term around a circle makes every power cancel except $(z-a)^{-1}$. That exceptional term records one complete winding around the missing point. The residue is therefore the coefficient visible to circular integration, rather than the whole singular behavior.

## Examples and non-examples

For
$$
f(z)=\frac{z+2}{(z-1)(z+1)},
$$
the simple-pole formula gives residue $3/2$ at $1$. At $-1$, canceling the factor $z+1$ gives $(z+2)/(z-1)$, whose value there is $-1/2$. The enclosed residues sum to one, so on the positively oriented circle $|z|=2$ the integral is $2\pi i(3/2-1/2)=2\pi i$.

The function $1/z^2$ has a pole of order two at zero but residue zero. The function $e^{1/z}$ has an essential singularity and residue one, since its expansion contains $1/z$ with that coefficient. Thus the residue need not be nonzero at a pole, and it need not require a pole at all.

## Important properties

At a simple pole, $\operatorname{Res}(f,a)=\lim_{z\to a}(z-a)f(z)$. More generally, if $f=g/h$ with holomorphic $g,h$, $h(a)=0$, and $h'(a)\ne0$, then the residue is $g(a)/h'(a)$.

For a bounded region with suitable piecewise smooth boundary, if $f$ is holomorphic near its closure except at finitely many isolated interior singularities and none lies on the boundary, the contour integral is $2\pi i$ times the sum of residues. The proof removes small disks around the exceptional points, applies Cauchy's theorem to the remaining region, and integrates the Laurent expansions on the small circles.

## Connections and further reading

Applying the residue theorem to $f'/f$ yields the argument principle, counting zeros against poles with multiplicity. Real improper integrals require additional estimates on any closing arcs; the residue calculation alone does not justify their disappearance. [Taylor, §16](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf) states the local coefficient convention and contour formula.

