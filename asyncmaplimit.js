// let arr = [1, 3, 45];
// let totalIterations = val.length / size;
// let itemsInLastIteration = val.length % size;
// let currentIndex;

function asyncMapLimit(arr, cb, size) {
  let output = [];

  return new Promise((resolve) => {
    recurse();
    function recurse(currentIndex = 0) {
      console.log("currentIndex", currentIndex);
      if (currentIndex > arr.length) {
        resolve(output);
        return;
      }
      let currentLoopResolved = 0;
      for (let i = 0; i < size; i++) {
        cb(arr[currentIndex + size]).then((val) => {
          currentIndex++;
          output.push(val);
          currentLoopResolved++;
          if (currentLoopResolved === size - 1) {
            recurse(currentIndex);
          }
        });
      }
    }
  });
}

const cb = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val * 2);
    }, 2000);
  });
};
asyncMapLimit([1, 2, 34], cb, 2).then((val) => {
  console.log("val", val);
});
