# RAM

**Summary**: Random Access Memory -- volatile primary memory that stores data and programs currently in use. Contents are lost when power is turned off. Much faster than secondary storage but more expensive per byte and of limited capacity. Works alongside ROM, cache, and virtual memory.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is RAM?

**Random Access Memory (RAM)** is the main memory of a computer where the operating system, running programs, and current data are held. It is called "random access" because any memory location can be accessed directly (in any order) at roughly the same speed -- unlike sequential access media like magnetic tape.

RAM is **volatile**: it requires power to maintain stored data. When the computer is turned off, the contents of RAM are lost. This is why unsaved work disappears if the power fails.

## Key Properties of RAM

| Property | Description |
|----------|-------------|
| **Volatility** | Volatile -- data lost without power |
| **Access** | Read and write (can be changed) |
| **Speed** | Very fast (nanoseconds per access) -- much faster than HDD/SSD |
| **Capacity** | Typically 4 GB -- 64 GB in modern computers |
| **Cost** | More expensive per byte than secondary storage |
| **Location** | Connected directly to the CPU via the memory bus |

## What is Stored in RAM?

- **Operating system**: Core OS components loaded at boot time
- **Running programs**: Each application is loaded into RAM when launched
- **Open files**: Documents, spreadsheets, images being edited
- **Variables and data structures**: Values used by running programs
- **The stack and heap**: Memory regions for function calls and dynamic allocation

## RAM vs ROM

RAM and ROM are both **primary memory** (directly accessible by the CPU), but serve very different purposes:

| Feature | RAM | ROM |
|---------|-----|-----|
| **Volatility** | Volatile (loses data without power) | Non-volatile (retains data) |
| **Read/Write** | Read and write | Read-only (cannot be changed under normal operation) |
| **Purpose** | Stores currently-running programs and data | Stores firmware/BIOS/bootstrap loader |
| **Capacity** | Much larger (GB) | Much smaller (MB) |
| **Speed** | Generally faster | Generally slower |
| **When accessed** | Continuously during computer use | Mainly at startup (boot sequence) |

### What is in ROM?

- **BIOS (Basic Input/Output System)** or **UEFI firmware**: The first code that runs when the computer powers on
- **Bootstrap loader**: The program that loads the operating system from secondary storage into RAM
- In embedded systems (washing machines, microwaves), ROM stores the entire control program

## Types of RAM

### DRAM (Dynamic RAM)

- The most common type in computers for main memory
- Each bit stored as a charge in a tiny capacitor; charge leaks away, so it must be **refreshed** thousands of times per second
- Slower than SRAM but **much cheaper** per bit and higher density (more capacity)
- **DDR (Double Data Rate)** is the modern standard: DDR4, DDR5

### SRAM (Static RAM)

- Uses flip-flop circuits to store each bit; does not need refreshing
- **Faster** than DRAM (used for CPU cache)
- Much **more expensive** and lower density
- Used for L1, L2, and L3 [[Cache Memory]]

| Feature | DRAM | SRAM |
|---------|------|------|
| Speed | Slower | Faster |
| Cost | Cheap | Expensive |
| Density | High (more bytes per chip) | Low |
| Refresh needed | Yes (thousands of times/sec) | No |
| Typical use | Main memory (RAM sticks) | CPU cache |

## Virtual Memory

When RAM is **full**, the operating system can use part of the hard disk or SSD as an extension -- this is called **virtual memory**.

### How It Works

1. The OS divides memory into fixed-size blocks called **pages** (typically 4 KB each)
2. When RAM is full, less-frequently-used pages are moved to a special area on the hard disk called the **swap file** or page file
3. When a program needs a page that was swapped out, it is moved back into RAM (swapping out another page if necessary)

### Consequences of Virtual Memory

| Advantage | Disadvantage |
|-----------|--------------|
| Allows running more/larger programs than physical RAM would permit | Hard disk is ~100,000x slower than RAM |
| Prevents crashes when RAM is full | Heavy swapping causes severe slowdown |
| Enables multitasking on memory-limited systems | Can wear out SSDs (limited write cycles) |

**Thrashing** occurs when the system spends more time swapping pages between RAM and disk than actually executing programs. The computer becomes extremely sluggish -- the disk light stays on constantly, and the mouse/keyboard barely respond. Thrashing indicates a critical shortage of RAM.

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Memory and Storage, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Hardware, Cambridge Assessment International Education
- **CK-12 Computer Science** — Memory Systems, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[ROM]] -- Non-volatile read-only memory for firmware
- [[Virtual Memory]] -- Using disk as an extension of RAM
- [[Cache Memory]] -- CPU's high-speed local memory (SRAM-based)
- [[Von Neumann Architecture]] -- The architecture where RAM stores both instructions and data
- [[Operating System]] -- Manages memory allocation and virtual memory
- [[SSD]] -- Solid-state secondary storage
- [[HDD]] -- Magnetic secondary storage
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "RAM is the computer's permanent storage" | RAM is volatile -- its contents are lost when power is turned off. Permanent storage is HDD or SSD. |
| "More RAM always makes the computer faster" | More RAM helps only if the current workload exceeds available RAM. If you have 32 GB but only use 4 GB, adding more has no effect. |
| "Virtual memory is a good substitute for real RAM" | Virtual memory is an emergency fallback, not a replacement. It is orders of magnitude slower than real RAM. |
| "RAM and ROM are the same type of chip" | They are fundamentally different technologies. RAM must be fast and writable; ROM must be non-volatile and stable. |
| "RAM is the same as storage (hard drive space)" | RAM is working memory (volatile, fast, expensive per GB). Storage is long-term (non-volatile, slower, cheap per GB). |
