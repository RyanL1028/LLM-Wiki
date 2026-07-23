# Rounding and Approximation

**Summary**: Rounding simplifies numbers while keeping them close to the original value. Key methods include rounding to decimal places, significant figures, and the nearest 10/100/1000, plus estimation by rounding.
**Tags**: #concepts #math #y7 #rounding #approximation
**Created**: 2026-05-30
**Last Updated**: 2026-05-30

---

## Content

<style>
.math-box { background: #f0f4ff; border-left: 4px solid #4f46e5; padding: 12px 16px; margin: 12px 0; border-radius: 0 8px 8px 0; }
.math-box strong { color: #4338ca; }
</style>

### Rounding to the Nearest 10, 100, or 1000

To round a number, look at the digit immediately to the right of the place value you are rounding to:

- **If the next digit is 5 or more:** round up
- **If the next digit is 4 or less:** round down (keep the same)

<div class="math-box">
<strong>Examples:</strong><br>
347 to nearest 10 → the 4 is followed by 7 (≥5), so round up → <strong>350</strong><br>
2847 to nearest 100 → the 8 is followed by 4 (<5), so round down → <strong>2800</strong><br>
7621 to nearest 1000 → the 7 is followed by 6 (≥5), so round up → <strong>8000</strong>
</div>

### Rounding to Decimal Places

Rounding to a specific number of decimal places follows the same principle: look at the digit one place beyond your target.

<div class="math-box">
<strong>Examples:</strong><br>
3.14159 to 2 dp → look at the third decimal (1) which is <5 → <strong>3.14</strong><br>
7.486 to 1 dp → look at the second decimal (8) which is ≥5 → <strong>7.5</strong><br>
0.095 to 2 dp → look at the third decimal (5) which is ≥5 → <strong>0.10</strong>
</div>

Note that 0.10 is written with the trailing zero to show it is accurate to 2 decimal places.

### Rounding to Significant Figures

**Significant figures** count from the first non-zero digit. Leading zeros are not significant.

**Rules for identifying significant figures:**
1. All non-zero digits are significant
2. Zeros between non-zero digits are significant
3. Trailing zeros after a decimal point are significant
4. Leading zeros are NOT significant

<div class="math-box">
<strong>Examples:</strong><br>
4628 to 1 sf → first digit is 4, next is 6 (≥5) → <strong>5000</strong><br>
0.00582 to 1 sf → first non-zero is 5, next is 8 (≥5) → <strong>0.006</strong><br>
37.49 to 2 sf → first two: 3, 7. Next is 4 (<5) → <strong>37</strong>
</div>

### Estimation

**Estimation** uses rounded numbers to find an approximate answer quickly. This is useful for checking whether a calculated answer is reasonable.

**Method:**
1. Round each number in the calculation to 1 significant figure
2. Perform the simplified calculation

<div class="math-box">
<strong>Example:</strong> Estimate 48 × 31. Round 48 → 50 and 31 → 30. 50 × 30 = <strong>1500</strong>. (The exact answer is 1488, so 1500 is a good estimate.)
</div>

### Error Intervals (Bounds)

When a number has been rounded, the original value could have been anywhere within a certain range. The **lower bound** is the smallest possible original value. The **upper bound** is the largest possible original value.

For a measurement rounded to a given unit, the error interval is ± half of that unit.

<div class="math-box">
<strong>Example:</strong> A length is given as 6.3 cm to 1 decimal place. Lower bound = 6.25 cm, Upper bound = 6.35 cm. The true length is somewhere in the interval 6.25 ≤ x < 6.35.
</div>

### Key Points to Remember

- Always read the question carefully to identify which type of rounding is required
- "To 2 dp" means to 2 decimal places
- "To 1 sf" means to 1 significant figure
- Rounding up may cause a cascade (e.g. 3.996 → 4.0 to 1 dp)
- Estimation is a powerful way to check if an answer makes sense

## Related Notes

- [[Fractions]]
- [[Number Theory]]
- [[Algebraic Expressions]]
