let array = [1, 2, 36, 69, 7];

const calsqrt = (num) => {
  //   console.log(num * num);
};
array.forEach(calsqrt);

// Map()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newarray = arr.map((num) => {
  return num % 2;
});
// console.log(newarray);

// Filter()

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const revArr = arr2.reverse();
// console.log(revArr);

const nayaArray = revArr.filter((num) => {
  return num % 2 === 0;
});

// console.log(nayaArray);

let marks = [99, 69, 39, 45, 96, 97, 95];
const result = marks.filter((filter) => {
  return filter > 90;
});
// console.log(result);

// reduse()

const prompt = require("prompt-sync")();

const n = prompt("Enter your number : ");

let arr3 = [];

for (let i = 1; i <= n; i++) {
  const result2 = (arr3[i - 1] = i);
}
const sumAll = arr3.reduce((prev, curr) => {
  return prev + curr;
});

// console.log("Multiplication of all numbers in array : " ,sumAll);

const mulAll = arr3.reduce((prev, curr) => {
  return prev * curr;
});

console.log(arr3);

console.log("Multiplication of all numbers in array : ", mulAll);
