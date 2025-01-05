const ancestry = (arr) => {
  // aggregate parent / child relation
  const aggregate = (arr) => {
    // aggregate the values for easier processing
    return arr.reduce((a, b) => {
      const [child, parent] = b;
      // aggregating on child
      a[child] = parent;
      return a;
    }, {});
  };
  // for a relationship from the aggregated value
  const convert = (obj) => {
    return Object.keys(obj).reduce((a, b) => {
      a.push(getKey(obj, b));
      return a;
    }, []);
  };
  // helper function to form the string
  // till the last hierarchy
  const getKey = (obj, key) => {
    // access the
    const val = obj[key];
    // the formation can be reversed by changing the order of the keys
    // child -> parent | parent -> child
    if (val in obj) {
      return getKey(obj, val) + " -> " + key;
    } else {
      return val + " -> " + key;
    }
  };
  // get the aggregated map
  const aggregatedMap = aggregate(arr);
  // return the ancestry
  return convert(aggregatedMap);
};

const arr = [
  ["lion", "cat"],
  ["cat", "mammal"],
  ["dog", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
  ["shark", "fish"],
];
console.log(ancestry(arr));
