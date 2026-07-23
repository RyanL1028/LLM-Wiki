# Von Neumann Architecture

**Summary**: The foundational computer architecture where program instructions and data share the same memory and buses. Based on the stored program concept, it uses a set of registers (MAR, MDR, PC, ACC, CIR) and three buses (address, data, control) to execute instructions. Used by almost all modern general-purpose computers.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## The Stored Program Concept

The defining idea of Von Neumann architecture is the **stored program concept**: a program's instructions and its data are both stored in the **same main memory** (RAM). Before this, computers like ENIAC had to be physically rewired to change programs.

Key implications of the stored program concept:

- Programs are just data -- they can be loaded from storage, modified by other programs, or generated at runtime
- The CPU does not distinguish between instructions and data; it treats both as binary numbers in memory
- A single set of buses connects CPU to memory for both instructions and data (the **Von Neumann bottleneck** -- the bus can only carry one thing at a time)
- Changing what the computer does is as simple as loading a different program into memory

## Core Registers

Von Neumann architecture defines a specific set of registers that work together during the fetch-execute cycle:

### Program Counter (PC)

Holds the **memory address of the next instruction** to be fetched. After each fetch, the PC is incremented to point to the next instruction (unless a jump/branch instruction changes it).

### Memory Address Register (MAR)

Holds the **address** in memory that the CPU wants to read from or write to. Before reading from RAM, the address is placed in the MAR. Before writing to RAM, the destination address is placed in the MAR.

### Memory Data Register (MDR)

Holds the **actual data** that has been read from memory (or is about to be written to memory). Sometimes called the Memory Buffer Register (MBR).

- On a read: data from the memory location (specified by MAR) is placed into MDR
- On a write: data to be stored is placed into MDR, then written to the address in MAR

### Current Instruction Register (CIR)

Holds the **current instruction** being executed. After an instruction is fetched from memory (into MDR), it is copied into the CIR where the Control Unit decodes it. The CIR contains both the opcode (what to do) and the operand (what to do it with, usually an address or data value).

### Accumulator (ACC)

Holds the **results of calculations** performed by the ALU. When the ALU performs an arithmetic or logic operation, the result is stored in the ACC. The ACC can also hold data before it is used in a calculation.

## The System Buses

A **bus** is a set of parallel wires that carry data between components. Von Neumann architecture uses three buses:

| Bus | Direction | Purpose |
|-----|-----------|---------|
| **Address Bus** | CPU → Memory (one-way) | Carries the memory address the CPU wants to read/write. The **width** of the address bus determines how much memory can be addressed (e.g., 32-bit address bus can address 2³² = ~4 GB of memory). |
| **Data Bus** | CPU ↔ Memory (two-way) | Carries the actual data being transferred. The **width** of the data bus determines how much data can be transferred per cycle (e.g., 64-bit data bus transfers 8 bytes at a time). |
| **Control Bus** | CPU ↔ Components (two-way) | Carries control signals: read/write signals, timing/clock signals, interrupt requests, bus requests. |

## How the Components Connect

```
+-------------------------------------------------------+
|                        CPU                            |
|  +--------+  +--------+  +-------------------------+  |
|  |   PC   |  |  MAR   |  |                         |  |
|  +--------+  +--------+  |      Control Unit       |  |
|  +--------+  +--------+  |                         |  |
|  |  ACC   |  |  MDR   |  |  (decodes, coordinates) |  |
|  +--------+  +--------+  |                         |  |
|  +--------+               +-------------------------+  |
|  |  CIR   |                                            |
|  +--------+  +--------+                               |
|              |   ALU  |                               |
|              +--------+                               |
+-------------------------------------------------------+
        |              |              |
   Address Bus    Data Bus     Control Bus
        |              |              |
+-------------------------------------------------------+
|                    Main Memory (RAM)                   |
|  Stores both program instructions and data            |
+-------------------------------------------------------+
```

## Von Neumann vs Harvard Architecture

| Feature | Von Neumann | Harvard |
|---------|-------------|---------|
| Memory | Single memory for instructions and data | Separate memories for instructions and data |
| Buses | Shared buses (bottleneck) | Separate buses (no bottleneck) |
| Speed | Slower -- instructions and data compete for bus | Faster -- simultaneous access possible |
| Complexity | Simpler design, cheaper | More complex, more expensive |
| Use | General-purpose computers (PCs, laptops, servers) | Embedded systems, DSPs, microcontrollers |

## The Von Neumann Bottleneck

The shared bus between CPU and memory means that instructions and data **cannot be fetched simultaneously** -- they compete for the same bus. This limits performance, especially as CPU speeds have grown faster than memory speeds. Modern solutions include:

- **Cache memory**: Keeps frequently used data and instructions close to the CPU
- **Pipelining**: Overlapping the fetch, decode, and execute stages for different instructions
- **Harvard architecture for caches**: Modern CPUs often split L1 cache into separate instruction and data caches, while using Von Neumann for main memory

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Von Neumann Architecture, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Hardware, Cambridge Assessment International Education
- **CK-12 Computer Science** — Computer Architecture, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[CPU]] -- The processor built on Von Neumann architecture
- [[Fetch-Execute Cycle]] -- How the CPU uses these registers to execute instructions
- [[MAR]] -- Memory Address Register in detail
- [[MDR]] -- Memory Data Register in detail
- [[Program Counter]] -- PC and its role in sequencing
- [[ACC]] -- Accumulator and ALU results
- [[CIR]] -- Current Instruction Register
- [[RAM]] -- Main memory in Von Neumann systems
- [[Cache Memory]] -- Mitigating the Von Neumann bottleneck
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Von Neumann architecture means the CPU is made by a specific company" | It is a conceptual architectural model, not a product or brand. Almost all CPUs (Intel, AMD, ARM) are based on it regardless of manufacturer. |
| "Instructions and data are stored separately" | In Von Neumann, they share the same memory. This is the key difference from Harvard architecture. |
| "The MDR and CIR are the same thing" | The MDR holds data from/to memory temporarily. The CIR holds the instruction currently being decoded/executed. |
| "The address bus carries data" | The address bus carries memory addresses only. The data bus carries the actual data values. |
| "All registers are the same size" | Different registers serve different purposes and may be different sizes (e.g., PC is the width of the address bus; ACC is the width of the data bus). |
