/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
  //     return i
  //   }
  // }
  // return -1
  let hashMap=new Map();
  for(let i=0;i<s.length;i++){
    if(hashMap.has(s[i])){
      hashMap.set(s[i],[0,i]);
    }else{
      hashMap.set(s[i],[1,i]);
    }
  }
  for(var value of hashMap){
    if(value[1][0]){
      return value[1][1];
    }
  }
  return -1
};
firstUniqChar("loveleetcode")