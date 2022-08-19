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
  //  convert to an array
  //  get prime numbers
  const floors = []
  // let space = 
  let prime = 1;

  floors.map((floor) => {
    floor.push(`${}`)
  })

  for (let i = 0; i < nFloors - 1; i++) {
    // console.log(prime);
    prime += 2;
    console.log(prime);
  }
}

// towerBuilder(3)
console.log(towerBuilder(6));
