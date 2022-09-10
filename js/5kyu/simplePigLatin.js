// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//  get the first letter of each word
//  remove the letter
//  append letter to the end
//  append 'ay' to end
//  account for punctuation

const pigIt = (str) => {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].charAt(0);
    if (letter.toLowerCase() !== letter.toUpperCase()) {
      str[i] = str[i].slice(1).concat(letter, 'ay');
    }
  }
  return str.join(' ');
};

console.log(pigIt('Hello world .'));

//  Other options

// function pigIt(str) {
//   var arrayWord = str.split(' ');
//   return arrayWord.map(function(word) {
//     var firstLetter = word.charAt(0);
//     return word.slice(1) + firstLetter + 'ay';
//   }).join(' ');
// }

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

// function findUniq(arr) {
//   return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
// }
