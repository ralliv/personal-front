---
title: Big O Notation
date: '2024-03-18'
author: Adrián Villar
excerpt: Understanding Big O notation for algorithm efficiency
imageUrl: https://picsum.photos/id/13/800/400
---

Big O notation is a way to measure the efficiency of algorithms, regardless of system specifications or hardware.

## Simplification Rules

### Eliminate Constant Factors
O(**4**n) -> O(n)
O(**999**n) -> O(n)

Constant factors don't significantly affect performance as input size grows, so they're removed.

### Eliminate Smaller Terms
O(n^2 + **n**) -> O(n^2)
O(**n** + n^4 + **n^2**) -> O(n^4)
O(n^4 - **n^3**) -> O(n^4)

The dominant term determines the overall growth rate.

### Example Applying Both Rules
O(**4**n^2 + **n** + **5**) -> O(n^2)

## Analyzing Algorithms Based on Input Size (N)

![efficiency comparison](/images/posts/alg-efi-comparison.png)

Lower on the graph means better efficiency. Assuming N = 5:

* O(n!): 5! = 120
* O(c^n): 2^5 = 32
* O(n^c): 5^2 = 25
* O(N): 5
* O(log(n)): log2(5) ≈ 2.32
* O(1): Constant time (most efficient, unaffected by input size)