class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let arr = [];
  branchSumsUtil(root, arr);
  return arr;
}

function branchSumsUtil(currNode, arr = [], currSum = 0) {
  if (currNode.left === null && currNode.right === null) {
    arr.push(currSum + currNode.value);
    return;
  }
  currSum += currNode.value;
  if (currNode.left) {
    branchSumsUtil(currNode.left, arr, currSum);
  }

  if (currNode.right) {
    branchSumsUtil(currNode.right, arr, currSum);
  }
}
