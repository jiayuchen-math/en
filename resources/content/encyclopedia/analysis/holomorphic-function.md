---
{
  "id": "holomorphic-function",
  "title": "Holomorphic Function",
  "chinese": "全纯函数",
  "aliases": [],
  "area": "analysis",
  "topic": "complex-analysis",
  "level": "Undergraduate",
  "summary": "A holomorphic function is complex differentiable throughout an open subset of the complex plane.",
  "prerequisites": [
    "continuous-function",
    "complex-derivative"
  ],
  "related": [
    "cauchy-integral-formula",
    "complex-residue",
    "entire-function"
  ],
  "references": [
    {
      "id": "c-analysis-notes",
      "label": "Michael Taylor — Introduction to Complex Analysis",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf",
      "locator": "§§1–2, §5 Cauchy integral formula, §8 Goursat's theorem",
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

Holomorphic functions are the central objects of one-variable complex analysis. Their defining derivative uses complex increments approaching zero from every direction. This requirement is rigid: differentiability on an open region forces local power-series expansions and derivatives of every order.

The resulting theory links differential equations, contour integrals, and approximation. A small amount of local derivative information controls much more of the function than it does in real-variable calculus.

## Prerequisites

Know complex arithmetic, limits, and real partial derivatives. Write $z=x+iy$ and a function as $f=u+iv$. Path integrals and power series are needed for the main consequences, though the definition itself uses only a limit.

## Definition and conventions

Let $\Omega\subseteq\mathbb C$ be open. A map $f:\Omega\to\mathbb C$ is holomorphic if, for every $a\in\Omega$, the finite complex limit
$$
f'(a)=\lim_{h\to0,\ h\in\mathbb C\setminus\{0\}}
\frac{f(a+h)-f(a)}h
$$
exists. Being differentiable at one isolated point does not imply holomorphicity near it. In one complex variable, holomorphicity is equivalent to local representation by a convergent power series. This article uses “analytic” in that local power-series sense.

Taylor initially develops the subject with continuously differentiable components; his later Goursat discussion removes that extra assumption. The definition here does not require derivative continuity separately.

## Intuition

A complex derivative is one complex multiplier describing the same local change in every direction. Multiplication by a nonzero complex number rotates and scales the plane. General real linear maps can stretch different directions differently; most therefore cannot be complex derivatives.

## Examples and non-examples

For $f(z)=z^2$,
$$
\frac{(a+h)^2-a^2}{h}=2a+h\longrightarrow2a,
$$
so $f$ is holomorphic everywhere. The function $1/z$ is holomorphic on $\mathbb C\setminus\{0\}$.

For complex conjugation at any point, the difference quotient is $\overline h/h$. Real increments give $1$, while purely imaginary increments give $-1$. Thus conjugation is smooth as a real map but nowhere complex differentiable. The function $|z|^2$ is complex differentiable at zero, where its quotient has magnitude $|h|$, but is not holomorphic on any neighborhood of zero.

## Important properties

For $C^1$ real components, the Cauchy–Riemann equations $u_x=v_y$ and $u_y=-v_x$ characterize holomorphicity. Without regularity hypotheses, merely checking formal partial-derivative equations is insufficient.

If $f$ is holomorphic near a closed disk and $a$ lies inside it, Cauchy's formula expresses $f(a)$ as a boundary integral. Expanding its kernel geometrically gives the local power series and hence infinite differentiability. The identity theorem then says that two holomorphic functions on a connected domain agreeing on a set with an interior accumulation point agree everywhere. Connectedness and the location of the accumulation point matter.

## Connections and further reading

Nonvanishing derivatives give local conformal maps. Isolated singularities lead to Laurent series and residues; holomorphicity on the whole plane defines entire functions. [Taylor, §§1–2, 5, and 8](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf) supplies the derivative, integral, and regularity viewpoints.

