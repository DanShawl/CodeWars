// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For Example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

function anagrams(word, words) {
  let wordSorted = word.split('').sort().join('');
  let anagramList = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].split('').sort().join('') === wordSorted) {
      anagramList.push(words[i]);
    }
  }
  return anagramList;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//  Other Solutions

// function anagrams(word, words) {
//   word = word.split('').sort().join('');
//   return words.filter(function(v) {return word == v.split('').sort().join('');});
// }

// let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
