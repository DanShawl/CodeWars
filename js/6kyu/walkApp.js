// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//  count minutes taken
//  track location
//    - north <> south = 0, east <> west = 0
//    - compare occurances

// console.log('longitude ', longitude);
// console.log('latitude ', latitude);

function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let longitude = 0;
  let latitude = 0;

  walk.forEach((letter) => {
    if (letter === 'n') longitude += 1;
    if (letter === 's') longitude -= 1;
    if (letter === 'e') latitude += 1;
    if (letter === 'w') latitude -= 1;
  });

  return latitude === 0 && longitude === 0 ? true : false;
}

console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
);
// isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);

//  Other Solutions
// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function(a){return a==val;}).length;
//   }
//   return walk.length==10 && count('n')==count('s') && count('w')==count('e');
// }
