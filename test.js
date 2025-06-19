function appearsTwice(arr) {
  const count = {};
  const result = [];

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] === 2) {
      result.push(parseInt(num));
    }
  }

  return result.sort((a, b) => a - b);
}

// console.log(appearsTwice([1, 2, 3, 3, 4, 4, 1, 1]));

function checkPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(checkPrime(12));

async function name(params) {}
