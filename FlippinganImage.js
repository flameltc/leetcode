/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  function reverse(nums) {
    for (let i = 0; i < nums.length / 2; i++) {
      var target = nums[i]
      nums[i] = nums[nums.length - i - 1]
      nums[nums.length - i - 1] = target
    }
    return nums
  }

  function invert(nums) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i] ^ 1
    }
    return nums
  }
  for (let i = 0; i < A.length; i++) {
    A[i] = invert(reverse(A[i]))
  }
  return A
};