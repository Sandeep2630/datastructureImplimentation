console.log("i am running");
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// const i = new Node("i");
// const j = new Node("j");
// const l = new Node("l");
// const m = new Node("m");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// e.right = h;
// f.left = i;
// f.right = j;
// j.right = l;
// l.right = m;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    / \   / \
//   g   h i   j
//              \
//               l
//                \
//                 m

// const treeValBreadth = (root) => {
//   if (root === null) return [null];
//   const val = [];

//   const stack = [root];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     val.push(current.val);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return val;
// };

// console.log(treeVal(a));

// const treevalbreadth = (root) => {
//   if (root === null) return [];
//   const val = [];
//   const stack = [root];

//   while (stack.length > 0) {
//     let current = stack.pop();
//     val.push(current.value);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return val;
// };

// console.log(treevalbreadth(a));

const breadthVal = (root) => {
  const val = [];

  let queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    val.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return val;
};

console.log(breadthVal(a));
