class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let pathOne = [];
  let pathTwo = [];
  findPath(topAncestor, descendantOne, pathOne);
  findPath(topAncestor, descendantTwo, pathTwo);

  console.log(pathOne);
  console.log(pathTwo);
  let ancestor = "";
  for (let i = 0; i < pathOne.length; i++) {
    for (let j = 0; j < pathTwo.length; j++) {
      if (pathOne[i].name === pathTwo[j].name) {
        console.log(pathOne[i]);
        return pathOne[i];
      }
    }
  }
}

function findPath(topAncestor, node, arr) {
  while (node.name !== topAncestor.name) {
    arr.push(node);
    node = node.ancestor;
  }
  arr.push(node);
  return;
}
