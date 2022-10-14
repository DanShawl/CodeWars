// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  //  item = arr[0][i] * (i + 1)
  //  push item to new array
  //  repeat for size n

  let arr = [[]];
  for (let i = 0; i < size; i++) {
    arr[0].push(i + 1);
  }
  let newArray = arr[0].map((item) => item.pow(item));
  console.log(arr);
  console.log(newArray);
  //  arr.map each value * index + 1
  //  concat arrays

  // let arr = [
  //   [1, 2, 3],
  //   [2, 4, 6],
  //   [3, 6, 9],
  // ];
  // console.log(arr[0][1]);
};

multiplicationTable(3);
