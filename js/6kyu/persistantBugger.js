// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//  get each digit of the number - solve with spreading num in an array and mapping to number
//  get product of all digits - looping through and multiplying product the current digit
//  repeat the process using the product as num - set num = to product and start over
//  Track the number of times we've looped through

function persistence(num) {
  let count = 0;
  while (num > 9) {
    let digits = [...(num + '')].map(Number);
    console.log(digits);
    let product = 1;
    for (let i = 0; i < digits.length; i++) {
      product = product * digits[i];
      num = product;
    }
    count += 1;
  }
}

persistence(999);

//  Other Solutions
function persistence1(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

const persistence2 = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
};
