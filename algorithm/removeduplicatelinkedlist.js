/* 
  Note: Make it better with just one loop
*/
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    while (currentNode.next) {
      if (currentNode.next.value === currentNode.value) {
        currentNode.next = currentNode.next.next;
      } else {
        break;
      }
    }
    currentNode = currentNode.next;
  }
  return linkedList;
}
