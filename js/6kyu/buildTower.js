// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const floors = [];
  let newFloors = [];
  let prime = 1;

  for (let j = 0; j < nFloors; j++) {
    floors.push(`${character.repeat(prime)}`);
    prime += 2;
  }

  console.log(floors);
  console.log(newFloors);
}

towerBuilder(6);
// console.log(towerBuilder(6));

// if (j !== nFloors) {
//   floors.map((floor) => {
//     console.log(` ${floor} `);
//   });
// }
// console.log(floors);

function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }
