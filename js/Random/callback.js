// Explain what a callback function is and provide a simple example
// A callback is a function passed to another function as an arg and is executed after some operation has been completed. We can use them for:
//  - Handling API requests - wait for response then do something with the data
//  - Event handling
//  - Timers / intervals

const arr = [1, 2, 3, 4, 5];
const getData = (arr, callback) => {
  arr.push(6);
  callback();
};

const logData = () => {
  console.log(arr);
};

getData(arr, logData);
