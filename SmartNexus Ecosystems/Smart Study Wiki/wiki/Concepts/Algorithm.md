# Algorithm

**Summary**: A well-defined, step-by-step sequence of instructions that solves a specific problem or performs a task. Must be clear and unambiguous, terminate after a finite number of steps, and produce a defined output. Can be represented through pseudocode, flowcharts, and program code.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is an Algorithm?

An **algorithm** is a precise, step-by-step procedure for solving a problem or completing a task. The term originates from the name of the 9th-century Persian mathematician Al-Khwarizmi.

Algorithms are the foundation of all computer programs. Every piece of software -- from a sorting routine to a search engine -- is built on algorithms. The same algorithm can be written in many different programming languages while remaining logically identical.

## Properties of a Good Algorithm

For a sequence of steps to qualify as a proper algorithm, it must satisfy these five properties:

| Property | Meaning |
|----------|---------|
| **Clear / Unambiguous** | Each step must have exactly one interpretation. There must be no room for guesswork or ambiguity. |
| **Finiteness** | The algorithm must terminate after a **finite** number of steps. It cannot run forever. |
| **Defined Inputs** | The algorithm must specify what data it requires (if any) and in what form. |
| **Defined Outputs** | The algorithm must produce a result and specify what that result is. |
| **Effectiveness** | Each step must be basic enough that it can, in principle, be carried out by a person using pencil and paper. |

## Representing Algorithms

### Pseudocode

**Pseudocode** is a human-readable, language-independent way of describing algorithms. It uses structured English-like keywords and standard programming constructs without being tied to the syntax of any specific programming language.

IGCSE Computer Science uses a specific pseudocode style in Paper 2. Key constructs:

```
// Variable assignment
Count ← 0

// Conditional (Selection)
IF Temperature > 30
    THEN OUTPUT "Hot"
    ELSE OUTPUT "Not hot"
ENDIF

// Loop (Iteration)
WHILE Count < 10 DO
    OUTPUT Count
    Count ← Count + 1
ENDWHILE

// For loop (count-controlled)
FOR Index ← 1 TO 10
    OUTPUT Index
NEXT Index

// Repeat-until (post-condition)
REPEAT
    INPUT Value
UNTIL Value > 0

// Case statement
CASE OF Option
    1: OUTPUT "One"
    2: OUTPUT "Two"
    OTHERWISE: OUTPUT "Other"
ENDCASE
```

### Flowcharts

A **flowchart** is a diagrammatic representation of an algorithm using standardised symbols connected by arrows.

| Symbol | Shape | Purpose |
|--------|-------|---------|
| **Start/End** | Oval (rounded rectangle) | Marks the beginning or end of the algorithm |
| **Process** | Rectangle | Any operation or calculation (e.g., `x ← x + 1`) |
| **Decision** | Diamond | A condition / question with two exits: Yes (True) and No (False) |
| **Input/Output** | Parallelogram | Reading data (INPUT) or displaying results (OUTPUT) |
| **Flow Line** | Arrow | Shows the direction of the next step |

Flowcharts are useful for visualising the logical flow of an algorithm before coding, especially for conditional branching and loops.

### Program Code

The algorithm written in a specific programming language (Python, Java, C++, etc.). Unlike pseudocode, program code can be compiled and executed directly.

## Common Algorithmic Constructs

| Construct | Description | Pseudocode Keywords |
|-----------|-------------|---------------------|
| **Sequence** | Instructions executed in order, one after another | (statements in order) |
| **Selection** | Choosing between different paths based on a condition | IF-THEN-ELSE-ENDIF, CASE-OF-ENDCASE |
| **Iteration** | Repeating a block of code | FOR-NEXT, WHILE-DO-ENDWHILE, REPEAT-UNTIL |
| **Assignment** | Storing a value in a variable | `←` |

These three constructs (sequence, selection, iteration) are sufficient to express **any** computable algorithm -- this is known as the structured program theorem.

## Common Algorithms in IGCSE

| Algorithm | Purpose | Complexity |
|-----------|---------|------------|
| [[Linear Search]] | Find an item in an unsorted list | O(n) |
| [[Binary Search]] | Find an item in a sorted list | O(log n) |
| [[Bubble Sort]] | Sort a list by comparing adjacent pairs | O(n²) |
| [[Totalling]] | Sum values in a list | O(n) |
| [[Counting]] | Count occurrences meeting a condition | O(n) |
| [[Validation Check]] | Ensure input data is reasonable | Varies |

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Algorithm Design, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Algorithm Design and Problem-Solving, Cambridge Assessment International Education
- **CK-12 Computer Science** — Algorithms, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Binary Search]] -- Efficient search on sorted data (O(log n))
- [[Bubble Sort]] -- Simple sorting by adjacent comparison
- [[Linear Search]] -- Sequential search on any data
- [[Flowchart]] -- Diagrammatic representation of algorithms
- [[Pseudocode]] -- Language-independent algorithm description
- [[Trace Table]] -- Tracking variable values through an algorithm
- [[Dry Run]] -- Manually walking through an algorithm step by step
- [[Decomposition]] -- Breaking a problem into smaller sub-problems
- [[Program Development Life Cycle]] -- The stages of software development
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "An algorithm has to be mathematical" | Algorithms can describe any process: making a cup of tea, deciding whether to bring an umbrella, or finding the shortest bus route. They are not inherently mathematical. |
| "Pseudocode has a single official standard" | There is no universal pseudocode standard. The IGCSE syllabus defines its own specific format for exams, but other organisations use different conventions. |
| "All algorithms are fast" | Some problems have no known efficient algorithm. Sorting takes at least O(n log n) comparisons; some problems (NP-hard) may require impractically long computation times. |
| "If it works, it is a good algorithm" | An algorithm can be correct but inefficient (e.g., bubble sort on a million items). Good algorithms are both correct **and** efficient for the expected input size. |
| "Flowcharts are just for beginners" | Flowcharts are used professionally in systems design, business process modelling, and safety-critical systems where visual verification of logic is essential. |
