/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var res = []
  var myMap=new Map()
  for(var i=0;i<nums.length;i++){
    if(myMap.has(nums[i])){
      myMap.set(nums[i],1)
    }else{
      myMap.set(nums[i],0)
    }
  }

  myMap.forEach((value,key)=>{
    if(value==1){
      res.push(key)
    }
  })
  return res
  
};