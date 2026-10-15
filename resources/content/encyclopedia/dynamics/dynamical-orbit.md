---
{
  "id": "dynamical-orbit",
  "title": "Orbit of a Dynamical System",
  "chinese": "轨道",
  "aliases": ["forward orbit", "正半轨道"],
  "area": "dynamics",
  "topic": "dynamics",
  "level": "Undergraduate",
  "summary": "An orbit is the set of states reached by iterating a map or following a flow, with forward and full time distinguished.",
  "prerequisites": ["set-function", "function-image", "bijective-function"],
  "related": ["dynamical-fixed-point", "dynamical-periodic-point", "omega-limit-set", "dynamical-flow", "topological-transitivity", "poincare-recurrence", "group-orbit", "countable-set"],
  "references": [
    {
      "id": "bullett-discrete-orbits",
      "label": "Shaun Bullett — Discrete dynamics on the real line",
      "url": "https://webspace.maths.qmul.ac.uk/s.r.bullett/cf_chapter2.pdf",
      "locator": "Chapter 2, printed/PDF pp.1–2: forward and backward orbit definitions, prime period, eventual periodicity and the invertible-map lemma",
      "checked": "2026-10-15",
      "note": "Supports orbit and periodicity conventions and cancellation of a transient tail for invertible maps; the algebraic arguments extend to self-maps of sets."
    },
    {
      "id": "sarig-iteration",
      "label": "Omri Sarig — Lecture Notes on Ergodic Theory",
      "url": "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf",
      "locator": "§1.1 What is ergodic theory?, printed p.1 / PDF p.9: iterates, semigroup actions, flows and the orbit viewpoint",
      "checked": "2026-10-15",
      "note": "Supports discrete versus continuous time and the role of extra topological or measure structure."
    }
  ],
  "contributors": ["Mathematics Resources editorial compilation (AI-assisted)"]
}
---

## Overview

An orbit records which states a deterministic system visits from a specified initial state. The same rule may produce a fixed state, a repeating cycle, or an infinite collection of distinct states. Orbit language separates this elementary iteration from later questions about convergence, recurrence, density and statistical behavior.

An orbit is a set of visited states. The indexed trajectory retains their visiting times as well, so it carries information that the set alone suppresses.

## Prerequisites

Start with a set $X$ and a self-map $T:X\to X$. Define $T^0$ to be the identity and $T^{n+1}=T\circ T^n$. The exponent denotes repeated composition: $T^2(x)=T(T(x))$, not the square of $T(x)$. Continuity and a metric are needed only when discussing closures and limits below.

## Definition and conventions

The forward orbit of $x\in X$ is

$$
\mathcal O^+(x)=\{T^n(x):n\in\mathbb N\}.
$$

Here $\mathbb N$ includes zero, so the initial state belongs to its orbit. If $T$ is bijective, define negative iterates using its inverse and the full orbit by $\mathcal O(x)=\{T^n(x):n\in\mathbb Z\}$. For a noninvertible map, a backward trajectory may have several choices or no continuation; a single inverse map is unavailable.

For a globally defined flow $\varphi^t$, replace integer time by real time: the full orbit uses $t\in\mathbb R$ and the forward orbit uses $t\ge0$. A solution of an equation defined only on a limited time interval requires its own domain convention.

## Intuition

Starting from $T(x)$ discards the first step of the trajectory. Consequently, $T(\mathcal O^+(x))\subseteq\mathcal O^+(x)$, but equality can fail. This is forward invariance, rather than a guarantee that every visited state has a predecessor within the forward orbit.

Full orbits of an invertible map behave differently: moving the starting point along its orbit changes only the time origin. They partition $X$ because the relation $y=T^n(x)$ for some integer $n$ is reflexive, symmetric and transitive.

## Examples and non-examples

For $T(x)=x/2$ on $\mathbb R$, the forward orbit of $1$ is $\{1,1/2,1/4,\ldots\}$. Its closure also contains zero, while its omega-limit set consists only of zero: these are the limits approached along times tending to infinity. Zero is never visited from $1$. The full orbit is $\{2^k:k\in\mathbb Z\}$ because this map is invertible on $\mathbb R$.

The phase space matters. Restrict the same formula to $[0,1]$ and it is no longer surjective, so it has no inverse self-map of that interval.

For a finite example, take $X=\{a,b,c,d\}$ with $T(a)=b$, $T(b)=c$, $T(c)=b$, and $T(d)=c$. The forward orbit of $a$ is $\{a,b,c\}$. It is finite, but $a$ is not periodic: it never returns. The cycle $b,c$ has least period two, and $a$ has a transient step before reaching it. This refutes the implication “finite forward orbit means periodic initial point” for arbitrary self-maps.

## Important properties

A point is periodic if $T^p(x)=x$ for some positive integer $p$. Its least such $p$ is its least period, and its forward orbit contains exactly $p$ points.

More generally, a forward orbit is finite exactly when the trajectory is eventually periodic. Proof sketch: finiteness forces $T^i(x)=T^j(x)$ for some $i<j$. Applying further iterates gives repetition with period $j-i$ after time $i$. Conversely, a finite transient segment followed by a repeating segment visits finitely many states. If $T$ is invertible, applying $T^{-i}$ cancels the transient segment and proves periodicity of $x$ itself.

For continuous $T$ on a metric space, the closure of a forward orbit is forward invariant. Indeed, if $y$ is a limit of visited states, continuity makes $T(y)$ a limit of their successors. This argument explains why an orbit closure is often a useful state space even when the orbit is not closed.

## Connections and further reading

Discrete forward orbits are countable, but continuous-time orbits need not be. A dense orbit is one whose closure fills the phase space; topological transitivity investigates closely related open-set connections. Poincaré recurrence instead concerns returns to measurable regions, using an invariant measure. Neither an orbit's mere infinitude nor its countability settles those questions.

Read [Bullett, Chapter 2, pp.1–2](https://webspace.maths.qmul.ac.uk/s.r.bullett/cf_chapter2.pdf) for periodicity conventions and [Sarig, §1.1](https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf) for the wider orbit viewpoint.
