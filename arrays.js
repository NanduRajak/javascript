// print array of numbers in decreasing order....
// let array = [0, 1, 2, 3, 4, 5];
// console.log("A ", array.slice(0, 1));
// console.log("B ", array.slice(0, 2));
// console.log("C ", array.slice(0, 3));
// console.log("D ", array.slice(0, 4));
// console.log("E ", array.slice(0, 5));
// console.log("F ", array.slice(0, 6));
let array = [0, 1, 2, 3, 4, 5];
let letters = ["A", "B", "C", "D", "E", "F"];
for (let i = 1; i <= array.length; i++) {
  console.log(letters[i - 1], array.slice(0, i));
}
