# Trigonometry

**Summary**: Covers right-angled triangle trigonometry (SOHCAHTOA), exact trigonometric values for key angles, the sine and cosine rules for non-right-angled triangles, area of a triangle (1/2 ab sin C), 3D trigonometry, and bearings. Trigonometry is a central topic in IGCSE Mathematics 0580, examined in both Core (right-angled only) and Extended (all rules) tiers.
**Tags**: #igcse #mathematics #trigonometry
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## 1. Right-Angled Triangle Trigonometry (SOHCAHTOA)

For a right-angled triangle, with angle θ:

- **sin θ = opposite / hypotenuse**
- **cos θ = adjacent / hypotenuse**
- **tan θ = opposite / adjacent**

**Finding a side**: Choose the correct ratio, substitute the known values, solve.

**Example**: In a right-angled triangle, the hypotenuse is 12 cm and angle = 35°. Find the opposite side.
sin 35° = opp / 12 → opp = 12 × sin 35° ≈ **6.88 cm**.

**Finding an angle**: Use the inverse function (sin⁻¹, cos⁻¹, tan⁻¹).

**Example**: In a right-angled triangle, opposite = 5 cm, adjacent = 7 cm. Find angle θ.
tan θ = 5/7 → θ = tan⁻¹(5/7) ≈ **35.5°**.

---

## 2. Exact Trigonometric Values

These are tested without calculator access. The table must be memorised.

| Angle θ | sin θ | cos θ | tan θ |
|---------|-------|-------|-------|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | 1/√3 = √3/3 |
| 45° | 1/√2 = √2/2 | 1/√2 = √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | undefined |

**Memory aid**: For sine, the values for 0°, 30°, 45°, 60°, 90° are √0/2, √1/2, √2/2, √3/2, √4/2. For cosine, reverse the sine sequence.

**Example**: Without a calculator, evaluate sin 30° + cos 60° = 1/2 + 1/2 = **1**.

**Example**: Without a calculator, evaluate tan 45° × sin 60° = 1 × √3/2 = **√3/2**.

---

## 3. Sine Rule

Used for **non-right-angled** triangles. Labelling convention: side a is opposite angle A, side b opposite angle B, side c opposite angle C.

**a / sin A = b / sin B = c / sin C** (equivalently: sin A / a = sin B / b = sin C / c)

**When to use**:
- Two angles and one side (AAS or ASA) -- find a missing side
- Two sides and a non-included angle (SSA) -- find a missing angle. **Watch for the ambiguous case.**

**Ambiguous case (Extended)**: When given two sides and a non-included angle (SSA), there may be **two** possible triangles -- the angle could be acute or obtuse. Check: if the side opposite the given angle is shorter than the other given side, and the calculated angle is acute, then 180° minus the acute angle may also be valid (provided it does not cause the angle sum to exceed 180°).

**Example** (finding a side): In triangle ABC, A = 40°, B = 75°, a = 8 cm. Find side b.
b / sin 75° = 8 / sin 40° → b = 8 × sin 75° / sin 40° ≈ 8 × 0.9659 / 0.6428 ≈ **12.0 cm**.

**Example** (finding an angle): In triangle ABC, a = 9, b = 12, A = 45°. Find angle B.
sin B / 12 = sin 45° / 9 → sin B = 12 × sin 45° / 9 ≈ 0.9428.
B₁ = sin⁻¹(0.9428) ≈ **70.5°**. B₂ = 180° − 70.5° = **109.5°**.
Both are valid since A + B₂ = 154.5° < 180°.

---

## 4. Cosine Rule

**Finding a side**: a² = b² + c² − 2bc cos A

**Finding an angle** (rearranged): cos A = (b² + c² − a²) / (2bc)

**When to use**:
- Three sides (SSS) -- find any angle
- Two sides and the included angle (SAS) -- find the third side

