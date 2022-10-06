//  closures
//  promises
//  async await
//  filter
//  reduce
//  ADA/a11y
//  testing
//  SSR in next

//  facility pipeline
//  Todays Work
//  - Work Orders: Create, Assign, and track your work orders
//      > Due Date, Status(open, in progress, on hold, complete), title, priority, assets, category, last updated
//  - Preventative Maintenance: Schedule maintenance based on days, weeks, or months passed
//  - Asset Management: Pull up eqipment info and history in seconds (location based?)
//  - Inventory Management: Organize your parts and keep track of quantity
//  Upkeep

//  lazyLifter 2.0
//  auth
//  Workout Type: Upper, Lower, Push, Pull, Legs, Muscle Specific, Traditional, Crossfit
//  Exercises: instructions, muscles,
//  Save your favorites?
//

//  ASYNC AWAIT
let stocks = {
  fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) setTimeout(resolve, ms);
    else reject(console.log('Shop is closed.'));
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`${stocks.fruits[0]}`);
    await time(0000);
    console.log('Start the production.');
    await time(2000);
    console.log('Cut the fruit.');
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);
    await time(1000);
    console.log('Start the machine.');
    await time(1000);
    console.log(`${stocks.holder[0]} was selected.`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected.`);
    await time(2000);
    console.log('Serve icecream.');
  } catch (error) {
    console.log('Customer left.');
  } finally {
    console.log('Day ended, shop is closed.');
  }
};

kitchen();

//  PROMISES:
//  1. Promise is made
//  2. Pending
//  3. Resolve or Reject
//  3a. Resolve > .then > .finally
//  3b. Reject > .catch > .finally

//  you must return in .thens

// let stocks = {
//   fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts'],
// };

// let isShopOpen = true;
// const order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else reject(console.log('Our shop is closed'));
//   });
// };

// order(2000, () => console.log(`1. ${stocks.fruits[0]} was selected`))
//   .then(() => order(0000, () => console.log('2. Production has started')))
//   .then(() => order(2000, () => console.log('3. The fruit was chopped')))
//   .then(() =>
//     order(1000, () =>
//       console.log(`4. ${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     )
//   )
//   .then(() => order(1000, () => console.log('5. Start the machine')))
//   .then(() =>
//     order(2000, () =>
//       console.log(`6. Ice cream placed on ${stocks.holder[0]}`)
//     )
//   )
//   .catch(() => console.log('Customer left'))
//   .finally(() => console.log('Day ended. Shop is closed. '));

//  CALLBACKS
// let stocks = {
//   fruits: ['strawberry', 'grapes', 'banana', 'apple'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'peanuts']

// }

// const order = (fruitName, callProduction) => {
//   console.log('Order placed, please call production');
//   callProduction();
// };

// const production = () => {
//   console.log('Order received, starting production');
// };

// order('', production);

//  SET TIMEOUT
// console.log('I');
// console.log('eat');
// // console.log('ice cream');
// console.log('with');
// console.log('a spoon');

// setTimeout(() => {
//   console.log('ice cream');
// }, 2000);
