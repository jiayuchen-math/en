# Covering spaces and Galois theory: compare the correspondences

The productive connection is a pair of subgroup correspondences. Work through one example on each side, then compare the directions of the maps and the role of normality. The word “symmetry” alone is too loose to guide a calculation.

On the topological side, restrict the base $X$ to a connected, locally path-connected, semilocally simply-connected space. Connectedness together with local path-connectedness makes $X$ path-connected. Choose $x_0\in X$. These are the hypotheses for the classical classification used here; this guide makes no classification claim for arbitrary spaces.

## Start with the circle

For an integer $n\geq1$, $p_n:S^1\to S^1$, $z\mapsto z^n$, is a connected $n$-sheeted covering. With both basepoints equal to $1$, its induced subgroup in $\pi_1(S^1,1)\cong\mathbb Z$ is $n\mathbb Z$. A loop of winding number $k$ lifts to a closed loop precisely when $n$ divides $k$. Its deck transformations multiply $z$ by an $n$th root of unity.

Allen Hatcher's [Algebraic Topology, §1.3, Theorem 1.38](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf#page=47) classifies connected pointed covers by subgroups $H=p_*\pi_1(Y,y_0)$ of $\pi_1(X,x_0)$. Forgetting the chosen point replaces subgroups by conjugacy classes. The number of sheets is the subgroup index, which may be infinite.

In a fixed universal cover, write the corresponding cover as $X_H=\widetilde X/H$, using a consistent deck-action convention. Inclusion $H\subseteq K$ gives a covering map $X_H\to X_K$ over $X$. A larger subgroup gives a further quotient and fewer sheets when the indices are finite. For example, $6\mathbb Z\subseteq2\mathbb Z$ gives a three-sheeted map between the six-sheeted and two-sheeted circle covers.

## Put a finite field extension beside it

Let $L/K$ be a **finite Galois extension** and $G=\operatorname{Gal}(L/K)$. Intermediate fields $K\subseteq E\subseteq L$ correspond to subgroups via $E\mapsto\operatorname{Gal}(L/E)$ and $H\mapsto L^H$. This correspondence reverses inclusion, and $[L^H:K]=[G:H]$. The hypotheses belong to the theorem: do not apply this full correspondence to an arbitrary finite extension.

Read J. S. Milne's [Fields and Galois Theory, Chapter 3, Theorem 3.17](https://www.jmilne.org/math/CourseNotes/FT.pdf#page=39). Then calculate with $L=\mathbb Q(\sqrt2,\sqrt3)$ over $K=\mathbb Q$. Independent sign changes give a group of order four. Fixing $\sqrt2$ leaves a subgroup of order two; its fixed field is $\mathbb Q(\sqrt2)$. Find the other two quadratic intermediate fields and check each degree against its subgroup index.

### Normality is the crucial checkpoint

A connected cover in this setting is regular, also called normal or Galois, exactly when $H$ is normal in $\pi_1(X,x_0)$. Then its deck group is $\pi_1(X,x_0)/H$. In general the deck group is $N(H)/H$, with $N(H)$ the normalizer; see [Hatcher, Proposition 1.39](https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf#page=51). Connected covers need not be Galois. Circle covers hide this distinction because every subgroup of $\mathbb Z$ is normal.

On the field side, $L^H/K$ is Galois exactly when $H$ is normal in $G$, and then its Galois group is $G/H$. Draw the subgroup and intermediate-field diagrams for the biquadratic example, reversing the inclusions. Afterwards compare the circle diagram. Keep both ambient objects visible: the universal cover on one side and the chosen finite Galois extension on the other. Their shared pattern is useful without identifying topological spaces with fields or assuming every intermediate object has a quotient group of symmetries.
