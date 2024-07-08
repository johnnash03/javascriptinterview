function binarySearch(array, target) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target < array[mid]) {
      end = mid - 1;
    } else if (target > array[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
