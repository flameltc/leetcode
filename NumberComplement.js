/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let flag='',sum=0,k=0
    while(num/2>=1/2){
      flag=((num%2)^1)+flag
      num=(num-num%2)/2 
    }
  for(let i=flag.length-1;i>=0;i--){
    sum+=flag[i]*(2**k)
    k++
  }
  return sum
};
debugger;findComplement(2)
