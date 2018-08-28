/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length!==t.length) return false
  var nums=[]
  var len=s.length
  for(var i=0;i<len;i++){
    if(!nums[s.charCodeAt(i)-97]){
      nums[s.charCodeAt(i)-97]=1
    }else {
       nums[s.charCodeAt(i)-97]++
    }
    if(!nums[t.charCodeAt(i)-97]){
      nums[t.charCodeAt(i)-97]=-1
    }else {
      nums[t.charCodeAt(i)-97]--
    }
  }
  for(let it of nums){
    if(it!==0&&it!=undefined){
      return false
    }
  }
  return true
};