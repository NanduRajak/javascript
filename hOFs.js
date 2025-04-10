// map(),filter() and reduce() array methods.

// map()
const array = [2, 5, 6, 8, 4];
const mappingAnta = array.map((value) => {
  return value * 2;
});
// console.log(mappingAnta);

// filter()

const filteringAnta = array.filter((value) => {
  return value % 2 == 0;
});
// console.log(filteringAnta);

// reduce()

const reduceAnta = array.reduce((acc, curr) => {
  const val = acc * curr;
  return val;
});
// console.log(reduceAnta);
