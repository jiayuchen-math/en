# From linear functionals to duality in analysis

A linear functional turns a vector into a scalar. Coordinate extraction, integration against a fixed function, and point evaluation can all fit this description, but the meaning of “dual” depends on what structure the functional must respect. Begin by declaring the scalar field and whether topology is part of the problem.

For a vector space $V$ over a field $k$, its algebraic dual is $V^*=\operatorname{Hom}_k(V,k)$: all linear functionals, with no continuity condition. On $k^2$, each functional has the form $\varphi(x,y)=ax+by$. A chosen basis supplies the coefficients; the functional itself exists independently of that choice.

## Follow the evaluation map

There is a canonical linear map

$$
J:V\longrightarrow V^{**},\qquad J(v)(\varphi)=\varphi(v).
$$

If $V$ is finite-dimensional, $J$ is an isomorphism. To check injectivity, a nonzero vector can be included in a basis and detected by a coordinate functional. Dimension then gives surjectivity. This identification with the bidual does not require a basis choice in its definition. An identification $V\cong V^*$ generally does require extra choices or structure.

Read Sheldon Axler's [Linear Algebra Done Right, §3F](https://linear.axler.net/LADR4e.pdf#page=119), and then Exercise 32 on [printed page 118](https://linear.axler.net/LADR4e.pdf#page=132), which asks for the evaluation construction. The prime notation for the dual in that book differs from the star notation used here. Translate the notation before comparing formulas.

For a linear map $T:V\to W$, composing functionals with $T$ gives $T^*:W^*\to V^*$. This reversal of direction is worth checking on a small matrix. It explains why a transpose appears in dual coordinates without introducing an inner product or an adjoint.

## Add a norm and ask which measurements are stable

Now let $X$ be a normed space over $\mathbb R$ or $\mathbb C$, with its norm topology. Write $X'$ for its continuous dual. A linear functional belongs to $X'$ exactly when $|\varphi(x)|\leq C\|x\|$ for some finite constant $C$. Equip $X'$ with the operator norm. All linear functionals on a finite-dimensional normed space are continuous, but that shortcut fails in infinite dimensions.

For example, give the real polynomial space on $[0,1]$ the supremum norm. The functional $D(p)=p'(0)$ is linear but not continuous: for $p_n(t)=(1-t)^n$, the norms equal $1$ while $|D(p_n)|=n$. Changing the norm can change which functionals are continuous. A claim about “the dual” of a function space is incomplete until that structure is specified.

With the continuous dual used at both stages, evaluation defines $J:X\to X''$. Hahn–Banach shows that it is an isometric embedding. A Banach space is reflexive when this particular map is onto. Infinite dimension alone does not decide reflexivity, and an abstract isomorphism with some other space is not the definition.

Richard Melrose's [MIT notes, Chapter 1, §§12–13](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/3d4cc88026d44a01f936cd6a0aa995cb_MIT18_102s20_lec_FA.pdf#page=32) give the normed-space argument. Their example $c_0$, the scalar sequences tending to zero with the supremum norm, has continuous dual $\ell^1$ and continuous bidual $\ell^\infty$. Under these identifications, $J$ is the usual inclusion; the constant sequence $1$ witnesses failure of surjectivity. These statements concern continuous duals, not algebraic duals.

As a reading exercise, put the finite-dimensional and normed-space arguments side by side. Mark exactly where dimension was used in the first and Hahn–Banach in the second. Keeping those reasons visible prevents a familiar finite-dimensional conclusion from silently becoming an unjustified infinite-dimensional claim.
