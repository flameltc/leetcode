/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  var num=nums.sort((a,b)=>b-a)
  var sum1=num[0]
  var sum2=num[1]
  for(var i=2;i<num.length;i++){
    if(sum1>sum2){
      sum2+=num[i]
    }else { 
      sum1+=num[i]
    }
  }
  return sum1==sum2
};
console.log(canPartition([3,3,3,4,5]));
 