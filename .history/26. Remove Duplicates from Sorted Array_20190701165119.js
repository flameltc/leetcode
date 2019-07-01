var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let j = 1,
    len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[j++] = nums[i];
    }
  }
  nums.splice(j);
  return nums.length;
};
