// Install (npm prompt-sync) cuz "prompt" is not available in nodejs by default as browser has.
const prompt = require("prompt-sync")();

let givenNum = prompt("Enter a number: ");

if (givenNum % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("Not divisible by 5");
}

let score = prompt("Enter your marks: ");

if ((score >= 80) & (score <= 100)) {
  console.log("Grade A");
} else if (score >= 70 && score <= 89) {
  console.log("Grade B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade D");
} else if (score >= 0 && score <= 49) {
  console.log("Grade F");
} else {
  console.log("Enter valid Marks");
}
