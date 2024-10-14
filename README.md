# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer
I came to the conclusion that this iterative quicksort implementation will have a worst case time complexity of $\Theta(n^2)$. This worst case occurs when the pivot selection is bad (always picking largest or smallest element), or the array is already sorted/reverse sorted. 

$T(n)  = T(n-1) + n$, where $T(n-1)$ refers to sorting the remaining $n-1$ elements, and $n$ represents what has been done in the current partition step.

$(T(n-2) + (n-1)) + n$

$(T(n-3) + (n-2)) + (n-1) + n$

$T(1) + 2 + 3 + ... + (n-1) + n$

$\sum_{i=2}^n\frac{n(n+1)}{2}$, this is equivalent to $n^2$

$T(n) = T(1) + \frac{n(n+1)}{2} - 1)$

$T(1) +(n^2) - 1$

Dropping the constants and you have the final result, the worst case time complexity of $T(1) +(n^2) - 1 = n^2 ∈ \Theta(n^2)$

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I watched this video to get the idea: https://www.youtube.com/watch?v=qBo_9cgBVpk
