/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var sum1 = (1 + nums.length) * nums.length / 2;
  var sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum2 += nums[i];
  }
  return sum1 - sum2;
};