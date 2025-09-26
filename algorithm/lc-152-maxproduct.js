var maxProductFirst = function (nums) {
  let maxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let currProduct = 1;
      for (let k = i; k <= j; k++) {
        currProduct = currProduct * nums[k];
        // console.log(i, j, k, currProduct);
        // console.log(i, j);
      }
      console.log(i, j, currProduct);
      maxProduct = Math.max(maxProduct, currProduct);
      // console.log(maxProduct, currProduct, i, j);
    }
  }
  return maxProduct;
};

function maxProductON2(nums) {
  let ans = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = i; j < nums.length; j++) {
      prod *= nums[j]; // extend window [i..j]
      if (prod > ans) ans = prod; // update
      if (prod === 0) {
        // all longer [i..j’] will stay 0 → stop early
        ans = Math.max(ans, 0);
        break;
      }
    }
  }
  return ans;
}

const maxProduct = function (nums) {
  /* 
      @Generation:
      
      f(i): Max product subarray ending in i
      f(i) in relation to f(i-1)
      
      A lot of conditions need to be listed here.
      All of them to do with the signs of f(i-1) and a(i)

      Ultimately, it boils down to whether I need to take f(i-1) * a[i] or just a[i]

      So, if f(i-1) * a[i] > a[i]


    */

  /* 
      @Question: How to handle the edge cases, one item or two items?
    */
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let globalMaxProduct = -Infinity;
  let localMaxProduct = Array.from({ length: len }, () => -Infinity);
  localMaxProduct[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (
      (localMaxProduct[i - 1] > 0 && nums[i] > 0) ||
      (localMaxProduct[i - 1] < 0 && a[i] < 0)
    ) {
      localMaxProduct[i] = localMaxProduct[i - 1] * nums[i];
    } else {
      localMaxProduct[i] = nums[i];
    }
    globalMaxProduct = Math.max(globalMaxProduct, localMaxProduct[i]);
  }
  return globalMaxProduct;
};

console.log(maxProductFirst([2, 3, -2, 4]));
