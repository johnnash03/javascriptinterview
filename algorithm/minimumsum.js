var minSubArrayLen = function (target, nums) {
  let start = 0,
    end = 0,
    sum = 0,
    finalStart,
    finalEnd;
  const len = nums.length;
  let minLen = Infinity;
  while (end < len) {
    sum += nums[end];
    end++;

    while (sum >= target) {
      if (end - start < minLen) {
        minLen = end - start;
        finalStart = start;
        // Why end -1?
        finalEnd = end - 1;
      }
      sum = sum - nums[start];

      start++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};
