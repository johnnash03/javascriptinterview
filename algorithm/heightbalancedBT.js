// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.
  let answer = { ans: true };
  let height = dfs(tree, answer);
  return answer.ans;
}

function dfs(tree, answer) {
  if (!tree) {
    return 0;
  }

  let left = dfs(tree.left, answer);
  let right = dfs(tree.right, answer);
  if (Math.abs(left - right) > 1) {
    answer.ans = false;
  }
  return Math.max(left, right) + 1;
}
