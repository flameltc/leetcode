/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var result = [],
    left = 0,
    right = nums.length - 1
  while (left < right) {
    var sum = nums[left] + nums[right]
    if (sum === target) {
      result.push(left + 1)
      result.push(right + 1)
      return result
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  // for(let i=0;i<nums.length;i++){
  //   for(let j=i+1;j<nums.length;j++){
  //     if(nums[i]+nums[j]===target){
  //       return [i,j];
  //     }
  //   }
  // }
};