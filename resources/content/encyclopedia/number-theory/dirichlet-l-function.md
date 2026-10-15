---
{"id":"dirichlet-l-function","title":"Dirichlet L-Function","chinese":"狄利克雷 L 函数","aliases":["Dirichlet L-series"],"area":"number-theory","topic":"analytic-number-theory","level":"Graduate","summary":"A Dirichlet L-function weights integers by a Dirichlet character, refining zeta's prime product to detect residue classes and encode abelian arithmetic over the rationals.","prerequisites":["dirichlet-character","riemann-zeta-function","holomorphic-function"],"related":["primitive-dirichlet-character","conductor-of-dirichlet-character","gauss-sum","dedekind-zeta-function","cyclotomic-field"],"references":[{"id":"sutherland-dirichlet","label":"Andrew V. Sutherland — MIT 18.785, Lecture 18 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes18.pdf","locator":"Sections 18.3–18.4, Definition 18.19, Proposition 18.20, Remark 18.21 and character-orthogonality proof, pp.6–7","checked":"2026-10-15","note":"Definition, principal-character Euler factors, nonprincipal continuation and the mechanism for primes in progressions."},{"id":"sutherland-nonvanishing","label":"Andrew V. Sutherland — MIT 18.785, Lecture 19 (2021)","url":"https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf","locator":"Theorems 19.15–19.16 and proofs, pp.11–12","checked":"2026-10-15","note":"Cyclotomic zeta factorization using primitive characters and nonvanishing at 1, including induced characters."},{"id":"zhang-functional","label":"Shenxing Zhang — Algebraic Number Theory notes v2.5.0.0","url":"https://faculty.hfut.edu.cn/_resources/group1/M00/00/1A/rB_zSGjQAcqAWCrPACd7v7jEBRk596.pdf","locator":"Section 4.1.2, Proposition 4.8, Theorem 4.10 and proof, printed pp.105–107 (PDF pp.113–115)","checked":"2026-10-15","note":"Primitive-character theta transformation and functional equation; this article includes the conductor in its completed-function normalization."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

A Dirichlet L-function inserts a periodic multiplicative weight into the Riemann zeta series. Different weights distinguish invertible residue classes, allowing analytic information near $s=1$ to prove the existence of primes in arithmetic progressions. Products of these functions also recover Dedekind zeta functions of abelian extensions of $\mathbb Q$.

Keeping the modulus, conductor and principal-character case separate is essential. Removing a few Euler factors changes the L-function even if the character agrees with a simpler one at most primes.

## Prerequisites

Know Dirichlet characters, including extension by zero on integers not coprime to the modulus. Use the convergence and Euler product of the Riemann zeta function and basic complex analysis. The functional equation requires primitive characters, their parity and Gauss sums.

## Definition and conventions

For a Dirichlet character $\chi$ modulo $q\ge1$, define

$$
L(s,\chi)=\sum_{n\ge1}\frac{\chi(n)}{n^s}
=\prod_p(1-\chi(p)p^{-s})^{-1},\qquad \operatorname{Re}s>1.
$$

Complete multiplicativity gives the product, and $|\chi(n)|\le1$ gives absolute convergence. A prime dividing $q$ has $\chi(p)=0$, so its Euler factor is $1$. Outside this half-plane, the notation denotes the continuation unless convergence is established separately.

For the principal character $\chi_0$ modulo $q$,

$$
L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s}).
$$

It has a simple pole at $1$ with residue $\varphi(q)/q$. Only the character of modulus one gives zeta with all Euler factors present. A nonprincipal character instead has an entire L-function.

## Intuition

Characters are Fourier modes on the finite group $(\mathbb Z/q\mathbb Z)^\times$. The principal mode counts all invertible classes together; other modes measure differences between them. Orthogonality recovers an individual class by taking a linear combination of modes. The L-functions carry that finite Fourier decomposition into prime counting through their Euler products.

## Examples and non-examples

For the nonprincipal character $\chi_{-4}$ modulo $4$,

$$
L(s,\chi_{-4})=1-3^{-s}+5^{-s}-7^{-s}+\cdots.
$$

At $s=1$ this converges to $\pi/4$: the factorization $\zeta_{\mathbb Q(i)}=\zeta L(s,\chi_{-4})$, together with residues $\pi/4$ and $1$ for the two zeta functions, gives this value. Convergence here is conditional, illustrating why the initial absolute-convergence condition is not a complete description of every character's series.

Now induce this character to modulus $12$. The resulting character $\psi$ agrees on integers coprime to $12$ but vanishes also on multiples of $3$. Since $\chi_{-4}(3)=-1$,

$$
L(s,\psi)=(1+3^{-s})L(s,\chi_{-4}),\qquad L(1,\psi)=\pi/3.
$$

Thus sharing a primitive inducing character does not make two L-functions equal. The alternating eta series $\sum_{n\ge1}(-1)^{n-1}n^{-s}$ is another useful contrast: its coefficient sequence is not a Dirichlet character, since it is not completely multiplicative.

## Important properties

For nonprincipal $\chi$, a sum over one full period vanishes, so the partial sums $A(x)=\sum_{n\le x}\chi(n)$ are bounded. Partial summation gives

$$
L(s,\chi)=s\int_1^\infty A(x)x^{-s-1}\,dx,\qquad \operatorname{Re}s>0.
$$

This proves holomorphy in that half-plane. Full continuation follows from the primitive-character theory and the finite Euler factors for induced characters.

For primitive nonprincipal $\chi$ of conductor $q$, put $\chi(-1)=(-1)^a$, with $a\in\{0,1\}$, and

$$
\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi).
$$

With $\tau(\chi)=\sum_{r\bmod q}\chi(r)e^{2\pi ir/q}$, the functional equation is

$$
\Lambda(s,\chi)=\frac{\tau(\chi)}{i^a\sqrt q}\Lambda(1-s,\overline\chi).
$$

The multiplier has absolute value one. Proof idea: a character-weighted Gaussian theta series transforms under Poisson summation; taking its Mellin transform yields continuation and the equation. This simple conductor normalization requires primitivity.

Finally, $L(1,\chi)\ne0$ for every nonprincipal character. One proof factors a cyclotomic field's Dedekind zeta function into primitive Dirichlet L-functions. Its simple pole and zeta's simple pole force the remaining factors to be nonzero at $1$. Restoring finitely many Euler factors handles induced characters.

## Connections and further reading

Orthogonality applied to logarithms of Euler products isolates primes $p\equiv b\pmod q$. When $\gcd(b,q)=1$, the principal pole and nonprincipal nonvanishing make the corresponding prime sum diverge as real $s\downarrow1$, proving infinitely many such primes. The quadratic identity $\zeta_K=\zeta L(s,\chi_D)$ further turns L-values into class number information. [Sutherland, Lectures 18](https://math.mit.edu/classes/18.785/2021fa/LectureNotes18.pdf) and [19](https://math.mit.edu/classes/18.785/2021fa/LectureNotes19.pdf) develop these bridges.
