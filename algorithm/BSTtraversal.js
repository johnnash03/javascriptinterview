function inOrderTraverse(tree, array) {
  // Write your code here.
  console.log(tree);
  if (!array) array = [];
  if (!tree) return;
  if (tree.left) {
    inOrderTraverse(tree.left, array);
  }

  array.push(tree.value);

  if (tree.right) {
    inOrderTraverse(tree.right, array);
  }

  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if (!array) array = [];
  if (!tree) return;
  array.push(tree.value);
  if (tree.left) {
    preOrderTraverse(tree.left, array);
  }

  if (tree.right) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (!array) array = [];
  if (!tree) return;
  if (tree.left) {
    postOrderTraverse(tree.left, array);
  }

  if (tree.right) {
    postOrderTraverse(tree.right, array);
  }
  array.push(tree.value);
  return array;
}
