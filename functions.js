function myFunc(num1, num2) {
  let result = num1 * num2;
  //   console.log(`Your result is :${result}`);
}
myFunc(298, 2782);

// Printing numbers in decending order

for (let i = 10; i >= 1; i--) {
  //   console.log(i);
}

// 1 to 10 tables , using for().

for (let num1 = 1; num1 <= 10; num1++) {
  const element = `Starting from ${num1}`;
  //   console.log(el
  for (let num2 = 1; num2 <= 10; num2++) {
    const element = `${num1} * ${num2} = ` + num1 * num2;
    // console.log(element);
  }
}

// using ternary operator

let marks = 25;

const result = marks >= 26 ? "passed" : "failed";
// console.log(result);

const div = 64 % 2 == 0 ? "divided" : "not divided";
// console.log(div);

// Printing Prime Numbers from 3 to 100

function primeNum(val) {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (primeNum(i)) {
    // console.log(i);
  }
}

// Check wheather given number is "Prime Number" or not

function primeNum(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
// console.log(primeNum(19));

// printing number of vowels using functions

function numOfVowels(name) {
  let string = "aeiouAEIOU";
  let count = 0;
  for (const char of name) {
    if (string.includes(char)) {
      count++;
    }
  }
  return count;
}
const akka = "ZoroSenpai";
// console.log(numOfVowels(akka));

//using arrow functions
const enniVowelsUnnai = (name) => {
  const yes = "aeiouAEIOU";
  let count = 0;
  for (const char of name) {
    if (yes.includes(char)) {
      count++;
    }
  }
  return count;
};

const be = "";
// console.log(enniVowelsUnnai(be));

// Call Back Function
function sum(a,b){
  const result = a + b
  return result
}
function cal(a,b,sum){
  return sum
}
console.log(2,3,sum)