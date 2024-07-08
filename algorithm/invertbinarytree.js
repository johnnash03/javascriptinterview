// Do it using recursion(dfs)
function invertBinaryTree(tree) {
  // Write your code here.
  let currentNode = tree;
  if (!tree) {
    return tree;
  }

  let queue = [tree];

  console.log("tree", tree);
  while (queue.length > 0) {
    // swap the children.
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    [queue[0].right, queue[0].left] = [queue[0].left, queue[0].right];
    queue.shift();
  }
  return tree;
}
