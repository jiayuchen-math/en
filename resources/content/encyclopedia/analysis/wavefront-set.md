---
{
  "id": "wavefront-set",
  "title": "Wavefront Set",
  "chinese": "波前集",
  "aliases": [],
  "area": "analysis",
  "topic": "harmonic-analysis",
  "level": "Research",
  "summary": "The smooth wavefront set records where a distribution fails to be smooth and in which cotangent directions.",
  "prerequisites": [
    "analysis-distribution",
    "fourier-transform"
  ],
  "related": [
    "sobolev-space",
    "littlewood-paley-decomposition"
  ],
  "references": [
    {
      "id": "w-analysis-notes",
      "label": "Mikko Salo — Applications of Microlocal Analysis to Inverse Problems",
      "url": "https://users.jyu.fi/~salomi/lecturenotes/MA_IP_lectures_v3.pdf",
      "locator": "§2.1, wave front set definition, Example 2.2, equation (2.1), Theorems 2.3–2.4",
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

The wavefront set refines the location of a singularity by recording its frequency direction. Ordinary singular support identifies where a distribution is not smooth. Microlocal analysis asks which directions of high-frequency behavior are responsible, separating defects that occur at the same spatial point.

This article treats the smooth wavefront set in Euclidean space. Analytic and Sobolev wavefront sets measure different regularity and should not be substituted without changing the definition.

## Prerequisites

Understand distributions, compactly supported cutoffs, and Fourier transforms. A frequency cone is invariant under multiplication by positive scalars. The pair $(x,\xi)$ has a position and a nonzero covector, giving a point of cotangent phase space with the zero section removed.

## Definition and conventions

For $u\in\mathcal D'(\mathbb R^n)$, declare $(x_0,\xi_0)\notin\operatorname{WF}(u)$ if a cutoff $\varphi\in C_c^\infty$ equal to one near $x_0$ and an open cone $\Gamma$ containing $\xi_0$ satisfy, for every nonnegative integer $N$,
$$
|\widehat{\varphi u}(\xi)|\le C_N(1+|\xi|)^{-N},
\qquad \xi\in\Gamma.
$$
Here $\widehat f(\xi)=\int e^{-ix\cdot\xi}f(x)\,dx$ on integrable functions, extended to distributions. The constants may depend on $N$, the cutoff, and the cone. All complementary pairs form $\operatorname{WF}(u)$.

## Intuition

First isolate a spatial neighborhood, then inspect large frequencies in one cone. Smooth localized functions have Fourier transforms decreasing faster than every inverse power. A failure of this decrease reveals a directional singularity. The covector is a Fourier-testing direction, not a literal arrow showing the motion of a physical wave.

## Examples and non-examples

For $\delta_0$ on $\mathbb R^n$, any cutoff equal to one near zero gives $\varphi\delta_0=\delta_0$ and Fourier transform one. There is no decay in any direction, so
$$
\operatorname{WF}(\delta_0)=\{(0,\xi):\xi\ne0\}.
$$
Away from zero, cutoffs can annihilate it.

For the distribution on $\mathbb R^2$ supported on the line $x_1=0$ with constant density along $x_2$, its wavefront directions are nonzero multiples of $dx_1$. Localization yields rapid decay in the tangential frequency when that frequency grows proportionally to the total frequency. Thus the singularity is directional, even though every point of the line lies in singular support. A smooth function has empty smooth wavefront set.

## Important properties

The wavefront set is closed and positively conic. Its projection onto position space is singular support. Appropriately localized pseudodifferential operators do not create new wavefront directions; elliptic ones preserve them. A parametrix explains the reverse inclusion in elliptic regularity: invert modulo a smoothing remainder, which has no wavefront set.

These statements concern a specified operator calculus and localization. They do not assert that every integral operator preserves singularity locations: Fourier integral operators can transport them through nontrivial canonical relations.

## Connections and further reading

Microlocal methods guide tomography and propagation of singularities by separating visible and invisible directions. They also give criteria for products and restrictions of distributions. [Salo, §2.1](https://users.jyu.fi/~salomi/lecturenotes/MA_IP_lectures_v3.pdf) provides the inspected definition and elliptic argument; its introductory operator discussion is explicitly scoped, not a complete calculus construction.

