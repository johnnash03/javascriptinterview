function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  let nextNode;
  while (curr) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}
