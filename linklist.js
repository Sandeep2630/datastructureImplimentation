// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(val) {
//     if (this.head == null) {
//       this.head = new Node(val);
//       return;
//     }
//     let curr = this.head;
//     console.log(curr.next);
//     while (curr.next !== null) {
//       curr = curr.next;
//     }
//   }
// }

// const list = new LinkedList();
// const a ="fgh"

// list.append("a");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// function printList(head) {
//   let current = head;
//   while (current != null) {
//     console.log(current.val);
//     current = current.next;
//   }
// }

// printList(a);

// function printListRec(head) {
//   if (head == null) return;
//   console.log(head.val, "rec");

//   printListRec(head.next);
// }
// printListRec(a);

// function PrintListArr(head) {
//   const arr = [];
//   let current = head;
//   while (current != null) {
//     arr.push(current.val);

//     current = current.next;
//   }
//   return arr;
// }

// console.log(PrintListArr(a));

// let arr = [];
// function PrintListArrRec(head) {
//   if (head == null) return;

//   arr.push(head.val);

//   PrintListArrRec(head.next);

//   return arr;
// }
// console.log(PrintListArrRec(a));

// function sumList(head) {
//   let sum = 0;
//   let current = head;
//   while (current != null) {
//     sum += current.val;
//     current = current.next;
//   }
//   return sum;
// }
// console.log(sumList(a));

// function findElement(head, element) {
//   let current = head;
//   while (current != null) {
//     if (current.val === element) {
//       return true;
//     }

//     current = current.next;
//   }
//   return false;
// }
// console.log(findElement(a, "x"));

// function getValue(head, index) {
//   if (index == 0) return head.val;
//   let currIdx = 0;
//   let current = head;

//   while (current != null) {
//     // console.log(current.val, currIdx);

//     if (currIdx === index) {
//       return current.val;
//     }
//     currIdx += 1;
//     current = current.next;
//   }
// }

// console.log(getValue(a, 3));
function reverseList(head) {
  let current = head;

  let prev = null;

  while (current != null) {
    const next = current.next;
    prev = current;
    current = next;
  }
}
reverseList(a);
