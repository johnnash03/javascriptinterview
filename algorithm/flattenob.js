let ob = {
  a: {
    b: {
      c: 9,
    },
    d: {
      e: 4,
    },
  },
  k: {
    l: {
      m: 3,
    },
  },
};

conc = {
  "a.b.c": 9,
  "a.d.e": 4,
  "k.l.m": 3,
};

function flatten(ob) {
  let finalOb = {};
  util(ob);
  function util(ob, currKey = "") {
    for (let key in ob) {
      if (typeof ob[key] === "number" || typeof ob[key] === "string") {
        let k = currKey === "" ? key : `${currKey}.${key}`;
        finalOb[k] = ob[key];
      }

      util(ob[key], currKey === "" ? key : `${currKey}.${key}`);
    }
  }
  return finalOb;
}

console.log(flatten(ob));
