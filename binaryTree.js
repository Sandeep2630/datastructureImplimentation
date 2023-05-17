class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create nodes
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
const j = new Node("j");

// Connect nodes to form the binary tree
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;
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

// const breadthVal = (root) => {
//   const val = [];

//   let queue = [root];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     val.push(current.val);
//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return val;
// };

// console.log(breadthVal(a));
// df search
// ['a', 'b', 'd', 'h', 'i', 'e', 'j', 'c', 'f', 'g']
//         a
//       /   \
//      b     c
//    /  \   /  \
//   d    e  f   g
//  / \
// h   i
//      \
//       j
// bf search
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// function dfs(root) {
//   const arr = [];
//   if (root === null) return arr;
//   const stack = [root];

//   while (stack.length > 0) {
//     let current = stack.pop();
//     arr.push(current.value);
//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }

//   return arr;
// }

// console.log(dfs(a));

function bfs(root) {
  const arr = [];
  if (root === null) return arr;

  const queue = [root];
  console.log("okay");
  while (queue.length > 0) {
    const current = queue.shift();

    arr.push(current.value);
    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return arr;
}

console.log(bfs(a));
