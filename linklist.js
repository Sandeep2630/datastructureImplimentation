class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head == null) {
      this.head = new Node(val);
      return;
    }
    let curr = this.head;
    console.log(curr.next);
    while (curr.next !== null) {
      curr = curr.next;
    }
  }
}

const list = new LinkedList();

list.append("a");
