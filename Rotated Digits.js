/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count=0
  for(let i=1;i<=N;i++){
    if(isRotatedDigits(i)&&findNum(i)){
      count++
    }
  }
  return count

  function isRotatedDigits(num){
    if(num<1) return true
    var dig=num%10
    return (dig==0||dig==1||dig==2||dig==5||dig==6||dig==8||dig==9)&&isRotatedDigits(Math.floor(num/10))
  }

  function findNum(num) {
    if(num<1) return false
    var dig=num%10
    if(dig==2||dig==5||dig==6||dig==9){
      return true
    }else{
      return findNum(Math.floor(num/10))
    }
  }
};
console.log(rotatedDigits(10));
console.log();

