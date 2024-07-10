function flattenOne(value) {
  let flattenArr = [];

  function flattenUtil(currArr) {
    for (let i = 0; i < currArr.length; i++) {
      if (!Array.isArray(currArr[i])) {
        flattenArr.push(currArr[i]);
      } else {
        flattenUtil(currArr[i]);
      }
    }
  }

  flattenUtil(value);
  return flattenArr;
}

function flatten(arr) {
  // acc.push doesn't work because
  // push() adds elements to the end of an array and returns the new length of the array
  // The concat() method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
}

console.log(flatten([2, [3, 5], [5, 3, [2]]]));
