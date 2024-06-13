// https://www.algoexpert.io/questions/best-seat

function bestSeat(seats) {
  let bestSeatIdx = -1;
  let currentBest = 0;
  let bestSpace = 0;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      currentBest = 0;
    } else {
      currentBest++;
      if (currentBest > bestSpace) {
        bestSpace = currentBest;
        bestSeatIdx = i - Math.floor(bestSpace / 2);
      }
    }
  }
  return bestSeatIdx;
}
console.log(bestSeat([1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]));
