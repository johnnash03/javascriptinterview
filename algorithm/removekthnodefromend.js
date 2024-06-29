class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let firstPointer = head,
    secondPointer = head;
  for (let i = 0; i < k; i++) secondPointer = secondPointer.next;
  console.log("secondPointer", secondPointer);
  if (secondPointer === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return head;
  }
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    firstPointer = firstPointer.next;
  }
  firstPointer.next = firstPointer.next.next;

  return head;
}
