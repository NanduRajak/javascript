function apperasTwice(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }

  return result;
}

console.log(apperasTwice([2, 2, 4, 5, 4, 3, 1]));
console.log(apperasTwice(1, 2, 3, 4));
