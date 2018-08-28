/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
   function countPrimes() {
     let flagArray=[],arr=[]
    for (let i = 2; i < Math.sqrt(100000000); i++) {
      if (flagArray[i] === undefined) {
        flagArray[i] = 1;
        if(flagArray[i]&&isPalindrome(i)){
          arr.push(i);
        }
        for (let j = 2; i * j < 100000000; j++) {
          flagArray[i * j] = 0;
        }
      }
    }
    return arr;
  }
  function isPalindrome(x) {
    let value = 1;
    let str = x.toString();
    for (let i = 0; i < str.length/2; i++) {
      if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
        value = 0;
      }
    }
    if (value == 1) {
      return true;
    } else {  
      return false;
    }
  }
  let k=0
  
};