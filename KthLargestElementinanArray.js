/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var pivot
  while(true){
    pivot=partition(nums,left,right)
    if(pivot==k-1) return nums[pivot]
    else if(pivot>k-1) right=pivot-1
    else left=pivot+1
  }
  function partition(ary,left=0,right=ary.length-1) {
    var pivot=left
    var l=left+1
    var r=right
    while(l<=r){
      if(ary[l]<ary[pivot]&&ary[pivot]<ary[r]){
        swap(ary,l,r)
      }
      if(ary[l]>=ary[pivot]){
        l++
      }
      if(ary[r]<=ary[pivot]){
        r--
      }
    }
    return pivot
  }  
  function swap(ary,i,j) {
    var tmp=ary[i]
    ary[i]=ary[j]
    ary[j]=tmp
  }
};
