/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // if(x==0){
  //   return 0
  // }
  // for(let i=0;i<=x/2+1;i++){
  //   if(i*i>x){
  //     return i-1;
  //   }else if(i*i==x){
  //     return i
  //   }
  // }
  var up = x
  var down = 0
  var cen
  do {
    cen = (up + down) / 2
    if (cen * cen > x) {
      up = cen
    } else if (cen * cen < x) {
      down = cen
    } else {
      return cen
    }
  } while (cen * cen >= x + 1 || cen * cen < x);

  cen = Math.floor(cen)
  return cen
};
mySqrt(2)
mySqrt(4)
mySqrt(6)