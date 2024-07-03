/* Input:
let test = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
    e: 1,
    f: true
};

console.log(pipe(test)(1, 1, 1));

Output:
{
  "a": {
    "b": 3,
    "c": 1
  },
  "d": -1,
  "e": 1,
  "f": true
} */

function pipe(ob) {
  return function (...args) {
    traverseObject(ob);
    function traverseObject(currOb) {
      for (key in currOb) {
        if (typeof currOb[key] === "function") {
          currOb[key] = currOb[key].apply(this, args);
        } else if (typeof currOb[key] === "object") {
          traverseObject(currOb[key]);
        }
      }
    }
    return ob;
  };
}
let test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
    j: {
      n: (a, b, c) => a + b + c + 112,
      m: (a, b, c) => a + b - c,
    },
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(pipe(test)(1, 1, 1));
