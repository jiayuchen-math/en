---
{
  "id": "uniform-continuity",
  "title": "Uniform Continuity",
  "chinese": "一致连续",
  "aliases": [],
  "area": "analysis",
  "topic": "real-analysis",
  "level": "Undergraduate",
  "summary": "Uniform continuity uses one input tolerance for every pair of points in a domain.",
  "prerequisites": [
    "continuous-function"
  ],
  "related": [
    "uniform-convergence"
  ],
  "references": [
    {
      "id": "t-analysis-notes",
      "label": "Michael Taylor — Introduction to Analysis in One Variable",
      "url": "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf",
      "locator": "§3.1, equations (3.1.10)–(3.1.12), Proposition 3.1.4",
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

Uniform continuity expresses a global form of error control. Ordinary continuity calibrates the input tolerance separately at each point; uniform continuity asks whether a single calibration works throughout the domain. This difference matters whenever points move toward a boundary or toward infinity while an approximation is refined.

The property belongs to a map equipped with domain and target metrics. Boundedness of its range, or smoothness of its formula, does not by itself settle the question.

## Prerequisites

Know continuity in metric spaces and the meaning of a Cauchy sequence. In a Cauchy sequence, sufficiently late terms are mutually close, even before a limit has been identified. Compactness is useful for deriving global information from local continuity.

## Definition and conventions

A map $f:(X,d_X)\to(Y,d_Y)$ is uniformly continuous when for every $\varepsilon>0$ there exists $\delta>0$ such that
$$
x,y\in X,\quad d_X(x,y)<\delta
\quad\Longrightarrow\quad d_Y(f(x),f(y))<\varepsilon.
$$
The same $\delta$ must work for all $x,y$. Equivalently, whenever $d_X(x_n,y_n)\to0$, one has $d_Y(f(x_n),f(y_n))\to0$. No boundedness assumption on either space is part of the definition.

## Intuition

An instrument with uniform continuity can meet a chosen output accuracy using a fixed input precision anywhere in its operating range. An ordinary continuous instrument may demand ever finer input precision in difficult regions. Uniform continuity asks whether such difficult regions can defeat every fixed calibration.

## Examples and non-examples

The square-root function on $[0,\infty)$ satisfies
$$
|\sqrt x-\sqrt y|\le\sqrt{|x-y|}.
$$
Taking $\delta=\varepsilon^2$ proves uniform continuity, even though its derivative is unbounded near zero.

For $f(x)=x^2$ on $\mathbb R$, take $x_n=n$ and $y_n=n+1/n$. Their input distance tends to zero, but
$$
y_n^2-x_n^2=2+1/n^2.
$$
Thus the function is continuous everywhere without being uniformly continuous. Restricting the same formula to any bounded interval restores uniform continuity through $|x^2-y^2|\le2M|x-y|$ when $|x|,|y|\le M$.

## Important properties

Every continuous map on a compact metric domain is uniformly continuous. A short contradiction proof assumes failure, chooses pairs becoming arbitrarily close with output separation bounded below, and extracts a convergent subsequence of one input sequence. The corresponding other inputs have the same limit, contradicting continuity.

Uniformly continuous maps preserve Cauchy sequences. If the target is complete, a uniformly continuous map on a dense subset therefore extends uniquely and continuously to the domain's completion. Independence of the approximating sequence follows by interleaving two Cauchy approximations.

Lipschitz continuity implies uniform continuity. The square-root example shows that the converse fails: its quotient $|\sqrt h-\sqrt0|/h$ diverges as $h$ decreases to zero.

## Connections and further reading

Uniform continuity controls variation within one function; uniform convergence controls approximation error across a sequence of functions. Their similar names describe different quantifiers. [Taylor, §3.1](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf) treats the definition, modulus of continuity, and compact-domain theorem.

