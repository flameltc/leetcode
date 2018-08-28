/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  var res=[]
  var idx
  for(var i=0;i<nums.length;i++){
    idx=Math.abs(nums[i])-1
    nums[idx]=nums[idx]>0?-nums[idx]:nums[idx]
  }
  for(var i=0;i<nums.length;i++){
    if(nums[i]>0){
      res.push(i+1)
    }
  }
  return res
};