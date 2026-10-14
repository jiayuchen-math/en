---
{
  "id": "conditional-probability",
  "title": "Conditional Probability",
  "chinese": "条件概率",
  "aliases": [],
  "area": "probability",
  "topic": "probability",
  "level": "Undergraduate",
  "summary": "Conditioning on a positive-probability event restricts and renormalizes a probability law.",
  "prerequisites": [
    "probability-space",
    "probability-event"
  ],
  "related": [
    "independent-events",
    "conditional-expectation"
  ],
  "references": [
    {
      "id": "weber-probability",
      "label": "Richard Weber — Probability",
      "url": "https://www.statslab.cam.ac.uk/~rrw1/prob/prob-weber.pdf",
      "locator": "§§6.1–6.4 Conditional probability, properties, total probability, Bayes' formula",
      "checked": "2026-10-14",
      "note": "Inspected definition and foundational properties."
    }
  ],
  "contributors": [
    "Mathematics Resources editorial compilation (AI-assisted)"
  ]
}
---

## Overview

Conditional probability describes a probability model after learning that a specified event occurred. The new law keeps the relative weights of outcomes inside that event and rescales their total to one. It is central to prediction, sequential experiments, and interpreting incomplete observations.

The conditioning event must be stated precisely. Learning that a die result is even differs from learning that someone chose to report an even result; the reporting procedure may itself carry information.

## Prerequisites

The definition uses a probability space, measurable events, and intersections. Fractions suffice for finite calculations. Countable partitions are useful for the law of total probability, while general conditioning on random variables later requires measurable functions and conditional expectation.

## Definition and conventions

For $A,B\in\mathcal F$ with $P(B)>0$, define
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Here $B$ is the information and $A$ is the event being evaluated. For fixed $B$, this defines a probability measure on the original event sigma-algebra, with all its mass concentrated on $B$.

When $P(B)=0$, this ratio is undefined. Conditional distributions given a continuous observation use a more general construction, with versions determined almost everywhere; they do not arise by simply dividing two zeros.

## Intuition

The denominator measures the part of the original model still possible after the observation. The numerator measures the favorable part within it. Dividing compares favorable mass with remaining mass. This is a change in information within a model, and does not by itself describe what would happen under a causal intervention.

## Examples and non-examples

For a fair die, let $A=\{5,6\}$ and $B=\{2,4,6\}$. Their intersection is $\{6\}$, so
$$
P(A\mid B)=\frac{1/6}{1/2}=\frac13.
$$
Reversing the information gives $P(B\mid A)=(1/6)/(1/3)=1/2$. Conditioning is generally asymmetric.

As a second calculation, suppose a device comes from factory I with probability $3/4$ and factory II otherwise. Their defect probabilities are $1/100$ and $3/100$. The probability of a defect is $3/200$. Given a defect, the chance it came from factory II is $(1/4)(3/100)/(3/200)=1/2$. The rarer factory supplies half the defects because its defect rate is higher.

For a uniform point in $[0,1]$, conditioning by the elementary ratio on the event that the point equals $1/2$ is a non-example: that event has probability zero.

## Important properties

Multiplying the definition gives $P(A\cap B)=P(A\mid B)P(B)$. Repeated application yields the chain rule, provided its denominators are positive. For a countable measurable partition $(B_i)$, countable additivity yields
$$
P(A)=\sum_{i:P(B_i)>0}P(A\mid B_i)P(B_i).
$$
Equating the two expressions for $P(A\cap B)$ proves Bayes' formula. Independence means conditioning on $B$ leaves $P(A)$ unchanged, when $P(B)>0$.

## Connections and further reading

Conditional expectation replaces a single conditioning event by a sigma-algebra of information and can encode conditional probabilities through event indicators. [Weber, §§6.1–6.4](https://www.statslab.cam.ac.uk/~rrw1/prob/prob-weber.pdf) develops the elementary identities. [Shanghai Jiao Tong University's Chapter 1, entry “条件概率”](https://ai4edu.sjtu.edu.cn/gltj/chapters/1) supplies independent Chinese-name evidence.