**Example** (finding a side): In triangle ABC, b = 7, c = 9, A = 60°. Find a.
a² = 7² + 9² − 2 × 7 × 9 × cos 60° = 49 + 81 − 126 × 0.5 = 130 − 63 = 67.
a = √67 ≈ **8.19 cm**.

**Example** (finding an angle): In triangle ABC, a = 5, b = 6, c = 7. Find angle A.
cos A = (6² + 7² − 5²) / (2 × 6 × 7) = (36 + 49 − 25) / 84 = 60/84 = 5/7.
A = cos⁻¹(5/7) ≈ **44.4°**.

---

## 5. Area of a Triangle

**Right-angled triangle**: Area = 1/2 × base × perpendicular height

**Any triangle**: **Area = 1/2 ab sin C** (half the product of two sides and the sine of the included angle)

**Heron's formula** (Extended): Area = √[s(s − a)(s − b)(s − c)], where s = (a + b + c) / 2

**Example**: Find the area of triangle ABC where a = 8 cm, b = 6 cm, C = 30°.
Area = 1/2 × 8 × 6 × sin 30° = 24 × 0.5 = **12 cm²**.

---

## 6. 3D Trigonometry (Extended)

**Angle between a line and a plane**: The angle between the line and its projection onto the plane. Use right-angled triangle trigonometry.

**Angle between two planes**: Find the line of intersection, then lines in each plane perpendicular to that intersection. The angle between those two perpendiculars is the angle between the planes.

**Strategy**:
1. Draw a clear, well-labelled diagram.
2. Identify the right-angled triangle containing the required angle.
3. Use Pythagoras' theorem to find any unknown lengths in 3D.
4. Use SOHCAHTOA to find the required angle.

---

## 7. Bearings

Bearings are measured:
- **Clockwise** from **North**
- Always given as **three digits**: 045°, 120°, 315°
- They measure the direction **from** one point **to** another.

**Bearings and trigonometry**: Many bearing problems involve constructing a triangle (often right-angled) between points, then using SOHCAHTOA or the sine/cosine rules to find unknown distances or bearings.

**Example**: A ship sails 8 km due East then 6 km due North. Find its bearing from the starting point.
Bearing = tan⁻¹(8/6) from North towards East = tan⁻¹(4/3) ≈ 053.1°.
Written as **053°** (three digits).

---

## Sources

- **BBC Bitesize GCSE Mathematics** — Trigonometric Ratios and Rules, BBC (free educational resource)
- **OpenStax Math** — Trigonometry, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Mathematics 0580** — Trigonometry, Cambridge Assessment International Education
- **CK-12 Mathematics** — Trigonometry, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Geometry]] -- Angle facts, triangle properties, Pythagoras' theorem
- [[Algebra and Graphs]] -- Gradient and tan θ relationship, rearranging formulas
- [[Vectors and Transformations]] -- Vector magnitude and direction
- [[Mensuration]] -- Area = 1/2 ab sin C, 3D Pythagoras for 3D trigonometry
- [[IGCSE-Maths-Index]] -- Full IGCSE Mathematics index

---

## Common Misconceptions

| Students often think... | But the correct understanding is... |
|---|---|
| "SOHCAHTOA works for any triangle" | SOHCAHTOA only applies to **right-angled** triangles. Use sine/cosine rules for others. |
| "The sine rule always gives one answer for an angle" | In the SSA case, there may be **two** possible angles (ambiguous case). Always check. |
| "The cosine rule is only for finding sides" | The rearranged form cos A = (b² + c² − a²)/(2bc) finds angles when all three sides are known. |
| "Bearings are measured anticlockwise" | Bearings are always **clockwise** from North. |
| "sin θ = opposite/hypotenuse in any orientation" | The opposite and adjacent sides are relative to the specific angle being used. Re-label for each angle. |
| "tan 90° = infinity (or a very large number)" | tan 90° is **undefined** (division by zero). |
