/**   
 * @param {number[]} nums
 * @return {number}
 */

 //除最大数其他加1和最大数减1效果一样
var minMoves = function(nums) {
  // var min=Infinity
  // var res=0
  // for(var it of nums){
  //   min=Math.min(min,it)
  // }
  // for(var it of nums){
  //   res+=it-min
  // }
  // return res

  var min=Infinity
  var sum=0
  for(var it of nums){
    sum+=it
    min=Math.min(min,it)
  }
  return  sum-min*nums.length
};