# Binary

**Summary**: A base-2 number system using only 0 and 1, the fundamental numbering system used by computers to represent all data and instructions. Each binary digit (bit) represents a power of 2.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is Binary?

Binary is a **base-2** number system. Unlike the **denary** (decimal, base-10) system that humans use in everyday life -- which has ten digits (0--9) -- binary uses only two digits: **0** and **1**. Each binary digit is called a **bit** (short for binary digit).

Computers use binary because their fundamental building blocks -- transistors -- have only two reliable states: **on** (1) and **off** (0). All data inside a computer -- numbers, text, images, sound, video, programs -- is ultimately stored and processed as sequences of bits.

## Place Values

In denary, each place is a power of 10: ... 1000, 100, 10, 1. In binary, each place is a power of 2:

| 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
|----|----|----|----|----|----|----|----|
| **128** | **64** | **32** | **16** | **8** | **4** | **2** | **1** |

Each position moving left doubles in value. The rightmost bit is the **least significant bit** (LSB); the leftmost is the **most significant bit** (MSB).

## Converting Binary to Denary

To convert a binary number to denary, add up the place values wherever there is a 1.

**Example**: Convert `1011 0101` to denary.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|---|---|---|---|
| 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |

128 + 32 + 16 + 4 + 1 = **181**

**Example**: Convert `0100 1100` to denary.

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|---|---|---|---|
| 0 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |

64 + 8 + 4 = **76**

## Converting Denary to Binary

**Method**: Repeatedly divide the denary number by 2. Read the remainders from **bottom to top**.

**Example**: Convert 109 to binary.

| Division | Quotient | Remainder |
|----------|----------|-----------|
| 109 / 2 | 54 | 1 (LSB) |
| 54 / 2 | 27 | 0 |
| 27 / 2 | 13 | 1 |
| 13 / 2 | 6 | 1 |
| 6 / 2 | 3 | 0 |
| 3 / 2 | 1 | 1 |
| 1 / 2 | 0 | 1 (MSB) |

Reading remainders bottom to top: **0110 1101** (109 in an 8-bit register).

**Alternative method**: Subtract the largest power of 2 that fits. For 109: 109 - 64 = 45 (place a 1 at 64), 45 - 32 = 13 (1 at 32), 13 - 8 = 5 (1 at 8), 5 - 4 = 1 (1 at 4), 1 - 1 = 0 (1 at 1). Result: 1 at 64, 32, 8, 4, 1 -- giving `0110 1101`.

## Binary Addition

Binary addition follows four simple rules:

| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 (carry 1 to next column) |
| 1 + 1 + carry-in of 1 | -- | 1 | 1 |

**Example**: Add `0110 1010` (106) and `0011 1100` (60).

```
  0110 1010
+ 0011 1100
------------
  1010 0110
```
Result: `1010 0110` = 128 + 32 + 4 + 2 = **166** (correct: 106 + 60 = 166).

## Overflow

An **overflow error** occurs when the result of a binary addition requires more bits than the register can hold. For example, adding two 8-bit numbers that produce a 9-bit result.

**Example**: In an 8-bit register, add `1110 0110` (230) and `0011 0010` (50).

```
  1110 0110
+ 0011 0010
------------
1 0001 1000
```
The result requires 9 bits. The leftmost 1 is lost because the register can only store 8 bits, so the stored result is `0001 1000` (24) -- clearly incorrect. This is an overflow error.

Overflow is a common source of bugs in low-level programming and explains why integer types in programming languages have maximum values (e.g., a signed 8-bit integer can hold -128 to +127).

## Why Computers Use Binary

1. **Transistor states**: Transistors -- the fundamental switches in a CPU -- naturally have two states: conducting (on/1) and non-conducting (off/0). Binary maps directly to hardware.
2. **Noise immunity**: With only two voltage levels (e.g., 0V and 5V), small fluctuations in voltage do not cause misinterpretation. A system using ten voltage levels would be far more susceptible to noise.
3. **Simple logic**: Boolean algebra and logic gates (AND, OR, NOT) operate on true/false values, which map naturally to 1 and 0.
4. **Reliable storage**: Magnetic and optical media can reliably represent two states (magnetised/not magnetised, pit/land).

## Binary Terminology

| Term | Meaning |
|------|---------|
| **Bit** | A single binary digit (0 or 1) |
| **Nibble** | 4 bits (half a byte) |
| **Byte** | 8 bits -- the standard unit of memory |
| **Kilobyte (KB)** | 1024 bytes (2¹⁰) |
| **Megabyte (MB)** | 1024 KB (2²⁰ bytes) |
| **Gigabyte (GB)** | 1024 MB (2³⁰ bytes) |
| **Terabyte (TB)** | 1024 GB (2⁴⁰ bytes) |
| **Word** | The natural unit of data for a CPU (e.g., 32-bit or 64-bit) |

## Binary in Context

- **8-bit register** can hold values from 0 to 255 (0000 0000 to 1111 1111)
- **16-bit register**: 0 to 65,535
- **32-bit register**: 0 to ~4.3 billion
- **Signed integers** use the most significant bit to represent the sign (see [[Two's Complement]])

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Data Representation: Binary, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Data Representation, Cambridge Assessment International Education
- **CK-12 Computer Science** — Number Systems, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Denary]] -- Base-10 number system used by humans
- [[Hexadecimal]] -- Base-16, compact representation of binary
- [[Binary Addition]] -- Detailed addition rules and examples
- [[Overflow Error]] -- When results exceed register capacity
- [[Two's Complement]] -- Representing negative numbers in binary
- [[Logical Shift]] -- Multiplying and dividing by powers of 2
- [[Data Compression]] -- Reducing file sizes of binary data
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Binary is a separate language computers speak" | Binary is a number system, not a language. All data and instructions are encoded as binary numbers. |
| "More bits always means a larger number" | More bits means a larger **range** of values that can be represented, not that every value is larger. |
| "1 KB = 1000 bytes exactly" | In computing, 1 KB = 1024 bytes (2¹⁰). Hard drive manufacturers sometimes use 1000, which is why a "1 TB" drive shows as ~931 GB in the OS. |
| "Overflow is the same as a carry" | A carry is normal (e.g., 1 + 1 = 10 in binary). Overflow means the result cannot fit in the allocated number of bits at all. |
| "Binary addition is just like denary addition but slower" | The rules are simpler (only 4 cases) but conceptually identical -- it is positional addition in base-2 rather than base-10. |
