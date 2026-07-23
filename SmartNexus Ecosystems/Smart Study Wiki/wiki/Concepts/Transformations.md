# Transformations

**Summary**: Transformations change the position or orientation of shapes on a coordinate grid. The four types are translation, reflection, rotation, and enlargement, with symmetry describing the natural repetition within a shape.
**Tags**: #concepts #math #y7 #geometry #transformations
**Created**: 2026-05-30
**Last Updated**: 2026-05-30

---

## Content

<style>
.math-box { background: #f0f4ff; border-left: 4px solid #4f46e5; padding: 12px 16px; margin: 12px 0; border-radius: 0 8px 8px 0; }
.math-box strong { color: #4338ca; }
table { border-collapse: collapse; margin: 12px 0; }
th, td { border: 1px solid var(--border, #ddd); padding: 8px 12px; text-align: left; }
th { background: #f0f4ff; }
</style>

A **transformation** changes a shape's position, orientation, or size. The original shape is called the **object** and the transformed shape is called the **image**.

### Translation

A **translation** slides every point of a shape the same distance in the same direction. The shape does not rotate, reflect, or change size — it simply moves.

A translation is described using a **column vector**: 

<table>
<tr><th>Vector</th><th>Meaning</th></tr>
<tr><td>(3, 2)</td><td>Move 3 units right, 2 units up</td></tr>
<tr><td>(−4, 1)</td><td>Move 4 units left, 1 unit up</td></tr>
<tr><td>(0, −5)</td><td>Move 5 units down (no horizontal change)</td></tr>
</table>

<div class="math-box">
<strong>Example:</strong> Point A(2, 5) translated by vector (−3, 1) becomes A′(−1, 6).
</div>

### Reflection

A **reflection** flips a shape over a **mirror line**. Every point on the shape is the same perpendicular distance from the mirror line as its image, but on the opposite side.

Common mirror lines:
- **x-axis** (y = 0): (x, y) → (x, −y)
- **y-axis** (x = 0): (x, y) → (−x, y)
- **y = x:** (x, y) → (y, x)
- **y = −x:** (x, y) → (−y, −x)

<div class="math-box">
<strong>Example:</strong> Reflect point (3, 4) in the x-axis. Image: (3, −4).
</div>

To describe a reflection fully, state the equation of the mirror line.

### Rotation

A **rotation** turns a shape around a fixed point called the **centre of rotation**. To describe a rotation fully, you need three things:

1. **Centre of rotation** (the fixed point)
2. **Angle** of rotation (90°, 180°, 270°)
3. **Direction** (clockwise or anticlockwise)

<div class="math-box">
<strong>Example:</strong> Point (2, 3) rotated 90° clockwise about (0, 0) becomes (3, −2).
</div>

Rotation 180° about the origin maps (x, y) → (−x, −y) regardless of direction.

### Symmetry

**Line symmetry:** A shape has line symmetry if it can be folded along a line so both halves match exactly. An equilateral triangle has 3 lines of symmetry, a square has 4, a rectangle has 2, and a parallelogram has 0.

**Rotational symmetry:** A shape has rotational symmetry if it looks the same after being rotated through less than 360° about its centre. The **order** is the number of times the shape matches itself during a full rotation. A square has order 4, an equilateral triangle has order 3, a rectangle has order 2.

### Describing Transformations

When describing a transformation fully, include:
- **Translation:** State it is a translation, give the column vector
- **Reflection:** State the mirror line equation
- **Rotation:** State the centre, angle, and direction

<div class="math-box">
<strong>Example description:</strong> "Rotation of 90° clockwise about the origin (0, 0)."
</div>

### Combined Transformations

When multiple transformations are applied, apply them one after the other in the order given. The image of the first transformation becomes the object for the second.

## Related Notes

- [[Algebraic Expressions]]
- [[Fractions]]
