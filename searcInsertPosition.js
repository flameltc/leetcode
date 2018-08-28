/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var nl = nums.length
  if (nums[nl - 1] < target) {
    return nl
  }
  for (let i = 0; i < nl; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
};
searchInsert([1, 3, 5, 6], 5)