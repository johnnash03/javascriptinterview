function findClosestValueInBst(tree, target) {
  let closest = tree.value;

  while (tree && tree.value) {
    if (target > tree.value) {
      if (Math.abs(target - tree.value) < Math.abs(target - closest))
        closest = tree.value;
      tree = tree.right;
    } else if (target < tree.value) {
      if (Math.abs(target - tree.value) < Math.abs(target - closest))
        closest = tree.value;
      tree = tree.left;
    } else {
      return tree.value;
    }
  }
  return closest;
}
