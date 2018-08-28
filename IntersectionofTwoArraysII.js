/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var myMap=new Map()
  var res=[]
  for(var it of nums1){
    if(!myMap[it]){
      myMap[it]=1
    }else{
      myMap[it]++
    }
  }
  for(var it of nums2){
    if(myMap[it]>0){
      res.push(it)
      myMap[it]--
    }
  }
  return res
};
console.log(intersect([1],[1]));
