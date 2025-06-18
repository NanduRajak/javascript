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

console.log(appearTwice([1, 2, 3, 3, 1]));
