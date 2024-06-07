/* 
  Promise.all takes in a an array of promise and returns a promise.
  In case all promises are a success, return promise is resolved with the fulfilled data in the same order as the 
  promises are passed.
  In case if any promise is rejected, return promise is resolved with the error message of the failed promise.
*/

const PromiseAllPoly = (promiseArr) => {
  console.log("promiseArr", promiseArr);
  const successOutput = [];
  let successIndex = -1;
  /* Q. Should I use foreach because its not possible to early return? */
  /* I looped through all promises and returned promise for each which definitely didn't work */
  /*
  for (eachPromise of promiseArr) {
    // I missed a return here and it caused all the issue
    return eachPromise.then((value) => {
      successOutput.push(value);
      successIndex++;
      console.log(
        "successOUtput",
        successOutput,
        successIndex,
        promiseArr.length
      );

      if (successIndex === 1) {
        console.log("inside complete");
        return new Promise((resolve) => {
          // Can I just write resolve(successOutput) and remove braces.
          console.log("resolving promise", successOutput);
          resolve(successOutput);
        });
      }
    });
  }
  */

  return new Promise((resolve, reject) => {
    promiseArr.forEach((eachPromise) => {
      eachPromise
        .then((value) => {
          successIndex++;
          successOutput.push(value);
          console.log("successIndex", successIndex);
          if (successIndex === promiseArr.length - 1) {
            resolve(successOutput);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  });
};
/* Q. Why is the following syntax valid. What's the alternative for reject. */
const p0 = Promise.resolve(0);
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const data = PromiseAllPoly([p1, p2]);
console.log("data", data);
data
  .then((value) => {
    console.log("value", value);
  })
  .catch((e) => {
    console.log("error", e);
  });
