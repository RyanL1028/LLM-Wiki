# CPU

**Summary**: Central Processing Unit -- the "brain" of the computer that processes instructions and controls the flow of data. Executes the fetch-decode-execute cycle and contains the ALU, Control Unit, and registers. Performance depends on clock speed, number of cores, and cache size.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is a CPU?

The **Central Processing Unit (CPU)** is the primary component of a computer that carries out instructions from programs. It is a microprocessor -- an integrated circuit containing millions (or billions) of transistors on a single silicon chip.

The CPU processes data by repeatedly performing the **fetch-decode-execute cycle** (also called the instruction cycle), fetching instructions from memory, decoding what they mean, and executing them. This cycle runs billions of times per second in modern CPUs.

## Main Components of the CPU

### Arithmetic Logic Unit (ALU)

The ALU performs two types of operations:

- **Arithmetic operations**: Addition, subtraction, multiplication, division
- **Logic operations**: AND, OR, NOT, XOR -- bitwise comparisons used for decision-making

The ALU takes input from registers, performs the required operation, and stores the result back in a register (usually the [[ACC]]).

### Control Unit (CU)

The Control Unit is the "conductor" of the CPU. It:

- **Directs the flow of data** between the CPU and other components (memory, input/output)
- **Decodes instructions** fetched from memory to determine what operation to perform
- **Generates timing and control signals** to coordinate all parts of the CPU
- **Controls the fetch-decode-execute cycle** by sending signals to the appropriate components at the correct time

The CU does **not** execute instructions itself -- it tells other components what to do.

### Registers

Registers are **high-speed memory locations** inside the CPU. They hold data, instructions, and addresses that the CPU is currently working on. Registers are much faster than RAM but far fewer in number.

Key registers in the IGCSE syllabus:

| Register | Full Name | Purpose |
|----------|-----------|---------|
| **PC** | Program Counter | Holds the memory address of the **next** instruction to fetch |
| **MAR** | Memory Address Register | Holds the memory address currently being read from or written to |
| **MDR** | Memory Data Register | Holds the data that has been read from memory or is about to be written |
| **CIR** | Current Instruction Register | Holds the current instruction being decoded and executed |
| **ACC** | Accumulator | Holds the results of calculations performed by the ALU |

See [[Von Neumann Architecture]] and [[Fetch-Execute Cycle]] for how these registers work together.

## Von Neumann Architecture

Most modern CPUs use **Von Neumann architecture**, named after mathematician John von Neumann. Its defining feature is the **stored program concept**: both program instructions and data are stored in the **same** memory, sharing the same buses. This means the CPU treats instructions and data identically -- they are both just binary numbers in memory.

The alternative is **Harvard architecture**, which uses separate memory and buses for instructions and data (used in some embedded systems and DSPs).

## Factors Affecting CPU Performance

### Clock Speed

The **clock** is an electronic oscillator that produces a regular signal (a square wave) that synchronises all CPU operations. Each "tick" triggers one step of the fetch-execute cycle.

- Measured in **Hertz (Hz)** -- cycles per second
- Modern CPUs: typically **2--5 GHz** (2--5 billion cycles per second)
- **Higher clock speed = more cycles per second = more instructions executed per second**

However, clock speed is not the only factor. A CPU with a lower clock speed but better architecture can outperform one with a higher clock speed.

### Number of Cores

A **core** is a complete processing unit within the CPU (with its own ALU, CU, and registers). A **multi-core** CPU contains multiple cores on a single chip.

- **Dual-core** (2 cores), **quad-core** (4 cores), **hexa-core** (6 cores), **octa-core** (8 cores)
- Multiple cores allow true **parallel processing** -- executing multiple instructions simultaneously on different cores
- **Limitation**: Software must be written to take advantage of multiple cores. A program designed for single-core execution will not run faster on a multi-core CPU.

### Cache Memory

Cache is a small amount of **very fast memory** located on or very close to the CPU.

- **Level 1 (L1)**: Fastest, smallest (~64 KB per core), on the CPU
- **Level 2 (L2)**: Slightly slower, larger (~256 KB--512 KB per core)
- **Level 3 (L3)**: Shared across all cores, largest (~2--32 MB)

Cache stores **frequently accessed data and instructions**. When the CPU needs data, it checks cache first (fast). If the data is not in cache (a "cache miss"), it must fetch from RAM (much slower).

- **Larger cache = fewer trips to RAM = better performance**

### Other Factors

- **Word size**: 64-bit CPUs can process more data per cycle than 32-bit CPUs
- **Instruction set architecture**: Advanced instruction sets (e.g., SIMD) can process multiple data with one instruction
- **Thermal management**: CPUs throttle (slow down) if they overheat

---

## Sources

- **BBC Bitesize GCSE Computer Science** — CPU Architecture, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Hardware, Cambridge Assessment International Education
- **CK-12 Computer Science** — Computer Architecture, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Fetch-Execute Cycle]] -- How the CPU processes each instruction
- [[Von Neumann Architecture]] -- The architectural model most CPUs follow
- [[ALU]] -- Arithmetic Logic Unit in detail
- [[Control Unit]] -- The CU's role in coordinating operations
- [[Register]] -- Detailed treatment of CPU registers
- [[Clock Speed]] -- How clock speed affects performance
- [[Cache Memory]] -- The CPU's high-speed local memory
- [[Core]] -- Multi-core processors and parallel execution
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "The CPU is the only processor in a computer" | Modern computers have many specialised processors: GPU (graphics), DSP (audio), NPU (AI/neural), and microcontrollers in peripherals. |
| "More GHz always means a faster computer" | Clock speed comparisons are only meaningful between CPUs of the same architecture. A 3 GHz CPU from 2010 is far slower than a 3 GHz CPU from 2024 due to architectural improvements. |
| "The CPU stores all the computer's data" | The CPU has only a tiny amount of storage (registers and cache). Most data is stored in RAM and secondary storage. |
| "More cores means everything runs faster" | Only software specifically designed for multi-threading benefits. Many tasks are inherently sequential and cannot be parallelised. |
| "The ALU does everything" | The ALU only performs arithmetic and logic. The Control Unit manages the sequence of operations. Neither can function without the other. |
