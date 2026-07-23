# Probability

**Summary**: Covers basic probability, sample space diagrams, tree diagrams (with and without replacement), conditional probability, Venn diagrams for probability, expected frequency, and relative frequency. Probability appears in both Core and Extended IGCSE Mathematics 0580 papers.
**Tags**: #igcse #mathematics #probability
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## 1. Basic Probability

**Probability of an event**: P(event) = number of favourable outcomes / total number of possible outcomes

**The probability scale**: Probabilities range from 0 (impossible) to 1 (certain).
- P(certain event) = 1
- P(impossible event) = 0
- The sum of probabilities of all mutually exclusive possible outcomes = 1

**Complementary events**: P(not A) = 1 − P(A)

**Example**: A fair six-sided die is rolled. Find:
(a) P(rolling a 4) = **1/6**
(b) P(rolling an even number) = 3/6 = **1/2**
(c) P(not rolling a 6) = 1 − 1/6 = **5/6**

**Mutually exclusive events**: Two events cannot happen at the same time.
- Addition rule: P(A or B) = P(A) + P(B)

**Not mutually exclusive**: P(A or B) = P(A) + P(B) − P(A and B)

**Example**: A bag has 3 red, 4 blue, 5 green balls. One is drawn. Find P(red or blue).
P(red or blue) = 3/12 + 4/12 = **7/12**.

---

## 2. Independent Events

Two events are **independent** if the outcome of one does not affect the outcome of the other.

**Multiplication rule**: P(A and B) = P(A) × P(B)

**Example**: The probability that Alice passes Maths is 0.7 and English is 0.8. Assuming independence, find P(she passes both).
P(both) = 0.7 × 0.8 = **0.56**.

---

## 3. Sample Space Diagrams

A **sample space** is the set of all possible outcomes. Represent it systematically using lists or two-way tables.

**Example**: Two fair coins are flipped. List the sample space and find P(at least one head).
Sample space = {HH, HT, TH, TT} (4 equally likely outcomes).
P(at least one head) = 3/4 = **0.75**.

**Two-way table**: Rolling two dice and adding the scores produces a 6×6 table (36 equally likely outcomes). P(total = 7) = 6/36 = **1/6** (the pairs {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} all sum to 7).

---

## 4. Tree Diagrams

Tree diagrams show the outcomes of successive events, with probabilities on each branch.

**Key rules**:
- Probabilities on branches from the same point sum to 1.
- Multiply along branches for combined outcomes (AND).
- Add probabilities of relevant final outcomes (OR).
- The sum of all final outcome probabilities = 1.

**Without replacement**: Probabilities change after each event because the total number of items decreases. The second set of branches shows **conditional** probabilities.

**With replacement**: Probabilities stay the same because items are returned.

**Example** (without replacement): A bag has 4 red and 6 blue counters. Two are drawn **without replacement**. Find P(both red).
First draw: P(red) = 4/10 = 2/5. Second draw (given first was red): P(red) = 3/9 = 1/3.
P(both red) = 2/5 × 1/3 = **2/15**.

**Example** (with replacement): Same bag, but counters are **replaced**. Find P(both red).
First: P(red) = 4/10 = 2/5. Second: P(red) = 4/10 = 2/5.
P(both red) = 2/5 × 2/5 = **4/25**.

**Example** (exactly one): Box A has 2 red and 3 green sweets. Two are picked without replacement. Find P(exactly one is red).
P(R then G) = 2/5 × 3/4 = 6/20. P(G then R) = 3/5 × 2/4 = 6/20.
P(exactly one red) = 6/20 + 6/20 = 12/20 = **3/5**.

---

## 5. Conditional Probability (Extended)

**Conditional probability** P(A|B) is the probability of A **given that** B has occurred:
P(A|B) = P(A and B) / P(B)

**Example**: In a class, 12 study French (F), 8 study German (G), 4 study both. A student chosen at random studies French. Find P(this student also studies German).
P(G|F) = P(F and G) / P(F) = (4/total) / (12/total) = 4/12 = **1/3**.

**Tree diagrams and conditional probability**: The second set of branches in a tree diagram represents **conditional** probabilities given the outcome of the first event. This is why "without replacement" problems involve conditional probabilities on the second tier.

---

## 6. Venn Diagrams for Probability

The rectangle represents the sample space (total probability = 1). The probability of an event is proportional to the area of its region.

**Example**: P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find:
(a) P(A ∪ B) = 0.4 + 0.5 − 0.2 = **0.7**
(b) P(A only) = 0.4 − 0.2 = **0.2**
(c) P(neither) = 1 − 0.7 = **0.3**

---

## 7. Expected Frequency

**Expected frequency** = probability × number of trials

**Example**: The probability a biased coin lands on heads is 0.35. The coin is flipped 200 times. Expected heads = 0.35 × 200 = **70**.

---

## 8. Relative Frequency

**Relative frequency** = number of times event occurs / total number of trials

As the number of trials increases, relative frequency tends towards the theoretical probability (the **Law of Large Numbers**). Use relative frequency to **estimate** probability when the theoretical probability is unknown.

**Example**: A spinner is spun 150 times and lands on blue 42 times. Estimate P(blue).
Estimated P(blue) = 42/150 = **0.28** (or 14/75).

**Example**: A biased coin was tossed 80 times and came up heads 28 times. Estimate how many heads you would expect in 500 tosses.
Estimated P(heads) = 28/80 = 0.35. Expected in 500 tosses = 0.35 × 500 = **175 heads**.

---

## Sources

- **BBC Bitesize GCSE Mathematics** — Probability and Tree Diagrams, BBC (free educational resource)
- **OpenStax Math** — Probability and Statistics, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Mathematics 0580** — Probability, Cambridge Assessment International Education
- **CK-12 Mathematics** — Probability, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Number]] -- Fractions, decimals, and percentages used in probability
- [[Statistics]] -- Relative frequency links probability to statistics
- [[Algebra and Graphs]] -- Tree diagrams as graph-like structures
- [[IGCSE-Maths-Index]] -- Full IGCSE Mathematics index

---

## Common Misconceptions

| Students often think... | But the correct understanding is... |
|---|---|
| "If an event has not happened for a while, it is 'due' to happen" | For independent events (e.g., coin flips), past outcomes do not affect future ones. The probability resets each time. This is the **gambler's fallacy**. |
| "P(A or B) = P(A) + P(B) always" | This only applies when A and B are **mutually exclusive**. Otherwise, subtract P(A and B). |
| "Conditional probability means multiplying" | It means restricting the sample space. Use P(A|B) = P(A and B) / P(B). |
| "Expected frequency equals the actual outcome" | Expected frequency is a long-term **average**. Actual outcomes in a single experiment will vary. |
| "On a tree diagram, second branches are always independent" | In "without replacement" problems, the second set of branches shows **conditional** probabilities. |
| "A probability of 0.5 means it will definitely happen half the time in any experiment" | Only in the long run. With few trials, observed frequencies can differ substantially from the theoretical probability. |
