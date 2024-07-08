function validateBst(tree) {
  // console.log("tree", tree);
  // Write your code here.
  return isBST(tree, -Infinity, Infinity);
}

function isBST(node, min, max) {
  if (node === null) return true;
  if (node.value < min || node.value >= max) {
    return false;
  }
  return (
    isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
  );
}
