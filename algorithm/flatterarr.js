export default function flatten(value) {
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
