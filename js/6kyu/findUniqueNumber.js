// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i + 1] === arr[i + 2] ? arr[i] : arr[i + 1];
    }
  }
}

// return arr[i + 1] === arr[i + 2] ? arr[i] : arr[i + 1];

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([2, 1, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

//  Other Solutions
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// function findUniq(arr) {
//   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }
