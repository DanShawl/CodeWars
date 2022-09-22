// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//  we need to preserve the order so sorting is not an option
//  Check if a variable === 0
//  if it does, move it to the end

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // console.log('array length', arr.length);
      // console.log('arr splice', arr.splice(i, 1)[0]);
      console.log(i, arr[i]);
      arr.splice(arr.length, 0, arr.splice(i, 1)[0]);
    }
  }
  return arr;
}

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(
  moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
);

//  Other solutions
// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// var moveZeros = function (arr) {
//   return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
//   ];
// }
