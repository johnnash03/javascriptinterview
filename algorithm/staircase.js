function staircaseTraversal(height, maxSteps) {
  // Write your code here.
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= height; i++) {
    let start = i - maxSteps > 0 ? i - maxSteps : 0;
    dp[i] = 0;
    for (let j = start; j < i; j++) {
      dp[i] += dp[j];
    }
  }
  return dp[height];
  return -1;
}
