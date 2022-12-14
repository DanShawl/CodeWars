// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

const uniqueInOrder = function (iterable) {
  // iterable = iterable.split('');
  console.log(iterable);
  let temp;
  let newIterable = [];

  for (let i = 0; i < iterable.length; i++) {
    if (temp !== iterable[i]) {
      newIterable.push(iterable[i]);
      temp = iterable[i];
    }
  }
  return newIterable;
};

const uio = (iterable) => {
  console.log(...iterable);
  return [...iterable].filter((letter, i) => letter != iterable[i - 1]);
};

//  Other Solutions
// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uio('AAAABBBCCDAABBB'));
