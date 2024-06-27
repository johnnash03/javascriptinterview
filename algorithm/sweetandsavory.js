function sweetAndSavory(dishes, target) {
  // Write your code here.
  let input = [...dishes].sort((a, b) => a - b);
  if (input[0] >= 0) return [0, 0];
  let index = 0;
  while (input[index] < 0) {
    index++;
  }
  if (index === input.length) {
    return [0, 0];
  }
  let positiveStart = index;
  let currentClosest = Infinity,
    positiveIndex,
    negativeIndex;

  for (i = 0; i < positiveStart; i++) {
    for (j = positiveStart; j < input.length; j++) {
      let currentScore = input[i] + input[j];
      let diffWithTarget = target - currentScore;
      let isDiffLess =
        currentClosest === Infinity
          ? true
          : diffWithTarget < target - currentClosest;
      // console.log(
      //   input[i],
      //   input[j],
      //   currentScore,
      //   currentClosest,
      //   diffWithTarget,
      //   isDiffLess,
      //   currentScore < target && isDiffLess
      // );
      if (currentScore <= target && isDiffLess) {
        positiveIndex = j;
        negativeIndex = i;
        currentClosest = currentScore;
      }
    }
  }
  // console.log(input, input[negativeIndex], input[positiveIndex]);
  if (input[negativeIndex] && input[positiveIndex])
    return [input[negativeIndex], input[positiveIndex]];
  return [0, 0];
}
console.log(sweetAndSavory([-5, 10], 4));
// sweetAndSavory([2, 5, -4, -7, 12, 100, -25], -20);
//  = [2, 5, -4, -7, 12, 100, -25]
