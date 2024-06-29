class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let currentNode = this;
    let queue = [currentNode];
    while (queue.length) {
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.push(currentNode.children[i]);
      }
      array.push(currentNode.name);
      queue.splice(0, 1)[0];
      currentNode = queue[0];
    }
    return array;
    // Write your code here.
  }
}
