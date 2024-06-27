function message() {
  console.log("hello");
}
const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // “hello”  this will be executed
sample();
sample();
sample();
sample(); // “hello”  this will be executed

function sampler(fn, i) {
  let count = 0;
  return function () {
    count += 1;
    if (count === i) {
      fn();
      count = 0;
    }
  };
}
