---
{"id":"stable-homotopy-group","title":"Stable Homotopy Group","chinese":"稳定同伦群","aliases":[],"area":"geometry-topology","topic":"algebraic-topology","level":"Research","summary":"Stable homotopy groups retain information that survives repeated suspension.","prerequisites":["higher-homotopy-group","cw-complex"],"related":["singular-homology"],"references":[{"id":"hatcher-at","label":"Allen Hatcher — Algebraic Topology","url":"https://pi.math.cornell.edu/~hatcher/AT/AT.pdf","locator":"§4.2, Corollary 4.24 (Freudenthal suspension theorem) and Stable Homotopy Groups, printed pp. 360 and 384; §4.F, Spectra and Homology Theories","checked":"2026-10-14","note":"Scoped research overview; mathematical and source limitations are explicit."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

Stable homotopy groups retain information that survives repeated suspension. They replace a succession of unstable mapping problems by a limiting problem, opening the way to spectra and generalized homology. This research overview defines the groups for based CW complexes and describes their role; it does not construct a model category of spectra or supply a computation of all stable stems.

## Prerequisites

Use based homotopy groups, CW complexes, suspension, and direct limits of groups. The reduced suspension of a based space collapses the two ends of $X\times I$ and the cylinder over its basepoint. Higher homotopy groups are abelian, so the eventual system fits ordinary group colimits.

## Definition and conventions

For a based CW complex $X$, define
$$
\pi_k^s(X)=\operatorname*{colim}_{r}\pi_{k+r}(\Sigma^rX),
$$
using suspension homomorphisms and taking $r$ sufficiently large that the homotopy-group degrees are at least two. Basepoints are retained throughout. For spheres, write
$$
\pi_k^s=\operatorname*{colim}_{r}\pi_{k+r}(S^r).
$$
Here the sphere group is the stable homotopy of based $S^0$, or equivalently the sphere spectrum. Reduced and unreduced suspension-spectrum conventions differ by whether a disjoint basepoint is first added. No such basepoint is added to $X$ in this entry.

## Intuition

Suspension shifts both domain and target dimensions. In a fixed difference of dimensions, successive groups eventually enter a range where suspension loses no further information. Stabilization therefore simplifies how maps combine, while retaining torsion invisible to ordinary homology. It is not a claim that each unstable map is already determined by homology.

## Examples and non-examples

Degree classifies self-maps of positive-dimensional spheres up to based homotopy. Suspension preserves degree, so the zeroth stable stem is $\mathbb Z$. The first stable stem is $\mathbb Z/2$, represented by suspensions of the Hopf map. This is genuine torsion rather than a one-dimensional cycle in a sphere.

Ordinary homology does not recover these positive stable stems: a sphere spectrum has nontrivial stable homotopy beyond degree zero, while its ordinary integral homology is concentrated in degree zero. Also, a map lying outside the stable range may become trivial after suspension; one must not identify every unstable group with its stable limit.

## Important properties

For a based $(n-1)$-connected CW complex, Freudenthal gives an isomorphism $\pi_i(X)\to\pi_{i+1}(\Sigma X)$ when $i<2n-1$, and a surjection at equality. Repeated suspension increases connectivity and eventually gives stability for each fixed dimension difference.

Spectra organize these stable phenomena and represent generalized cohomology theories. Their homotopy groups use stabilization of structure maps, not just ordinary homology of the level spaces. Spectral-sequence calculations also require differentials, convergence, and extension analysis; a displayed page alone is not a completed calculation.

## Connections and further reading

See [Hatcher, §4.2 and §4.F](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) for the inspected stable-range statement and spectra overview. The book's historical comments on how many stems were computed are not used as current research claims. Further research needs separate machinery beyond the scope of this article.

