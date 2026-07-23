# Fetch-Execute Cycle

**Summary**: The continuous 5-step cycle (FETCH, DECODE, EXECUTE) through which the CPU processes every instruction. Involves specialised registers (PC, MAR, MDR, CIR, ACC) and runs billions of times per second in modern processors.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## Overview

The **fetch-execute cycle** (also called the instruction cycle or fetch-decode-execute cycle) is the fundamental process by which the CPU processes a single instruction. Every program -- from a simple calculator to an operating system -- runs as a sequence of these cycles, each processing one instruction at a time.

The cycle has three main stages: **FETCH**, **DECODE**, and **EXECUTE**. Some models split this into five sub-steps, which we detail below.

## The Five-Step Cycle

### Step 1: FETCH (Address to MAR)

The **Program Counter (PC)** contains the memory address of the next instruction. This address is copied into the **Memory Address Register (MAR)**.

```
PC → MAR
```

The PC is then **incremented** so it points to the next instruction in sequence (unless the current instruction is a jump/branch, which will overwrite the PC later).

### Step 2: FETCH (Instruction to MDR and CIR)

The CPU sends a **read signal** along the control bus. The memory at the address in the MAR places the instruction onto the data bus. This instruction is copied into the **Memory Data Register (MDR)**, and then into the **Current Instruction Register (CIR)**.

```
Memory[MAR] → MDR → CIR
```

At this point, the instruction has been fully fetched. The CIR now holds the instruction to be processed.

### Step 3: DECODE

The **Control Unit (CU)** decodes the instruction in the CIR. The instruction consists of:

- **Opcode**: The operation to perform (e.g., ADD, LOAD, STORE, JUMP)
- **Operand**: The data or address the operation acts on

The CU interprets the opcode and determines what signals to send to which components.

### Step 4: EXECUTE

The **Arithmetic Logic Unit (ALU)** or other components carry out the instruction:

- **Arithmetic**: ALU performs the calculation; result placed in the ACC
- **Load from memory**: Address placed in MAR → data fetched into MDR → copied to a register
- **Store to memory**: Address placed in MAR, data placed in MDR → write signal sent
- **Jump/Branch**: New address loaded into PC (overriding the automatic increment)
- **Input/Output**: Data transferred between CPU and I/O devices

### Step 5: RESET (and Repeat)

The cycle resets. The PC now points to the next instruction (unless a jump changed it). The next cycle begins with Step 1.

## Register Roles During the Cycle

| Register | Role During Fetch-Execute |
|----------|--------------------------|
| **PC** | Holds address of next instruction; incremented after each fetch |
| **MAR** | Holds the memory address being accessed (set from PC during fetch) |
| **MDR** | Holds data/instruction moving between memory and CPU |
| **CIR** | Holds current instruction for decoding |
| **ACC** | Holds ALU results after execution |

## Worked Example: LOAD 45

Suppose the instruction at address 100 in memory is `LOAD 45` (load the value from memory address 45 into the accumulator).

| Step | Action | Registers |
|------|--------|-----------|
| **Fetch** | PC (100) → MAR. PC increments to 101. | MAR=100, PC=101 |
| **Fetch** | Memory[100] → MDR → CIR | MDR=`LOAD 45`, CIR=`LOAD 45` |
| **Decode** | CU sees "LOAD" opcode and operand "45" | -- |
| **Execute** | 45 → MAR. Memory[45] → MDR → ACC | MAR=45, MDR=value, ACC=value |
| **Reset** | PC now holds 101; next cycle begins | -- |

## Worked Example: ADD 46

Continuing from above, instruction at address 101 is `ADD 46` (add the value at address 46 to the accumulator).

| Step | Action | Result |
|------|--------|--------|
| **Fetch** | PC (101) → MAR. PC increments to 102. | MAR=101 |
| **Fetch** | Memory[101] → MDR → CIR | CIR=`ADD 46` |
| **Decode** | CU sees "ADD" opcode and operand "46" | -- |
| **Execute** | 46 → MAR. Memory[46] → MDR. ALU adds MDR to ACC | ACC = old value + value from address 46 |
| **Reset** | PC now holds 102 | -- |

## Speed of the Cycle

- A CPU with a **3 GHz** clock speed completes 3 billion cycles per second
- Not every cycle stage completes in one clock tick -- complex instructions may take multiple ticks
- **Pipelining**: Modern CPUs overlap the stages (while one instruction executes, the next is being decoded, and the one after is being fetched)
- This means a pipelined 3 GHz CPU can effectively complete close to 3 billion instructions per second

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Fetch-Execute Cycle, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Hardware, Cambridge Assessment International Education
- **CK-12 Computer Science** — Computer Architecture, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[CPU]] -- The processor that runs the fetch-execute cycle
- [[Von Neumann Architecture]] -- The architecture defining the registers and buses used
- [[Control Unit]] -- Decodes instructions during the DECODE stage
- [[ALU]] -- Performs operations during the EXECUTE stage
- [[Program Counter]] -- Points to the next instruction to fetch
- [[MAR]] -- Holds memory addresses during fetches
- [[MDR]] -- Holds fetched/stored data
- [[Clock Speed]] -- Determines how many cycles per second
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "The PC holds the current instruction" | The PC holds the address of the **next** instruction to be fetched. The **CIR** holds the current instruction being decoded/executed. |
| "Each instruction takes exactly one clock cycle" | Only the simplest instructions take one cycle. Many instructions (especially memory access) take multiple cycles per stage. |
| "Fetch and execute happen simultaneously" | They happen sequentially -- fetch first, then decode, then execute. Pipelining overlaps different instructions' stages, not the same instruction's stages. |
| "The PC always increments by 1" | The PC increments by the **size of the instruction** in memory addresses. If each instruction is 4 bytes, it increments by 4. |
| "The cycle only processes arithmetic" | It processes all instruction types: data movement (LOAD/STORE), arithmetic, logic, branching, and I/O. |
