function PromiseAll(promisesArr) {
  let output = Array(promisesArr.length),
    unresolved = promisesArr.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promisesArr.length; i++) {
      promisesArr[i]
        .then((val) => {
          output[i] = val;
          unresolved--;
          if (unresolved === 0) {
            resolve(output);
          }
        })
        .catch((e) => {
          reject(e);
          return;
        });
    }
  });
}
const p0 = Promise.resolve(0);
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 2000);
});
const data = PromiseAll([p0, p1, p2]);
console.log("data", data);
data
  .then((value) => {
    console.log("value", value);
  })
  .catch((e) => {
    console.log("error", e);
  });
