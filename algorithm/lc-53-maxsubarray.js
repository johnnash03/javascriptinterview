/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let globalMax = Number.NEGATIVE_INFINITY;
  let cachedValue = Array.from({ length: nums.length }, () => undefined);
  function maxSubarrayEndingAtIndex(n) {
    let localMax;
    if (n === 0) {
      globalMax = Math.max(globalMax, nums[0]);

      return nums[0];
    }
    if (cachedValue[n] !== undefined) return cachedValue[n];
    // console.log(n, nums[n]);
    cachedValue[n] =
      maxSubarrayEndingAtIndex(n - 1) > 0
        ? maxSubarrayEndingAtIndex(n - 1) + nums[n]
        : nums[n];
    globalMax = Math.max(globalMax, cachedValue[n]);
    return cachedValue[n];
  }
  /* 
  @Feynman: maxSubarrayEndingAtIndex(n) = maxSubarrayEndingAtIndex(n-1) > 0 ? maxSubarrayEndingAtIndex(n-1) + a[i]: a[n];
  Second point I want to make here is we are using the dfs return value. 
  */

  maxSubarrayEndingAtIndex(nums.length - 1);
  return globalMax;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
