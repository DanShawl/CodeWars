// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// let arr = [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9],
// ];

//  item = arr[0][i] * (i + 1)
//  push item to new array
//  repeat for size n

//  we have the first elements of each array
//  each following element is the i + 1 *
multiplicationTable = function (size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push([i + 1]);
    for (let j = 0; j < size - 1; j++) {
      arr[i].push(arr[i][0] * (j + 2));
    }
  }
  return arr;
};

//  Other Solutions
// multiplicationTable = function(size) {
//   var result = [];

//   for (var i = 0; i < size; i++) {
//     result[i] = [];
//     for(var j = 0; j < size; j++) {
//       result[i][j] = (i + 1) * (j + 1);
//     }
//   }

//   return result
// }

// multiplicationTable = function(size) {

//   return Array.apply(null, new Array(size)).map(function(val, i) {
//     return Array.apply(null, new Array(size)).map(function(val, j) {
//       return (i+1) * (j+1);
//     });
//   });
// }

multiplicationTable(5);
