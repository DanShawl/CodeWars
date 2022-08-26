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
  if (!str || str === ' ') {
    return false;
  }
  let string = [];
  str = str.split(' ').map((item) => {
    if (item) {
      item = item.charAt(0).toUpperCase() + item.slice(1);
      string.push(item);
      console.log(item);
    }
  });
  string.unshift('#');
  string = string.join('');

  if (string.length > 140) {
    return false;
  }
  return string;
};

// generateHashtag(" Hello there thanks for trying my Kata")
console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag(' '));
