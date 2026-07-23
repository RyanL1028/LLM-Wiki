# Bubble Sort

**Summary**: A simple comparison-based sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. Named because larger elements "bubble" to the end of the list with each pass. O(n²) time complexity.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is Bubble Sort?

**Bubble sort** is one of the simplest sorting algorithms. It works by repeatedly stepping through the list, comparing each pair of adjacent elements and swapping them if they are in the wrong order (e.g., if sorting in ascending order, swap when the left element is greater than the right).

The algorithm gets its name because larger elements gradually "bubble up" to the end of the list with each pass, like bubbles rising in a liquid.

## How Bubble Sort Works

1. Start at the beginning of the list
2. Compare the first two adjacent elements; if they are in the wrong order, **swap** them
3. Move to the next pair (positions 2 and 3); compare and swap if needed
4. Continue until you reach the end of the list (one **pass** completed)
5. The largest element is now in its correct position at the end of the list
6. Repeat the entire process for the remaining unsorted portion (excluding the already-sorted elements at the end)
7. Stop when a pass makes **zero swaps** (the list is sorted)

### Visual Example

Sort `[5, 3, 8, 1, 2]` in ascending order:

**Pass 1:**
```
[5, 3, 8, 1, 2]   Compare 5,3 → swap
[3, 5, 8, 1, 2]   Compare 5,8 → no swap
[3, 5, 8, 1, 2]   Compare 8,1 → swap
[3, 5, 1, 8, 2]   Compare 8,2 → swap
[3, 5, 1, 2, 8]   8 is in final position ✓
```

**Pass 2:**
```
[3, 5, 1, 2, 8]   Compare 3,5 → no swap
[3, 5, 1, 2, 8]   Compare 5,1 → swap
[3, 1, 5, 2, 8]   Compare 5,2 → swap
[3, 1, 2, 5, 8]   5 is in final position ✓ (last element already sorted; skip)
```

**Pass 3:**
```
[3, 1, 2, 5, 8]   Compare 3,1 → swap
[1, 3, 2, 5, 8]   Compare 3,2 → swap
[1, 2, 3, 5, 8]   3 is in final position ✓
```

**Pass 4:**
```
[1, 2, 3, 5, 8]   Compare 1,2 → no swap
Done -- no swaps in this pass → list is sorted.
```

### Pseudocode (IGCSE style)

```
PROCEDURE BubbleSort(List)
    N ← LENGTH(List)
    Swapped ← TRUE

    WHILE Swapped = TRUE DO
        Swapped ← FALSE
        FOR i ← 0 TO N - 2      // Compare up to second-last element
            IF List[i] > List[i + 1]
                THEN
                    Temp ← List[i]
                    List[i] ← List[i + 1]
                    List[i + 1] ← Temp
                    Swapped ← TRUE
            ENDIF
        NEXT i
        N ← N - 1                // Last element now in position
    ENDWHILE
ENDPROCEDURE
```

## Time Complexity

| Case | Complexity | Description |
|------|------------|-------------|
| **Best case** | O(n) | List is already sorted -- one pass with no swaps |
| **Average case** | O(n²) | Elements in random order |
| **Worst case** | O(n²) | List is in reverse order (maximum comparisons and swaps) |

### Why O(n²)?

In the worst case, pass 1 does (n-1) comparisons, pass 2 does (n-2) comparisons, ..., pass (n-1) does 1 comparison.

Total comparisons = (n-1) + (n-2) + ... + 1 = **n(n-1)/2**, which is approximately n²/2 for large n -- hence O(n²).

## Advantages and Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Simple to **understand** and **implement** | Very **slow** for large datasets -- O(n²) is impractical |
| **In-place** sorting (does not require extra memory beyond a temporary variable for swapping) | Even insertion sort (also O(n²)) typically performs better in practice |
| **Stable** -- preserves the relative order of equal elements | Requires many swaps; each swap is three assignments |
| Good for **very small** datasets or nearly-sorted data | Poor cache performance (accesses are not local) |

## Better Alternatives

For the IGCSE syllabus, it is important to know that bubble sort is not the only option:

| Algorithm | Time Complexity | Notes |
|-----------|----------------|-------|
| **Insertion Sort** | O(n²) | Also simple; much better on nearly-sorted data |
| **Merge Sort** | O(n log n) | Divide-and-conquer; faster but uses extra memory |
| **Quick Sort** | O(n log n) average | Divide-and-conquer; often fastest in practice |

Bubble sort is taught because it is easy to understand, trace, and implement -- not because it is efficient.

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Sorting Algorithms, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Algorithm Design and Problem-Solving, Cambridge Assessment International Education
- **CK-12 Computer Science** — Algorithms, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Binary Search]] -- Requires sorted data (bubble sort could provide it for small lists)
- [[Linear Search]] -- Works on unsorted data; no need to sort
- [[Algorithm]] -- General definition and properties of algorithms
- [[Pseudocode]] -- Notation used above to describe the algorithm
- [[Trace Table]] -- Tracking variable values through a bubble sort trace
- [[Insertion Sort]] -- Another simple O(n²) sort, often better in practice
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Bubble sort is a good general-purpose sorting algorithm" | It is one of the slowest sorting algorithms. It is used in education because of its simplicity, not its performance. Never use it on large datasets. |
| "Bubble sort always performs n² comparisons" | In the best case (already sorted list with the swap-flag optimisation), it performs only (n-1) comparisons -- O(n). Without the flag, it would still do all passes. |
| "The smallest element is placed first" | Bubble sort places the **largest** element (for ascending sort) in its final position after each pass. The smallest element is only correctly placed after many passes. |
| "Swapping is instant and free" | Each swap involves three copy operations (temp = a, a = b, b = temp). For large datasets with many swaps, this is a significant cost. |
