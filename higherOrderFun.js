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
console.log(calculate(radius, circumfrance));
console.log(calculate(radius, diameter));

// Finding the area,perimeter of Rectangle

const areaOfRect = function (length, breadth) {
  const rectangleArea = length * breadth;
  const message = "Area of rectangle : " + rectangleArea;
  return message;
};

const perimeterOfRect = function (length, breadth) {
  const rectanglePeri = 2 * (length + breadth);
  const message = "Perimeter of rectangle : " + rectanglePeri;
  return message;
};

console.log(areaOfRect(3, 30));
console.log(perimeterOfRect(20, 100));
