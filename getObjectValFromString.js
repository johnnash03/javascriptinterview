// solve the edge case of [ in mind quickly
/* 
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};
console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, ['a', 'b', 'c', '2']));
 */
// Solution 1
const get = (obj, path) => {
  if (path === "" || path.length == 0) return undefined;
  if (Array.isArray(path)) path = path.join(".");
  let exactPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "[") {
      let currIndex = "";
      while (path[++i] !== "]") {
        currIndex += path[i];
      }
      exactPath.push(currIndex);
    } else if (path[i] !== ".") {
      exactPath.push(path[i]);
    }
  }
  // get the value of the path in the sequence
  const value = exactPath.reduce((source, path) => source[path], obj);
  // if not found return undefined
  return value ? value : undefined;
};

// Solution 2
function getObjectFromString(ob, str) {
  const arrFromStr = str.split(".");
  let val = { ...ob };
  for (integratedKey of arrFromStr) {
    console.log(integratedKey);
    let key;
    if (integratedKey.indexOf("[") > -1) {
      key = integratedKey.substring(0, integratedKey.indexOf("["));
      let index = Number(
        integratedKey.substring(
          integratedKey.indexOf("[") + 1,
          integratedKey.indexOf("]")
        )
      );
      val = val[key][index];
      // console.log("index", index);
      // val = ob[]
    } else {
      key = integratedKey;
      val = val[key];
    }
    // console.log("key", key);
  }
  console.log("val", val);
  return val;
}
const obj = {
  a: {
    b: {
      c: [1, 2, 3, 4, 5, 6, 1, 21, 31, 11, 24, 35, 16, 28, 3],
    },
  },
};
console.log(get(obj, "a.b.c[11]"));
