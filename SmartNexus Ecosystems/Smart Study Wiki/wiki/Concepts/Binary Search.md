# Binary Search

**Summary**: A divide-and-conquer search algorithm that finds a target value within a **sorted** list by repeatedly halving the search interval. Much faster than linear search (O(log n) vs O(n)) but requires data to be pre-sorted.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is Binary Search?

**Binary search** is an efficient algorithm for finding an item in a **sorted** list. Instead of checking every element (like [[Linear Search]]), it repeatedly divides the search space in half, eliminating 50% of the remaining elements with each comparison.

For a list of 1,000,000 items, linear search might need up to 1,000,000 comparisons; binary search needs at most **20** comparisons.

## How Binary Search Works

1. Find the **middle element** of the current search range
2. If the middle element equals the target value, the search is **done**
3. If the target is **less than** the middle element, discard the right half; search only the **left half**
4. If the target is **greater than** the middle element, discard the left half; search only the **right half**
5. Repeat with the new (smaller) search range until the target is found or the range is empty (target not in list)

### Pseudocode (IGCSE style)

```
PROCEDURE BinarySearch(List, Target)
    Low ← 0
    High ← LENGTH(List) - 1
    Found ← FALSE

    WHILE Low <= High AND Found = FALSE DO
        Mid ← (Low + High) DIV 2        // Integer division

        IF List[Mid] = Target
            THEN Found ← TRUE
            OUTPUT "Found at index", Mid
        ELSE
            IF List[Mid] > Target
                THEN High ← Mid - 1      // Search left half
                ELSE Low ← Mid + 1       // Search right half
            ENDIF
        ENDIF
    ENDWHILE

    IF Found = FALSE
        THEN OUTPUT "Not found"
    ENDIF
ENDPROCEDURE
```

## Worked Example

Search for `23` in the sorted list: `[2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]`

| Iteration | Low | High | Mid | List[Mid] | Comparison | Action |
|-----------|-----|------|-----|-----------|------------|--------|
| 1 | 0 | 10 | 5 | 23 | 23 = 23 | **Found!** |

Search for `15` in the same list:

| Iteration | Low | High | Mid | List[Mid] | Comparison | Action |
|-----------|-----|------|-----|-----------|------------|--------|
| 1 | 0 | 10 | 5 | 23 | 15 < 23 | High ← 4 |
| 2 | 0 | 4 | 2 | 8 | 15 > 8 | Low ← 3 |
| 3 | 3 | 4 | 3 | 12 | 15 > 12 | Low ← 4 |
| 4 | 4 | 4 | 4 | 16 | 15 < 16 | High ← 3 |
| 5 | - | - | - | - | Low > High | **Not found** |

Notice: `15` is not in the list, and the algorithm detected this after only 4 comparisons. A linear search would have checked all 11 elements before concluding "not found."

## Time Complexity

Binary search has **logarithmic time complexity**: **O(log n)**.

| List Size (n) | Max Comparisons (log₂ n) |
|---------------|--------------------------|
| 10 | ~4 |
| 100 | ~7 |
| 1,000 | ~10 |
| 1,000,000 | ~20 |
| 1,000,000,000 | ~30 |

This means even for enormous datasets, binary search is extremely fast -- as long as the data is sorted.

## Binary Search vs Linear Search

| Feature | Binary Search | Linear Search |
|---------|---------------|---------------|
| **Data requirement** | Must be **sorted** | Works on any list (sorted or unsorted) |
| **Time complexity** | O(log n) | O(n) |
| **Worst case (n=1000)** | ~10 comparisons | 1000 comparisons |
| **Implementation** | More complex | Very simple |
| **Best case** | O(1) -- target at middle | O(1) -- target at first position |
| **Use when** | Data is sorted and large | Data is unsorted, or list is very small |

### When to Use Each

- Use **binary search** when: the data is already sorted (or you will search it many times, justifying the sort cost) and the dataset is medium or large
- Use **linear search** when: the data is unsorted and you only need to search it once, or the dataset is very small (where the overhead of binary search outweighs the benefit)

## Limitations

- **Requires sorted data**: If the data is unsorted, it must be sorted first -- which itself takes O(n log n) time. For a single search, sorting + binary search is slower than linear search.
- **Requires random access**: Binary search needs direct access to any element by index. It works well on arrays but poorly on linked lists (no direct access to the middle without traversing).

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Searching Algorithms, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Algorithm Design and Problem-Solving, Cambridge Assessment International Education
- **CK-12 Computer Science** — Algorithms, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Linear Search]] -- Simple sequential search for unsorted data
- [[Bubble Sort]] -- One way to sort data before binary searching
- [[Algorithm]] -- General properties of algorithms
- [[Pseudocode]] -- The notation used to describe algorithms
- [[Trace Table]] -- Tracking variable values during algorithm execution
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Binary search is always faster than linear search" | For very small lists (e.g., 5 items), linear search may be faster because binary search has more overhead per step (calculating mid, comparing indices). The theoretical advantage matters most at scale. |
| "Binary search works on any list" | The list **must** be sorted. Applying binary search to an unsorted list produces incorrect (and unpredictable) results. |
| "Binary search is the fastest search possible" | In general, yes -- O(log n) is optimal for comparison-based searching in a sorted array. However, **hashing** (hash tables) can achieve O(1) average search time, though it uses more memory and does not preserve order. |
| "Binary search splits exactly in half each time" | It splits the **search space** in half, not the list itself. The middle element is the pivot point, and one of the two halves is discarded. |
