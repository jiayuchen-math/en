---
{
  "id": "real-derivative",
  "title": "Derivative of a Real Function",
  "chinese": "导数",
  "aliases": [],
  "area": "analysis",
  "topic": "calculus",
  "level": "Undergraduate",
  "summary": "The derivative is the coefficient of a first-order local linear approximation to a real function.",
  "prerequisites": [
    "real-sequence-limit",
    "continuous-function"
  ],
  "related": [
    "real-function-differential",
    "fundamental-theorem-calculus",
    "weak-derivative"
  ],
  "references": [
    {
      "id": "taylor-analysis-one-variable",
      "label": "Michael Taylor — Introduction to Analysis in One Variable",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf",
      "locator": "§4.1, equations (4.1.1)–(4.1.3), Propositions 4.1.1–4.1.2",
      "checked": "2026-10-14",
      "note": "Definition, hypotheses, and basic properties; examples and exposition are original."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

The derivative measures a local rate of change through a limit of secant slopes. A finite derivative is more than a numerical slope: it gives a linear approximation whose relative error vanishes as the input increment shrinks. This interpretation explains why derivatives support both geometric reasoning and reliable small-change calculations.

A derivative is attached to a point and a domain. Differentiating a symbolic expression does not remove the need to check whether the relevant limit exists.

## Prerequisites

Know limits, continuity, and the distinction between an equality and an approximation. The notation $r(h)=o(|h|)$ means $r(h)/|h|\to0$ as $h\to0$ through nonzero values. Understanding a line as a linear function of its increment makes the definition more transparent.

## Definition and conventions

Suppose $f:I\to\mathbb R$, where $I$ is an open interval containing $a$. Its derivative at $a$ is
$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h},
$$
provided the limit exists as a finite real number. Equivalently,
$$
f(a+h)=f(a)+f'(a)h+o(|h|).
$$
One-sided derivatives use positive or negative increments only. An infinite slope is not a derivative in this convention. The differential is the linear map $h\mapsto f'(a)h$, rather than the derivative number itself.

## Intuition

Zooming near $(a,f(a))$ makes a differentiable graph increasingly resemble its tangent. The remainder criterion expresses this without relying on an image: after dividing the error by the input size, the error tends to zero. A corner has incompatible slopes from the two sides, so no single linear map describes it.

## Examples and non-examples

For $f(x)=x^3$,
$$
\frac{(a+h)^3-a^3}{h}=3a^2+3ah+h^2,
$$
hence $f'(a)=3a^2$. At $a=2$, the linear approximation is $8+12h$ and the exact error is $6h^2+h^3$. For $h=0.01$, the error is $0.000601$, explicitly smaller than the linear change.

The continuous function $|x|$ has difference quotient $1$ for positive $h$ and $-1$ for negative $h$ at zero. It has no derivative there. The converse failure is therefore concrete: continuity alone does not supply a tangent.

## Important properties

Differentiability implies continuity because both the linear increment and the remainder vanish. Product and chain rules follow by expanding increments and controlling their remainders; the composition rule multiplies local linear approximations.

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, the mean value theorem gives some $c\in(a,b)$ with $f(b)-f(a)=f'(c)(b-a)$. Its proof subtracts the secant line and applies the interior-extremum derivative condition. A derivative bounded in absolute value by $M$ therefore yields a Lipschitz estimate on an interval. Stationary points need not be extrema: $x^3$ has derivative zero at zero.

## Connections and further reading

The fundamental theorem of calculus connects derivatives with accumulation. Weak derivatives extend differentiation through integration against test functions, allowing certain corners. [Taylor, §4.1](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf) supplies the local expansion and the mean value argument. In several variables the corresponding object is a linear map, requiring more than separate coordinate derivatives.

