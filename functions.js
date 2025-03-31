// function myFunc(num1, num2) {
//   let result = num1 * num2;
//   console.log(`Your result is :${result}`);
// }
// myFunc(298, 2782);

// Printing numbers in decending order

for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}

// 1 to 10 tables , using for().

for (let num1 = 1; num1 <= 10; num1++) {
  const element = `Starting from ${num1}`;
  //   console.log(element);
  for (let num2 = 1; num2 <= 10; num2++) {
    const element = `${num1} * ${num2} = ` + num1 * num2;
    // console.log(element);
  }
}

// using ternary operator

let marks = 25;

const result = marks >= 26 ? "passed" : "failed";
// console.log(result);
