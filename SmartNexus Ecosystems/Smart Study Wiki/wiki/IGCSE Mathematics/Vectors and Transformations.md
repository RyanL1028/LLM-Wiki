# Vectors and Transformations

**Summary**: Covers vectors (column vectors, magnitude, addition, scalar multiplication, vector geometry including collinearity and ratios) and transformations (reflection, rotation, translation, enlargement including negative scale factors, shear, stretch). Includes 2x2 matrices for transformations, matrix multiplication, inverse matrices, and combined transformations. Central to IGCSE Mathematics 0580 Extended tier.
**Tags**: #igcse #mathematics #vectors #transformations #matrices
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## Part A: Vectors

---

## 1. Vector Basics

A **vector** has both magnitude (size) and direction. A **scalar** has only magnitude.

**Column vectors**: v = (x y), written vertically. x = horizontal component (right is positive), y = vertical component (up is positive).

**Magnitude** of vector (x, y): |v| = √(x² + y²)

**Example**: Find the magnitude of v = (3, 4).
|v| = √(3² + 4²) = √25 = **5**.

**Vector operations**:
- **Addition**: (a, b) + (c, d) = (a + c, b + d)
- **Subtraction**: (a, b) − (c, d) = (a − c, b − d)
- **Scalar multiplication**: k × (a, b) = (ka, kb)

**The zero vector** 0 = (0, 0). Adding the zero vector leaves any vector unchanged.

**Negative of a vector**: −v has the same magnitude but opposite direction. −(x, y) = (−x, −y).

**Parallel vectors**: v and w are parallel if v = kw for some scalar k (they are scalar multiples).

**Position vectors**: The position vector of point A relative to the origin O is OA = a. The vector from A to B is AB = OB − OA = b − a.

---

## 2. Vector Geometry (Extended)

**Expressing vectors**: Given key vectors a and b in a diagram, express other vectors in terms of a and b.

**Example**: OAB is a triangle. OA = a, OB = b. M is the midpoint of AB. Express OM.
OM = OA + AM = a + 1/2 AB = a + 1/2 (b − a) = a + 1/2 b − 1/2 a = **1/2 (a + b)**.

**Collinearity**: Three points A, B, C are collinear (lie on a straight line) if AB = k × BC for some scalar k. That is, the vectors along the line are parallel (scalar multiples) and share a common point.

**Example**: Points A(1, 2), B(4, 8), C(7, 14). AB = (3, 6), BC = (3, 6). AB = 1 × BC, and they share point B. Therefore A, B, C are collinear.

**Finding ratios**: If point P divides AB in the ratio m:n (with AP:PB = m:n), then:
OP = (n × OA + m × OB) / (m + n). Alternatively, AP = m/(m+n) × AB, and OP = OA + AP.

**Example**: OA = a, OB = b. P lies on AB such that AP:PB = 2:1. Express OP.
AP = 2/3 AB = 2/3 (b − a). OP = OA + AP = a + 2/3 (b − a) = **1/3 a + 2/3 b**.

---

## Part B: Transformations

---

## 3. Types of Transformations

### Translation

Moves every point by the same vector (x, y). The shape is unchanged (same size, same orientation).

### Reflection

Mirror image in a given line. The mirror line is the perpendicular bisector of the segment joining each point to its image.

Common mirror lines and their effects on (x, y):
- x = 0 (y-axis): (x, y) → (−x, y)
- y = 0 (x-axis): (x, y) → (x, −y)
- y = x: (x, y) → (y, x)
- y = −x: (x, y) → (−y, −x)

### Rotation

Turns around a centre by a given angle in a given direction (clockwise or anticlockwise).

Common rotations about the origin (0, 0):
- 90° anticlockwise: (x, y) → (−y, x)
- 90° clockwise: (x, y) → (y, −x)
- 180°: (x, y) → (−x, −y) (same result clockwise or anticlockwise)

### Enlargement

A shape is enlarged by a scale factor k from a centre point.
- k > 1: image is larger, on the same side of the centre.
- 0 < k < 1: image is smaller (a reduction), on the same side of the centre.
- k < 0 (**negative enlargement**, Extended): image appears on the **opposite** side of the centre and is inverted.
- Area multiplies by **k²**.

**Enlargement about the origin with scale factor k**: (x, y) → (kx, ky)

**Example**: Enlarge (3, 4) by scale factor −2 about the origin. Image = (−6, −8).

### Shear (Extended)

Slides each line parallel to an invariant line. **Area is preserved** (invariant).

Shear parallel to the x-axis with factor k: (x, y) → (x + ky, y). The x-axis is the invariant line.
Shear parallel to the y-axis with factor k: (x, y) → (x, y + kx). The y-axis is the invariant line.

### Stretch (Extended)

