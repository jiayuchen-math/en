---
{
  "id": "continuous-function",
  "title": "Continuous Function",
  "chinese": "连续函数",
  "aliases": [],
  "area": "analysis",
  "topic": "real-analysis",
  "level": "Undergraduate",
  "summary": "Continuity expresses local control of output error by sufficiently small input error.",
  "prerequisites": [
    "real-sequence-limit"
  ],
  "related": [
    "uniform-continuity",
    "real-derivative",
    "uniform-convergence"
  ],
  "references": [
    {
      "id": "taylor-analysis-one-variable",
      "label": "Michael Taylor — Introduction to Analysis in One Variable",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf",
      "locator": "§3.1, equations (3.1.1)–(3.1.4), Proposition 3.1.1",
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

Continuity is the first precise bridge between pictures of functions and arguments about limits. It asserts that nearby inputs produce nearby outputs at a specified point, with a tolerance chosen to match the desired accuracy. The statement concerns the function together with its domain: the same formula can behave differently when the allowed inputs change.

Continuity neither requires a tangent nor bounds the speed of change. Its value is that it allows limits to pass through a function, turning information about an approximating sequence into information about its image.

## Prerequisites

Understand absolute value, open balls, and the order of quantifiers in an error estimate. A metric $d$ measures distance and satisfies the triangle inequality. On the real line it is $d(x,y)=|x-y|$. Sequence limits provide a useful alternative formulation.

## Definition and conventions

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces and $f:X\to Y$. Continuity at $a\in X$ means that for every $\varepsilon>0$ there exists $\delta>0$ such that, for every $x\in X$,
$$
d_X(x,a)<\delta\quad\Longrightarrow\quad d_Y(f(x),f(a))<\varepsilon.
$$
The map is continuous if this holds at every point. The choice of $\delta$ may depend on both $a$ and $\varepsilon$. At an endpoint of an interval, inputs approach only through that interval. A missing endpoint is not a point at which continuity is tested.

## Intuition

Think of $\varepsilon$ as an allowed output error. Continuity promises an input accuracy sufficient to meet it. It does not promise a universal calibration across the domain. A continuous graph may have a corner or extremely steep stretches; drawing without lifting a pencil is therefore only a limited mnemonic, especially for disconnected domains.

## Examples and non-examples

For $f(x)=x^2$, fix $a$ and require $|x-a|<1$. Then $|x+a|\le 2|a|+1$, so
$$
|x^2-a^2|\le(2|a|+1)|x-a|.
$$
Choosing $\delta=\min(1,\varepsilon/(2|a|+1))$ proves continuity at $a$.

The function equal to $1$ on $[0,\infty)$ and $0$ on $(-\infty,0)$ is discontinuous at zero: negative inputs arbitrarily close to zero have output distance $1$ from its value there. In contrast, $1/x$ is continuous on $(0,\infty)$ despite being unbounded near the excluded endpoint.

## Important properties

For maps between metric spaces, continuity is equivalent to preservation of convergent sequences. To prove the converse, if the error condition fails, choose $x_n$ within $1/n$ of $a$ whose output error stays above one fixed positive threshold. This contradicts sequence preservation.

Continuous images of compact sets are compact. Consequently a real continuous function on a nonempty compact domain attains its maximum and minimum. Connectedness supplies the intermediate value property; a general disconnected domain does not. Sums, products, and compositions preserve continuity wherever the operations are defined.

## Connections and further reading

Uniform continuity strengthens the quantifier order, while differentiability adds a linear approximation. Uniform convergence preserves continuity of a sequence of continuous functions. [Taylor, §3.1](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf) develops the metric formulation and its compactness consequences. Read these results with their domain hypotheses visible.

