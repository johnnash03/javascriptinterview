var permute = function (nums) {
  const allPerms = [];

  /*

  */
  function dfs(currPerm = []) {
    console.log("currPerm", currPerm);
    if (currPerm.length === nums.length) {
      /* 
        @Feynman: You did this? Ponder, explain, elaborate why this is wrong
        allPerms.push(currPerm);
      */
      allPerms.push([...currPerm]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // @Question: How will you handle duplicates. This is non-duplicate question.
      console.log(currPerm, nums[i], currPerm.indexOf(nums[i]));
      if (currPerm.indexOf(nums[i]) < 0) {
        currPerm.push(nums[i]);
      } else {
        // @Gap: You forgot this part.
        continue;
      }
      dfs(currPerm);
      /* 
        @Feynman: You did this? Ponder, explain, elaborate why this is wrong
        currPerm = currPerm.slice(0, currPerm.length - 1);

      */
      currPerm.pop();
    }
  }

  dfs();
  return allPerms;
};

console.log(permute([1, 2, 3]));
