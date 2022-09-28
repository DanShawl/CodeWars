// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//  separate evens and odds - filter?
//  sort the odds
//  push evens to the odds array based on index

function sortArray(array) {
  let odds = array.filter((item) => item % 2 !== 0).sort((a, b) => a - b);
  array.forEach((item, i) => (item % 2 === 0 ? odds.splice(i, 0, item) : null));
  return odds;
}

// sortArray([5, 8, 6, 3, 4]);
// sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
sortArray([1, 11, 2, 8, 3, 4, 5]);

//  Other Solutions
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
