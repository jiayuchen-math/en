---
{"id":"ring-ideal","title":"Ideal of a Commutative Ring","chinese":"交换环的理想","aliases":[],"area":"algebra","topic":"commutative-algebra","level":"Undergraduate","summary":"An ideal is an additive subgroup closed under multiplication by arbitrary ring elements, making it suitable as the kernel of a quotient map.","prerequisites":["commutative-ring","subgroup"],"related":["quotient-ring","prime-ideal","maximal-ideal","noetherian-ring"],"references":[{"id":"li-ideals","label":"Wen-Wei Li — Methods in Algebra I, author source","url":"https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex","locator":"基本概念 (sec:ring-basics), def:ideals, following ideal operations and quotient-ring definition, and eg:Z-pid","checked":"2026-10-15","note":"Absorption, generated ideals, ideal products, quotient multiplication, and ideals of the integers."},{"id":"stacks-basic-ideals","label":"The Stacks Project — Basic notions","url":"https://stacks.math.columbia.edu/tag/00AR","locator":"Section 10.3, items 35–43, generated ideals, quotient rings, prime/maximal quotient criteria, contraction and extension","checked":"2026-10-15","note":"Quotient criteria and behavior under ring maps."},{"id":"milne-ca-ideals","label":"J. S. Milne — A Primer of Commutative Algebra","url":"https://www.jmilne.org/math/xnotes/CA.pdf","locator":"Section 2, Ideals, opening definition and generated ideals, printed pp.3–4; Extension and contraction of ideals, Notation 2.10, printed p.7","checked":"2026-10-15","note":"Ideal generation and the distinction between images and extended ideals."}],"contributors":["Mathematics Resources editorial compilation (AI-assisted)"]}
---

## Overview

An ideal records a collection of expressions that may consistently be declared zero. If $a$ becomes zero, every multiple $ra$ must become zero too. If $a$ and $b$ become zero, so must their sum and difference. These requirements explain both the ideal axioms and their role in constructing quotient rings. Ideals are also modules over their ambient ring, linking ring theory to linear methods.

## Prerequisites

Use commutative rings with identity, additive subgroups, and cosets. For the examples, know polynomial evaluation and modular arithmetic. The definition does not require every ideal to have a single generator, or even finitely many generators.

## Definition and conventions

An ideal $I$ of a commutative ring $R$ is an additive subgroup satisfying $ri\in I$ for all $r\in R$ and $i\in I$. The zero ideal and $R$ itself are allowed. An ideal is proper if $I\ne R$; equivalently, $1\notin I$, since $r=r1$.

For a subset $S\subseteq R$, its generated ideal $(S)$ consists of finite sums $\sum_j r_js_j$, where $r_j\in R$ and $s_j\in S$. The empty set generates $(0)$. The notation $(a_1,\ldots,a_m)$ uses arbitrary ring coefficients, not just integer coefficients. In a noncommutative ring, left, right, and two-sided ideals must be distinguished; this article uses the commutative convention throughout.

## Intuition

Ideal generation is closure under all consequences obtained by addition and multiplication by ambient elements. For example, imposing $x=0$ in $k[x,y]$ forces every term divisible by $x$ to disappear. It leaves polynomials in $y$, rather than forcing all polynomials without constant term to vanish. The ambient ring and the actual generators both matter.

## Examples and non-examples

In $\mathbb Z[x]$, let $I=(2,x)$. Every expression $2a(x)+xb(x)$ has even constant coefficient. Conversely, if $f(0)$ is even, write
$$
f(x)=f(0)+xg(x)=2c+xg(x).
$$
Thus membership in $I$ is exactly the condition that the constant coefficient be even. The homomorphism $f\mapsto f(0)\bmod2$ is surjective onto $\mathbb F_2$ and has kernel $I$, so $\mathbb Z[x]/I\cong\mathbb F_2$. In particular $I$ is maximal.

The constants $\mathbb Z\subset\mathbb Z[x]$ form a unital subring, but not an ideal: multiplication of $1$ by $x$ leaves the constants. Conversely, $2\mathbb Z$ is an ideal of $\mathbb Z$ but is not a unital subring under the convention that subrings contain the ambient identity. Closure under internal multiplication alone therefore does not characterize ideals.

## Important properties

Quotient multiplication is $(r+I)(s+I)=rs+I$. Proof idea for well-definedness: changing representatives by $i,j\in I$ changes the product by $rj+si+ij$, which belongs to $I$ by absorption. The canonical map has kernel $I$. Conversely, the kernel of any ring homomorphism is an ideal, because homomorphisms carry sums and multiples of kernel elements to zero.

For ideals $I,J$, their sum, intersection, and product are ideals. The product comprises finite sums of elements $ij$, rather than only single products. Always $IJ\subseteq I\cap J$; equality can fail, as $(2)(2)=(4)$ whereas $(2)\cap(2)=(2)$ in $\mathbb Z$.

For a proper ideal $I$, it is prime exactly when $R/I$ is a domain, and maximal exactly when $R/I$ is a field. These follow by translating multiplication and ideals into the quotient. Inverse images of ideals under ring maps remain ideals. Direct images need not: under $\mathbb Z\hookrightarrow\mathbb Q$, the image of the ideal $\mathbb Z$ is not an ideal of $\mathbb Q$. Its extended ideal is all of $\mathbb Q$.

## Connections and further reading

Noetherian rings guarantee finite generation of every ideal, while prime ideals provide the points of the spectrum. For the constructions used here, consult [Li, basic ring notions](https://raw.githubusercontent.com/wenweili/AlJabr-1/master/chapter5.tex) and [Stacks, Section 10.3](https://stacks.math.columbia.edu/tag/00AR).
