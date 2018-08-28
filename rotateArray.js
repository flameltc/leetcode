/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // for(let i=0;i<k;i++){
  //   var flag=nums.pop();
  //   nums.unshift(flag);
  // }
  // return nums;
  if (nums.length > 1) {
    nums.unshift(nums.slice());
  }

};