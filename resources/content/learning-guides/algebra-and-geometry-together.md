# Let algebra and geometry check each other

A picture can suggest the right operation; an equation can tell you which parts of the picture survive a change of coordinates. Develop both descriptions on the same object. Two unrelated pages of calculations and drawings will not automatically meet.

Take the line $L$ spanned by $(1,1)$ in the Euclidean plane. For $v=(a,b)$, the nearest point on that line is

$$
Pv=\left(\frac{a+b}{2},\frac{a+b}{2}\right),\qquad
P=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}.
$$

Draw the residual $v-Pv$. Its coordinates sum to zero, so it is perpendicular to $(1,1)$. The algebra identifies the right angle that the sketch suggests. Conversely, requiring the residual to be perpendicular to the line determines the coefficient of $(1,1)$ and produces the formula.

## Three checks on the same projection

First compute $P^2=P$. Applying the projection a second time does nothing because the first result already lies on $L$. Next find its image and kernel: they are the spans of $(1,1)$ and $(1,-1)$ respectively. Finally check $P^{\mathsf T}=P$. This last identity uses the standard Euclidean inner product and standard orthonormal coordinates.

These checks distinguish two meanings that are easy to blur. The matrix

$$
Q=\begin{pmatrix}1&2\\0&0\end{pmatrix}
$$

also satisfies $Q^2=Q$. Its image is the horizontal axis and its kernel is the line spanned by $(-2,1)$. These lines are not perpendicular. It projects along a slanted direction. Idempotence alone therefore does not establish orthogonal projection. For real matrices in standard Euclidean coordinates, idempotence together with symmetry does.

To see why nearest points enter, let $w\in L$. The vectors $v-Pv$ and $Pv-w$ are perpendicular, so Pythagoras gives

$$
\|v-w\|^2=\|v-Pv\|^2+\|Pv-w\|^2.
$$

The second summand is nonnegative and vanishes exactly when $w=Pv$. A geometric observation has become a proof of existence and uniqueness of the nearest point.

## Change the coordinates, then ask what changed

Choose a basis that is not orthonormal. The linear map remains the same, but ordinary coordinate dot products no longer represent the original inner product. If its Gram matrix is $G$, the coordinate formula is $\langle x,y\rangle=x^{\mathsf T}Gy$; self-adjointness of a real matrix $A$ becomes $A^{\mathsf T}G=GA$. Plain symmetry can disappear while the underlying geometric property remains.

For practice, use the basis $(1,1),(1,0)$. Compute the matrices of $P$ and the inner product in that basis, then verify this identity. A useful note should connect each matrix entry to a geometric statement you can explain.

Sheldon Axler's [Linear Algebra Done Right, fourth edition, §6C](https://linear.axler.net/LADR4e.pdf#page=225), printed pages 211 onward, develops orthogonal complements and minimization. Definitions and examples 6.55–6.56 are on printed page 214. Read those after doing the plane calculation, then attempt the same reasoning for a plane in $\mathbb R^3$. Keeping the setting finite-dimensional here lets you concentrate on the connection without importing unspoken closure assumptions from Hilbert space theory.
