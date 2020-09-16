// node -> node -> node
//  ^                ^       
// head              tail
// {
//   data: "A",
//   next: {
//     data: "B",
//     next: {
//       data: "C",
//       next: null
//     }
//   }
// }


// const headNode = {
//   data: "A",
//   next: middleNode
// };

// const middleNode = {
//   data: "B",
//   next: tailNode

// };

// const tailNode = {
//   data: "C",
//   next: null
// };

// [X][][HEAD][][][][][][][][X]
// [][][][][][][][A][A][A][A][]
// [][][][][][X][X][X][][][]
// [][][][][][][][][][X][MiddleNodeOne]
// [][][][][X][X][MiddleNodeTwo][][][][]
// [X][TAIL][][][][][][][X][X][]
