---
{
  "id": "uniform-convergence",
  "title": "Uniform Convergence",
  "chinese": "一致收敛",
  "aliases": [],
  "area": "analysis",
  "topic": "real-analysis",
  "level": "Undergraduate",
  "summary": "Uniform convergence makes the approximation error small simultaneously at every point of a fixed domain.",
  "prerequisites": [
    "real-sequence-limit",
    "continuous-function"
  ],
  "related": [
    "pointwise-convergence"
  ],
  "references": [
    {
      "id": "t-analysis-notes",
      "label": "Michael Taylor — Introduction to Analysis in One Variable",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf",
      "locator": "§3.2, equations (3.2.1)–(3.2.7), Propositions 3.2.1–3.2.4",
      "checked": "2026-10-14",
      "note": "Inspected definition and theorem passages; exposition and calculations are original."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Uniform convergence is a mode of convergence for functions in which the largest approximation error tends to zero. It supplies the control needed to preserve continuity and to exchange certain limiting operations. A pointwise limit gives a correct answer at each fixed input, but the required stage of approximation may vary without bound across the domain.

The domain must be stated explicitly. A sequence can converge uniformly on every smaller closed interval and still fail to converge uniformly on the original interval.

## Prerequisites

Understand convergence of scalar sequences, suprema, and continuity. The supremum of a collection of errors is its least upper bound; it need not be attained. Completeness of the target is needed when uniform Cauchy estimates are used to construct a limit.

## Definition and conventions

For maps $f_n:X\to(Y,d)$ and $f:X\to Y$, uniform convergence means
$$
\sup_{x\in X}d(f_n(x),f(x))\longrightarrow0.
$$
Equivalently, for every $\varepsilon>0$, one index $N$ satisfies $d(f_n(x),f(x))<\varepsilon$ for every $n\ge N$ and every $x\in X$. Pointwise convergence allows $N$ to depend on $x$. Local uniform convergence usually means uniform convergence on each compact subset, under the convention used here.

## Intuition

Uniform convergence puts the whole graph inside an increasingly narrow error tube around the limiting graph. Pointwise convergence allows narrow spikes to move or shrink so that every fixed point eventually escapes them. Those spikes may continue to dominate the worst-case error.

## Examples and non-examples

On $[0,1]$, $f_n(x)=x/n$ has supremum error $1/n$ from zero, so it converges uniformly.

The sequence $g_n(x)=x^n$ tends pointwise to zero for $0\le x<1$ and to one at $x=1$. Every $g_n$ is continuous while its limit is discontinuous, proving that convergence is not uniform. Even on $[0,1)$, where the limit is constantly zero, $\sup_{x<1}x^n=1$. On $[0,r]$ for $r<1$, however, the error is $r^n\to0$.

## Important properties

A uniform limit of continuous maps is continuous. Fix an input point and approximate the limit by one continuous $f_N$. The triangle inequality splits the total output change into two approximation errors and one continuity error, each smaller than a third of the desired tolerance.

If the target is complete, a uniformly Cauchy sequence has a uniform limit. For Riemann integrable functions on $[a,b]$, uniform convergence preserves integrability and yields
$$
\left|\int_a^b(f_n-f)\right|\le(b-a)\sup|f_n-f|.
$$
Differentiation is more delicate. Uniform convergence alone does not justify differentiating a limit: $f_n(x)=\sin(nx)/n$ tends uniformly to zero while $f_n'(0)=1$. Uniform convergence of derivatives plus convergence at one base point provides an appropriate interval theorem.

## Connections and further reading

The Weierstrass M-test bounds the tails of a function series uniformly by tails of a convergent numerical series. Supremum norms turn uniform convergence into norm convergence for bounded functions. [Taylor, §3.2](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf) develops these definitions and preservation arguments.

