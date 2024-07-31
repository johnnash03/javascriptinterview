function nodeDepths(root) {
  // Write your code here.
  let q = [];
  let totalDepth = 0;
  q.push({ ...root, level: 0 });
  while (q.length) {
    // totalDepth += level;

    // level++;

    let poppedNode = q.shift();

    totalDepth += poppedNode.level;
    // console.log('queue', poppedNode.data, level)

    if (poppedNode.left) {
      q.push({ ...poppedNode.left, level: poppedNode.level + 1 });
      // console.log(q[q.length-1])
    }
    if (poppedNode.right) {
      q.push({ ...poppedNode.right, level: poppedNode.level + 1 });
      // console.log(q[q.length-1])
    }
    // console.log( q)
    // if(level === 4)
    // 	break;
  }
  return totalDepth;
  return totalDepth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
