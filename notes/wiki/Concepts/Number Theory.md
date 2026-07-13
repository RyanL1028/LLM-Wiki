# Number Theory

**Summary**: Number theory explores the properties of integers, including factors, multiples, primes, prime factorisation, highest common factor, lowest common multiple, and divisibility rules.
**Tags**: #concepts #math #y7 #number-theory #primes
**Created**: 2026-05-30
**Last Updated**: 2026-05-30

---

## Content

<style>
.math-box { background: #f0f4ff; border-left: 4px solid #4f46e5; padding: 12px 16px; margin: 12px 0; border-radius: 0 8px 8px 0; }
.math-box strong { color: #4338ca; }
</style>

### Key Definitions

A **multiple** of a number is the result of multiplying that number by an integer. For example, the first four multiples of 7 are 7, 14, 21, 28.

A **factor** of a number is an integer that divides exactly into that number with no remainder. For example, the factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24.

A **prime number** has exactly two distinct factors: 1 and itself. The number 1 is NOT prime because it has only one factor.

### Divisibility Rules

These quick checks determine whether one number divides exactly into another:

| Divisor | Rule |
|---------|------|
| 2 | The last digit is even (0, 2, 4, 6, 8) |
| 3 | The sum of the digits is divisible by 3 |
| 4 | The last two digits form a number divisible by 4 |
| 5 | The last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 8 | The last three digits form a number divisible by 8 |
| 9 | The sum of the digits is divisible by 9 |
| 10 | The last digit is 0 |
| 11 | The alternating sum of digits is divisible by 11 |

<div class="math-box">
<strong>Example:</strong> Is 528 divisible by 3? Sum of digits = 5 + 2 + 8 = 15. 15 is divisible by 3, so 528 is divisible by 3.
</div>

### Prime Factorisation

Every integer greater than 1 can be written as a unique product of prime numbers. This is called its **prime factorisation**.

Two methods to find the prime factorisation:
- **Factor tree:** Repeatedly split the number into factor pairs until only primes remain
- **Repeated division:** Divide by the smallest prime factor repeatedly

<div class="math-box">
<strong>Example:</strong> Express 36 as a product of prime factors in index form. 36 = 2 × 2 × 3 × 3 = 2² × 3².
</div>

### Highest Common Factor (HCF)

The **HCF** of two or more numbers is the largest number that divides exactly into all of them.

**Method 1 — Listing:** List all factors of each number, find the largest common one.

<div class="math-box">
<strong>Example:</strong> HCF of 18 and 30. Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 30: 1, 2, 3, 5, 6, 10, 15, 30. HCF = 6.
</div>

**Method 2 — Prime factorisation:** Write each number as a product of primes, take the lowest power of each common prime.

### Lowest Common Multiple (LCM)

The **LCM** of two or more numbers is the smallest number that is a multiple of all of them.

**Method 1 — Listing:** List multiples of each number until you find a common one.

<div class="math-box">
<strong>Example:</strong> LCM of 8 and 12. Multiples of 8: 8, 16, 24, 32, 40... Multiples of 12: 12, 24, 36... LCM = 24.
</div>

**Method 2 — Prime factorisation:** Write each number as a product of primes, take the highest power of each prime present.

### Properties from Prime Factorisation

A number expressed as 2ᵃ × 3ᵇ × 5ᶜ × ... has specific properties:
- The total number of factors = (a+1)(b+1)(c+1)...
- A factor of a number uses prime factors with exponents ≤ those in the factorisation
- A multiple of a number must include all prime factors with at least those exponents

### Solving Problems with HCF and LCM

- **HCF problems:** Splitting items into equal groups, finding the largest possible group size
- **LCM problems:** Finding when events coincide, synchronisation of repeating patterns

<div class="math-box">
<strong>Example (LCM):</strong> Two buses leave at 8am. Bus A returns every 12 min, Bus B every 18 min. When will both be at the station together again? LCM of 12 and 18 is 36, so at 8:36am.
</div>

## Related Notes

- [[Fractions]]
- [[Rounding and Approximation]]
- [[Algebraic Expressions]]
