let twoSum = function (nums, target) {
  let a;
  let b;
  let sum;
  for (let i = 0; i < nums.length; i++) {
    a = i;
    // console.log(a);
    for (let j = 1; j < nums.length; j++) {
      b = j;
      sum = nums[a] + nums[b];
      //   console.log(sum);
      //   console.log(nums[a], nums[b]);
    }

    if (sum === target) return [nums[a], nums[b]];
    // console.log(nums[a] + nums[b]);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1, 2, 3, 4], 6));
