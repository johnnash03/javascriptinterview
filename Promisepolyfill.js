// https://chatgpt.com/share/bb472b23-2ce7-4cc0-8857-77fcb894c4e6

function MyPromise(executor) {
  let state = "pending"; // Initial state
  let value = undefined; // Fulfillment value or rejection reason
  let handlers = []; // Handlers to manage .then() and .catch() callbacks

  function resolve(result) {
    if (state !== "pending") return;
    state = "fulfilled";
    value = result;
    handlers.forEach(handle);
  }

  function reject(error) {
    if (state !== "pending") return;
    state = "rejected";
    value = error;
    handlers.forEach(handle);
  }

  function handle(handler) {
    if (state === "fulfilled") {
      handler.onFulfilled(value);
    } else if (state === "rejected") {
      handler.onRejected(value);
    } else {
      handlers.push(handler);
    }
  }

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      handle({
        onFulfilled: function (result) {
          if (typeof onFulfilled === "function") {
            try {
              resolve(onFulfilled(result));
            } catch (err) {
              reject(err);
            }
          } else {
            resolve(result);
          }
        },
        onRejected: function (error) {
          if (typeof onRejected === "function") {
            try {
              resolve(onRejected(error));
            } catch (err) {
              reject(err);
            }
          } else {
            reject(error);
          }
        },
      });
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  // Execute the executor function immediately
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

const p1 = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 2000);
}).then((result) => {
  console.log("result", result);
});
console.log("p1", p1);
