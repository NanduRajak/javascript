function appearTwice(nums) {
  const result = [];

  for (let i = 0; i <= nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }
  return result;
}

// console.log(appearTwice([1, 2, 3, 3, 1]));

function twice(arr) {
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

console.log(twice([1, 1, 2, 2, 3, 4, 5, 5]));
