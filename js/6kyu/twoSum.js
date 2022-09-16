// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

const twoSum = (array, goal) => {
  let numberMap = new Map();

  for (let index = 0; index < array.length; index++) {
    el = array[index];

    if (numberMap.has(goal - el)) return [index, numberMap.get(goal - el)];
    else numberMap.set(el, index);
  }

  return [];
};

const tSum = (numbers, target) => {
  //  compare sums of each digit
  //  add one item with each
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
};

console.log(tSum([1, 2, 3], 4));
console.log(tSum([1, 2, 3, 12, 4, 5, 6], 8));

// const twoSum = (numbers, target) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i, j];
//     }
//   }
// };

// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 2, 3], 4));
