// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// "(123) 456-7890"

//  My solution
function createPhoneNumber(numbers) {
  const [one, two, three, four, five, six, seven, eight, nine, ten] = [
    ...numbers,
  ];
  return `(${one}${two}${three}) ${four}${five}${six}-${seven}${eight}${nine}${ten}`;
}

//  Other solutions
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
