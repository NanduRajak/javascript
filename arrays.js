// print array of numbers in decreasing order....
let arrays = [0, 1, 2, 3, 4, 5];
// console.log("A ", array.slice(0, 1));
// console.log("B ", array.slice(0, 2));
// console.log("C ", array.slice(0, 3));
// console.log("D ", array.slice(0, 4));
// console.log("E ", array.slice(0, 5));
// console.log("F ", array.slice(0, 6));
let array = [0, 1, 2, 3, 4, 5];
for (let i = 1; i <= array.length; i++) {
  //   console.log(letters[i - 1], array.slice(0, i));
  let letters = ["A", "B", "C", "D", "E", "F"];
}
let itemsPrices = [299, 149, 599, 800, 1000, 400];
for (let i = 0; i < itemsPrices.length; i++) {
  let discount = 25;
  let finalPrice = itemsPrices[i] - discount;
  //   console.log(
  //     `Final price of items after applying discount is : ${finalPrice}`
  //   );
}

// Using slice, splice, shift, unshift, push, pop
let foodItems = [
  "Biryani",
  "Mutton Biryani",
  "Paneer Tika Masala",
  "Curd Rice",
];
const favFood = foodItems.slice(0, 2);
// console.log(favFood);

const deleteFoodItem = foodItems.shift();
console.log(`Deleted FoodItem : ${deleteFoodItem}`);

foodItems.push("Butter nan");
console.log(foodItems);

foodItems.unshift("Chicken Biryani");
console.log(foodItems);
