// let ans = Number.NEGATIVE_INFINITY;
function maxPathSum(tree) {
  // Write your code here.
  // console.log(tree)
  let answer = { ans: Number.NEGATIVE_INFINITY };
  maxPath(tree, answer);
  console.log("answer", answer.ans);
  return answer.ans;
}

function maxPath(node, answer) {
  // console.log('node', node)
  if (node == null) {
    return 0;
  }
  let left = maxPath(node.left, answer);
  let right = maxPath(node.right, answer);
  answer.ans = Math.max(answer.ans, left + right + node.value);
  //console.log(node, Math.max(0, node.value + Math.max(left, right)))
  return Math.max(0, node.value + Math.max(left, right));
}
