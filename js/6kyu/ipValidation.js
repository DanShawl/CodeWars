// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

//  Check for four octets | split() and length
//  check each octet for number (0-255) | if its ! >== 0 or <== 255
//  check for leading 0s | startswith

function isValidIP(str) {
  str = str.split('.');
  if (str.length !== 4) return false;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) return false;
    if (str[i].startsWith('0') && str[i].length !== 1) return false;
    if (Number(str[i]) < 0 || Number(str[i]) > 255) return false;
  }
  return true;
}

// console.log(isValidIP('23.455.67.89'));
// console.log(isValidIP('01.02.03.04'));
// console.log(isValidIP(''));
// console.log(isValidIP('abc.def.ghi.jkl'));
console.log(isValidIP('1e0.1e1.1e2.2e2'));
// console.log(Number('abc'));

// str.forEach((octet) => {
//   if (Number(octet) < 0 || Number(octet) > 255) return false;
// });
