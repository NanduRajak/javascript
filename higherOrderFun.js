// Finding the area,circumferance and diameter of array of circles.

const radius = [2, 5, 6, 9];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumfrance = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (logic) {
  const arr = [];
  for (let i = 0; i < radius.length; i++) {
    arr.push(logic(radius[i]));
  }
  return arr;
};

console.log(radius.map(area));
console.log(radius.calculate(area));
// console.log(calculate(radius, circumfrance));
// console.log(calculate(radius, diameter));
