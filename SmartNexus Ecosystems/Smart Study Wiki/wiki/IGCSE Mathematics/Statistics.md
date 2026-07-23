# Statistics

**Summary**: Covers data types, averages (mean, median, mode), measures of spread (range, interquartile range, quartiles), statistical charts (bar charts, pie charts, stem-and-leaf diagrams, histograms with frequency density, cumulative frequency curves, box-and-whisker plots), scatter graphs, and correlation. Statistics appears in both Core and Extended IGCSE Mathematics 0580 papers.
**Tags**: #igcse #mathematics #statistics #data-handling
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## 1. Data Types

**Qualitative data**: Non-numerical data describing qualities or categories (e.g., eye colour, car brand). Also called categorical data.

**Quantitative data**: Numerical data.
- **Discrete**: Can only take specific values (e.g., number of students -- 0, 1, 2, ...). Usually counted.
- **Continuous**: Can take any value within a range (e.g., height, mass, time). Usually measured.

---

## 2. Averages

**Mean**: Sum of all values divided by the number of values. Mean = Σx / n.
- For grouped data: Mean ≈ Σ(f × midpoint) / Σf

**Median**: The middle value when data is arranged in order.
- For n values: median is the (n+1)/2 th value.
- For grouped data, use linear interpolation from a cumulative frequency table or graph (Extended).

**Mode**: The value that occurs most frequently (highest frequency).
- For grouped data, the **modal class** is the class interval with the highest frequency.

**When to use each**:
- **Mean**: Best for symmetric distributions with no extreme outliers. Uses all data.
- **Median**: Best when data has outliers or is skewed. Not affected by a few extreme values.
- **Mode**: Best for categorical data or finding the most common value.

**Example**: For the data set 3, 7, 7, 8, 10, 12, 15:
Mean = (3+7+7+8+10+12+15) / 7 = 62/7 ≈ **8.86**.
Median = 4th value = **8**.
Mode = **7** (appears twice).

---

## 3. Measures of Spread

**Range** = largest value − smallest value

**Quartiles**: Divide the ordered data into four equal parts.
- **Lower quartile (Q1)**: The median of the lower half of the data.
- **Median (Q2)**: The middle value.
- **Upper quartile (Q3)**: The median of the upper half of the data.

**Interquartile range (IQR)** = Q3 − Q1. The IQR measures the spread of the middle 50% of the data, ignoring outliers.

**Example**: For the data 3, 5, 7, 8, 9, 11, 15, 16, 18:
Q2 (median) = **9**. Lower half: 3, 5, 7, 8 → Q1 = (5+7)/2 = **6**. Upper half: 11, 15, 16, 18 → Q3 = (15+16)/2 = **15.5**.
IQR = 15.5 − 6 = **9.5**.

---

## 4. Statistical Charts

### Bar Charts

Used for discrete or categorical data. Bars have equal width and gaps between them. The height of each bar represents the frequency.

### Pie Charts

Each sector angle = (frequency / total frequency) × 360°. Use a protractor to draw.

**Example**: 45 students chose their favourite colour: 15 chose red. Sector angle = 15/45 × 360° = **120°**.

### Stem-and-Leaf Diagrams

Each data value is split into a **stem** (leading digit(s)) and a **leaf** (final digit). Include a key. Ordered stem-and-leaf diagrams make it easy to find the median and quartiles.

**Example**: Data: 12, 15, 21, 23, 23, 27, 31, 34. Stem = tens digit.
```
1 | 2 5
2 | 1 3 3 7
3 | 1 4
Key: 1|2 means 12
```

### Histograms (Extended)

Show **continuous data** grouped into class intervals. Unlike bar charts:
- There are **no gaps** between bars.
- The **area** of each bar is proportional to the frequency (not necessarily the height).
- **Frequency density** = frequency / class width. This is what you plot on the vertical axis.
- Frequency = frequency density × class width = **area of the bar**.

### Cumulative Frequency Curves (Extended)

A cumulative frequency (CF) table adds up frequencies as you go. The CF curve plots cumulative frequency against the **upper bound** of each class interval.

From the CF curve you can estimate:
- **Median**: Go to 1/2 of total frequency on the vertical axis, read across and down.
- **Quartiles (Q1, Q3)**: Go to 1/4 and 3/4 of total frequency.
- **IQR** = Q3 − Q1.
- Percentiles (e.g., 10th percentile at 10% of total frequency).

### Box-and-Whisker Plots

A visual summary of the five-number summary:
1. Minimum value (lower end of the left whisker)
2. Lower quartile Q1 (left edge of the box)
3. Median Q2 (line inside the box)
4. Upper quartile Q3 (right edge of the box)
5. Maximum value (upper end of the right whisker)

The box shows the IQR (middle 50%). The whiskers extend to the minimum and maximum (unless there are outliers).

---

## 5. Scatter Graphs and Correlation

A **scatter graph** plots two variables against each other to see if there is a relationship.

**Types of correlation**:
- **Positive correlation**: As one variable increases, the other tends to increase (points slope upward).
- **Negative correlation**: As one variable increases, the other tends to decrease (points slope downward).
- **No correlation**: No clear pattern.

**Line of best fit**: A straight line drawn through the points, passing as close as possible to all points (roughly equal numbers of points above and below). Use this line to **estimate** (interpolate within the data range; extrapolate beyond it -- but extrapolation is less reliable).

**Strength of correlation**: Judged by how closely the points follow a straight line. Strong correlation = points lie close to a line. Weak correlation = points are widely scattered.

**Causation vs. correlation**: Correlation does **not** imply causation. Two variables may be correlated because of a third factor, or by coincidence.

---

## Sources

- **BBC Bitesize GCSE Mathematics** — Data Handling and Statistics, BBC (free educational resource)
- **OpenStax Math** — Statistics, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Mathematics 0580** — Statistics, Cambridge Assessment International Education
- **CK-12 Mathematics** — Statistics and Probability, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Number]] -- Fractions, percentages, and averages
- [[Probability]] -- Relative frequency, expected frequency, probability diagrams
- [[Algebra and Graphs]] -- Straight line graphs (relevant to lines of best fit)
- [[IGCSE-Maths-Index]] -- Full IGCSE Mathematics index

---

## Common Misconceptions

| Students often think... | But the correct understanding is... |
|---|---|
| "Mean is always the best average" | The mean is affected by outliers. The median is often better for skewed data or data with extreme values. |
| "The mode is the frequency of the most common value" | The mode is the **value itself** that occurs most, not how many times it occurs. |
| "In a histogram, the height of the bar is always the frequency" | Height = **frequency density** (frequency / class width). The **area** of the bar represents the frequency. |
| "Bar charts and histograms are the same thing" | Bar charts have gaps and are for discrete/categorical data. Histograms have no gaps and are for continuous data. |
| "Correlation means one variable causes the other" | Correlation does not imply **causation**. There may be a third factor or it could be coincidental. |
| "A line of best fit must pass through the origin" | Only if (0, 0) is a plausible data point. The line should fit the given data points. |
| "The IQR is the range" | Range = max − min. IQR = Q3 − Q1 (the range of the middle 50%). |
