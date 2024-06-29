class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array, currentNode) {
    this.depthFirstSearchUtil(array, this);
    return array;
  }

  depthFirstSearchUtil(array, currentNode) {
    array.push(currentNode.name);
    if (currentNode.children.length === 0) {
      return;
    }
    for (let i = 0; i < currentNode.children.length; i++) {
      this.depthFirstSearchUtil(array, currentNode.children[i]);
    }
  }
}
