function isMonotonic(array) {
  let isIncreasing = true;
  let isDecreasing = true;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > array[i + 1]) isIncreasing = false;
    if (array[i] < array[i + 1]) isDecreasing = false;
  }
  return isDecreasing || isIncreasing;
}
