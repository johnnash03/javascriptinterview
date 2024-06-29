class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let firstPointer = linkedListOne;
  let firstArr = [];
  let secondArr = [];
  let secondPointer = linkedListTwo;
  while (firstPointer) {
    firstArr.push(firstPointer.value);
    firstPointer = firstPointer.next;
  }
  firstArr.reverse();
  while (secondPointer) {
    secondArr.push(secondPointer.value);
    secondPointer = secondPointer.next;
  }
  secondArr.reverse();
  let final = parseInt(firstArr.join("")) + parseInt(secondArr.join(""));
  let finalArr = final.toString().split("").reverse();

  console.log(finalArr);
  let newLinkedListHeadPtr = new LinkedList(0);
  let currentNode = newLinkedListHeadPtr;
  for (let i = 0; i < finalArr.length; i++) {
    let newNode = new LinkedList(parseInt(finalArr[i]));
    currentNode.next = newNode;
    currentNode = newNode;
  }
  return newLinkedListHeadPtr.next;
}
