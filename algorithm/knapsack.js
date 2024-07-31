function knapsackProblem(items, capacity) {
  // Write your code here.
  const dp = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0);
    dp.push(row);
  }
  const knapsackItems = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill([]);
    knapsackItems.push(row);
  }

  for (let i = 1; i < items.length + 1; i++) {
    for (let j = 1; j < capacity + 1; j++) {
      itemIndex = i - 1;
      currentValue = items[itemIndex][0];
      currentWeight = items[itemIndex][1];
      if (j >= currentWeight) {
        if (dp[i - 1][j] > dp[i - 1][j - currentWeight] + currentValue) {
          dp[i][j] = dp[i - 1][j];
          knapsackItems[i][j] = [...knapsackItems[i - 1][j]];
        } else {
          dp[i][j] = dp[i - 1][j - currentWeight] + currentValue;
          knapsackItems[i][j] = [
            ...knapsackItems[i - 1][j - currentWeight],
            itemIndex,
          ];
        }
      } else {
        dp[i][j] = dp[i - 1][j];
        knapsackItems[i][j] = [...knapsackItems[i - 1][j]];
      }
    }
  }
  return [dp[items.length][capacity], knapsackItems[items.length][capacity]];
}
