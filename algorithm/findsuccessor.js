// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
  let arr = [],
    ans = null;
  console.log("tree", tree);
  dfs(tree, arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].value === node.value) {
      ans = arr[i + 1];
    }
  }
  // console.log('arr', arr, node.value, ans, typeof ans)
  console.log("arr", arr);
  console.log("ans", ans);
  return ans;
  return null;
}

function dfs(tree, arr) {
  if (!tree) {
    return null;
  }
  dfs(tree.left, arr);
  // console.log(tree.value)
  arr.push(tree);
  dfs(tree.right, arr);
}
