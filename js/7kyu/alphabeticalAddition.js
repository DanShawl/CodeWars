// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const addLetters = (...letters) => {
  if (letters.length === 0) return 'z';
  let sum = 0;
  letters.forEach((letter) => {
    sum += alphabet.indexOf(letter) + 1;
  });
  if (sum > 26) return alphabet[sum - 27];
  return alphabet[sum - 1];
};

console.log(addLetters());
console.log(50 / 26);
// console.log(29 % 26);
// addLetters('a', 'b', 'c');

//  Other Solutions
// function addLetters(...letters) {
//   return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
// }

// var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// function addLetters(...letters) {
//   var sum = 25;
//   for (var letter of letters)
//     sum += alphabet.indexOf(letter) + 1;
//   return alphabet[sum % 26];
// }
