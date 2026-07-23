# Hexadecimal

**Summary**: A base-16 number system using digits 0--9 and letters A--F, providing a compact, human-readable way to represent binary values. Widely used in computing for memory addresses, colour codes, MAC addresses, and error messages.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is Hexadecimal?

Hexadecimal (often shortened to **hex**) is a **base-16** number system. It uses 16 symbols:

| Hex Digit | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
|-----------|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Denary Value | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |

Each hex digit represents exactly **4 bits** (a nibble), making conversion between hex and binary trivially simple. One byte can be expressed as exactly **two hex digits**.

## Why Use Hexadecimal?

1. **Compact**: A 32-bit binary number like `1101 0011 1010 1100 0101 1111 0001 0110` becomes the much shorter `D3AC5F16`.
2. **Easy binary conversion**: Each hex digit maps directly to a 4-bit binary group -- no calculation needed.
3. **Less error-prone**: Humans are far less likely to misread or mistype a hex string than a long binary string.
4. **Industry standard**: Used universally for memory addresses, colour values, MAC addresses, error codes, and assembly language.

## Converting Hex to Denary

Multiply each hex digit by its place value (powers of 16).

**Place values**: ... 4096 (16³), 256 (16²), 16 (16¹), 1 (16⁰)

**Example**: Convert `2F3` to denary.

| Hex digit | Place | Value |
|-----------|-------|-------|
| 2 | 256 (16²) | 2 × 256 = 512 |
| F (15) | 16 (16¹) | 15 × 16 = 240 |
| 3 | 1 (16⁰) | 3 × 1 = 3 |

Total: 512 + 240 + 3 = **755**

## Converting Denary to Hex

Repeatedly divide by 16; read remainders bottom to top (converting 10--15 to A--F).

**Example**: Convert 477 to hex.

| Division | Quotient | Remainder |
|----------|----------|-----------|
| 477 / 16 | 29 | 13 → **D** |
| 29 / 16 | 1 | 13 → **D** |
| 1 / 16 | 0 | 1 → **1** |

Result (bottom to top): **1DD**

## Converting Hex to Binary (and vice versa)

Each hex digit splits into exactly 4 bits and vice versa.

**Hex to Binary**: Replace each hex digit with its 4-bit equivalent.

| Hex | Binary | | Hex | Binary |
|-----|--------|---|-----|--------|
| 0 | 0000 | | 8 | 1000 |
| 1 | 0001 | | 9 | 1001 |
| 2 | 0010 | | A | 1010 |
| 3 | 0011 | | B | 1011 |
| 4 | 0100 | | C | 1100 |
| 5 | 0101 | | D | 1101 |
| 6 | 0110 | | E | 1110 |
| 7 | 0111 | | F | 1111 |

**Example**: Convert `5B9` to binary.

5 → 0101, B → 1011, 9 → 1001 → **0101 1011 1001**

**Binary to Hex**: Group bits into nibbles (4 bits each) from the right, then convert each group.

**Example**: Convert `1101 0110 0011` to hex.

1101 → D, 0110 → 6, 0011 → 3 → **D63**

## Common Uses of Hexadecimal

| Use | Example | Why Hex? |
|-----|---------|----------|
| **Colour codes** | `#FF5733` (RGB: 255, 87, 51) | Two hex digits per colour channel (00--FF = 0--255) |
| **MAC addresses** | `A4:B1:C2:D3:E4:F5` | 48-bit address expressed as 6 pairs of hex digits |
| **Memory addresses** | `0x7FFF5C00` | Compact representation of large memory locations |
| **Error codes** | `0x80070002` | System error codes are often displayed in hex |
| **Machine code / assembly** | `B8 01 00 00 00` | Opcodes and operands written in hex |
| **IPv6 addresses** | `2001:0db8:85a3::8a2e:0370:7334` | IPv6 addresses use hex to keep them manageable |
| **Debugging / hex dumps** | `48 65 6C 6C 6F` | Inspecting raw binary file contents |

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Data Representation: Hexadecimal, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Data Representation, Cambridge Assessment International Education
- **CK-12 Computer Science** — Number Systems, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Binary]] -- Base-2 number system; hex is its compact representation
- [[Denary]] -- Base-10; the everyday number system
- [[MAC Address]] -- 48-bit hardware address expressed in hex
- [[IP Address]] -- IPv6 uses hex notation
- [[Bitmap Image]] -- Colour depths often expressed in hex
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Hex is a different type of data from binary" | Hex is simply a notation -- a way of writing a number. The underlying value is the same; the data stored is still binary. |
| "A, B, C, D, E, F are random letters" | They are digit symbols representing denary values 10--15. They were chosen because they are the first six letters of the alphabet. |
| "Hex is only used for colours" | Colour codes are one of many uses. Hex is used throughout computing wherever binary values need to be read or written by humans. |
| "You need to convert hex to denary, then to binary" | The direct hex-binary conversion (4 bits per hex digit) is far simpler -- no arithmetic needed. |
