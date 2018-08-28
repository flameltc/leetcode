/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var right = nums.length - 1
  var left = 0
  for(var i=0;i<=right;i++) {
    if (nums[i] == 0) {
      swap(nums, i, left++)
    }else if (nums[i] == 2) {
      swap(nums, i, right--)
      i--
    }
  }
  function swap(arr, i, j) {
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
};
console.log(sortColors([2, 0, 2,1,2,0, 1, 2, 0]));