function partition(arr, low, high) {
  for (let i = low, j = high; ; i++, j--) {
    while (arr[i] < arr[low]) i++;
    while (arr[j] > arr[low]) j--;
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quicksort(arr) {
  const stack = [[0, arr.length - 1]];
  
  while (stack.length) {
    const [low, high] = stack.pop();
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      stack.push([low, pivotIndex], [pivotIndex + 1, high]);
    }
  }
  
  return arr;
}
