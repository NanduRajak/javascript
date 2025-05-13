let mySymb = Symbol("Luffy");
let obj = {
  name: "Monkey D Luffy",
  [mySymb]: "Straw Hat",
  age: 19,
  role: "Captain",
  isDevilFruitUser: true,
  favMove: "Gumu Gumuunoo pistal",
  favFood: "Meat",
  anime: "One Piece",
  devilFruit: "Gum-Gum",
};

const isHeDfUser = obj["isDevilFruitUser"];
console.log(isHeDfUser);

const animeName = obj["anime"];
console.log(animeName);

console.log(obj);
obj.name = "Mugiwara no luffy";
console.log(obj);

// Object.freeze(obj);
obj.name = "luffy";
console.log(obj);

// function inside the object

obj.intro = function () {
  console.log(`I'm ${this.name} ,I'll become the king of the pirates!`);
};

obj.intro();

// clousers in objects:

function myObj() {
  let number = 1;
  return {
    display: function () {
      return console.log(number);
    },
    increment: function () {
      return number++;
    },
  };
}

let myobject = myObj();
myobject.display();
myobject.increment();
myobject.display();