A one-way enlargement parallel to an axis.
- Stretch parallel to x-axis, factor k: (x, y) → (kx, y). The y-axis is the invariant line.
- Stretch parallel to y-axis, factor k: (x, y) → (x, ky). The x-axis is the invariant line.
- **Area multiplies by k** (not k² -- only one direction changes).

---

## 4. Describing Transformations

A full description must include all relevant details:

| Transformation | Required description |
|---------------|---------------------|
| Reflection | "Reflection in the line ..." (name the mirror line) |
| Rotation | "Rotation by ...° clockwise/anticlockwise about (x, y)" |
| Translation | "Translation by vector (x, y)" |
| Enlargement | "Enlargement by scale factor ... about (x, y)" |
| Shear | "Shear parallel to the ...-axis with scale factor ... and invariant line ..." |
| Stretch | "Stretch parallel to the ...-axis with scale factor ... and invariant line ..." |

---

## 5. Combined Transformations (Extended)

When two transformations are applied in sequence (say, B followed by A), there is often a **single transformation** equivalent to the combination.

**Strategy**: Apply both transformations to two or three key points on the shape, then identify the single transformation mapping the original points to the final positions.

**Example**: A reflection in y = x followed by a reflection in y = −x is equivalent to a **rotation of 180° about the origin**.

The order of transformations matters: applying A then B generally gives a different result from B then A.

---

## 6. Matrices for Transformations (Extended)

A 2x2 matrix represents a linear transformation. The image of a point is found by multiplying the matrix by the position vector:

```
[x']   [a  b] [x]
[y'] = [c  d] [y]
```

**Common transformation matrices**:

| Transformation | Matrix |
|---------------|--------|
| Identity (no change) | (1 0; 0 1) |
| Reflection in x-axis | (1 0; 0 −1) |
| Reflection in y-axis | (−1 0; 0 1) |
| Reflection in y = x | (0 1; 1 0) |
| Reflection in y = −x | (0 −1; −1 0) |
| Rotation 90° anticlockwise about O | (0 −1; 1 0) |
| Rotation 180° about O | (−1 0; 0 −1) |
| Enlargement factor k, centre O | (k 0; 0 k) |
| Stretch ∥ x-axis, factor k | (k 0; 0 1) |
| Shear ∥ x-axis, factor k | (1 k; 0 1) |

**Matrix multiplication**: For combined transformations, multiply matrices right to left -- the first transformation applied is the rightmost matrix. If transformation A has matrix M_A and B has matrix M_B, then "B followed by A" has matrix M_A × M_B.

**Determinant**: For matrix M = (a b; c d), det(M) = ad − bc.
- If det(M) = 0, the matrix is **singular** and has no inverse (the transformation collapses the plane).
- The area scale factor of the transformation = |det(M)|.

**Inverse matrix**: If det(M) ≠ 0:
M⁻¹ = 1/(ad − bc) × (d −b; −c a)

The inverse matrix gives the **inverse transformation** (reverses the effect of the original).

**Example**: Find the inverse of M = (2 1; 3 4).
det = 2×4 − 1×3 = 5. M⁻¹ = 1/5 × (4 −1; −3 2) = **(0.8 −0.2; −0.6 0.4)**.

**Example**: Find the image of (3, 4) under a rotation of 90° anticlockwise about O.
Matrix = (0 −1; 1 0). Multiply: (0×3 + −1×4, 1×3 + 0×4) = (−4, 3). Image is **(−4, 3)**.

---

## Sources

- **BBC Bitesize GCSE Mathematics** — Vectors and Transformations, BBC (free educational resource)
- **OpenStax Math** — Vectors and Matrices, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Mathematics 0580** — Vectors and Transformations, Cambridge Assessment International Education
- **CK-12 Mathematics** — Vectors and Transformations, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Algebra and Graphs]] -- Gradient, midpoint, equation of a line (relevant to vector geometry and reflections)
- [[Geometry]] -- Angle facts, congruence (relevant to verifying transformations)
- [[Trigonometry]] -- Magnitude and direction of vectors, bearing problems
- [[IGCSE-Maths-Index]] -- Full IGCSE Mathematics index

---

## Common Misconceptions

| Students often think... | But the correct understanding is... |
|---|---|
| "Enlargement by factor −1 is the same as rotation 180° about the origin" | They give the same result only when the centre is the origin. For an arbitrary centre, they differ. |
| "Shear preserves shape" | Shear distorts shape but preserves **area**. |
| "Matrix multiplication is commutative: AB = BA" | Matrix multiplication is generally **not commutative**. The order of transformations matters. |
| "The inverse of (a b; c d) is (d b; c a)" | The formula is (1/det) × (d −b; −c a). The signs on b and c must be negative, and you must divide by the determinant. |
| "A vector with both components zero still has direction" | The zero vector (0, 0) has magnitude 0 and **no defined direction**. |
| "If two vectors look parallel on a diagram, they are" | Check algebraically: v = kw for some scalar k. Visual inspection can be misleading. |
