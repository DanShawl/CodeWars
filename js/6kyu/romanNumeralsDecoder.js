// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

const conversion = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const solution = (roman) => {
  let value = 0;
  roman = roman.toUpperCase();

  for (let i = 0; i < roman.length; i++) {
    if (conversion[roman[i]] < conversion[roman[i + 1]]) {
      value -= conversion[roman[i]];
    } else value += conversion[roman[i]];
  }

  return value;
};
solution('MCMXC');

//  Step One: Convert from roman numerals to integers
//  Step Two: Set rules for when to add and subtract
//  Step Three: Return a total

//  Other Solutions
// function solution(roman){
//   var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

//   return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
// }
