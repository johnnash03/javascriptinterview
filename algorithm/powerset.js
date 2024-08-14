function powerset(array) {
  // Write your code here.
  let allSet = [];
  powersetUtil(array, 0, [], allSet);
  return allSet;
}

function powersetUtil(array, index, currSet, allSet) {
  // console.log('currSet', currSet, n)
  if (index === array.length) {
    allSet.push([...currSet]);
    return;
  }
  // Remember this structure as striver says
  // in the case of pick or leave situations.
  currSet.push(array[index]);
  powersetUtil(array, index + 1, currSet, allSet);
  currSet.pop();
  powersetUtil(array, index + 1, currSet, allSet);
}

const output = powerset([1, 2, 3]);
console.log(output);
