// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers) {
  let sum = 0;
  let squares = numbers.map((number) => number ** 2);
  squares.forEach((square) => {
    sum += square;
  });
  return sum;
}

squareSum([1, 2, 2]);

console.log(squareSum([1, 2, 2]));

//  Other solutions
// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

// function squareSum(numbers){
//   return numbers.reduce((sum,num) => sum + (num * num), 0);
// }

// const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)
