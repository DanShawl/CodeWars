// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = (str) => {
  str = str.split(' ').map((item) => {
    if (item) {
      item[0] = item[0].toUpperCase();
      console.log(item);
    }
  });

  str.unshift('#');
  return str.join('');
};

// generateHashtag(" Hello there thanks for trying my Kata")
console.log(generateHashtag(' Hello there thanks for trying my Kata'));
// console.log(generateHashtag('     Hello     World   '));
