let newObj = new Object();

let sideChar = {};
sideChar.name = "Roronoa Zoro";
sideChar.age = 21;
sideChar.role = "Vise captain";
sideChar.attackStyle = "three swords style";
sideChar.isHeDfUser = false;
sideChar.favFood = "meat and booze";
sideChar.nickName = "marimo";
sideChar.FavSwords = "enma";

// console.log(sideChar);

// concatinating the objects

const obj1 = {
  name: "Nami",
  role: "navigator",
  isDfUser: false,
  favAttack: "Thunder Bolt",
};
// const obj2 = {
//   namaiwa: "Nico Robin",
//   palying: "archaeologist",
//   isDfUser: true,
//   typeOfPerson: "dark Fellow",
// };

const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};
const obj2 = {
  4: "d",
  5: "e",
};

// Spread operator

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// Object.assign() method

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);
const obj5 = Object.assign(obj1, obj2);
console.log(obj5);

console.log(obj5 === obj1);
console.log(obj5 === obj2);

console.log(Object.keys(sideChar));
console.log(Object.values(sideChar));
console.log(Object.entries(sideChar));

console.log(sideChar.hasOwnProperty("isHeDfUser"));
