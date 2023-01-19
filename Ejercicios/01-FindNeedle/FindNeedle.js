function FindNeedle(haystack, needle) {
  // // O(n2)
  // console.log(haystack);
  // //                       i
  // //                     i+j
  // console.log(needle);
  // //                     j
  // for (let i = 0; i < haystack.length; i++) {
  //   for (let j = 0; j < needle.length; j++) {
  //     if (needle[j] !== haystack[i + j]) break;
  //     if (j === needle.length - 1) return i;
  //   }
  // }
  // return -1;

  //
  // O(n2)
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] !== needle[0]) break;
//     const sliced = haystack.slice(i, needle.length + i);
//     if (sliced === needle) return i;
//   }
//   return -1;

    if (haystack.search(needle) > 0) { return haystack.search(needle)} else return -1
 }


// slice, includes, find, split, concat

// let neddleFunction = (hayStack, needle) => {
//   for (let i = 0; i < hayStack.length; i++) {
//     for (let j = 0; j < needle.length; j++) {
//       let string = hayStack.slice(i, needle.lenght);
//       if (needle === string) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };

module.exports = FindNeedle;

console.log(FindNeedle("react-redux", "redux")); //(6);

console.log(FindNeedle("rereredux", "reredux")); //(2);

console.log(FindNeedle("pinky", "puntual")); //(-1);

console.log(FindNeedle("puntual", "pinky")); //(-1);
