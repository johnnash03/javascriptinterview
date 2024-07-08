// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let answer = { ans: Number.NEGATIVE_INFINITY };
  maxDepth(tree, answer);
  return answer.ans;
}
function maxDepth(tree, answer) {
  if (!tree) {
    return 0;
  }
  let left = maxDepth(tree.left, answer);
  let right = maxDepth(tree.right, answer);
  answer.ans = Math.max(answer.ans, left + right);
  return Math.max(left, right) + 1;
}
