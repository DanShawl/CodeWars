// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const toBinary = (x, y) => {
  const sum = x + y;
  let temp = sum;
  let quoteint, remainder;
  let binaryString = '';

  while (temp > 0) {
    quoteint = Math.floor(temp / 2);
    remainder = temp % 2;
    temp = quoteint;
    binaryString = remainder + binaryString;
    console.log(binaryString);
  }
};

console.log(toBinary(62, 2));

//  Other solution
const addBinary = (a, b) => (a + b).toString(2);
console.log(addBinary(10, 3));
