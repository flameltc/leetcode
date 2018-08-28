/**
 * @param {string} s
 * @return {number}
 * str.charCodeAt()-64
 */
var titleToNumber = function(s) {
  var num=0
   for(var i=s.length-1;i>=0;i--){
     num+=(s[i].charCodeAt()-64)*(26**(s.length-i-1))
   }
   return num
}
console.log(titleToNumber('ZY'));
