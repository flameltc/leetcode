// var myPow = function (x, n) {
//   if (n === 0) {
//     return 1
//   } else if (n === 1) {
//     return x
//   } else if (n === -1) {
//     return 1 / x
//   } else if (n % 2 === 0) {
//     return myPow(x * x, n / 2)
//   } else {
//     if (n > 0) {
//       return x * myPow(x * x, (n - 1) / 2)
//     } else {
//       return Math.abs(x) * myPow(x * x, (n - 1) / 2)
//     }
//   }
// };
var transpose = function (A) {
  var result = []
  for (let i = 0; i < A[0].length; i++) {
    result[i] = new Array()
  }
  // for (let i = 0; i < A.length; i++) {
  //   for (let j = 0; j < A[i].length; j++) {
  //     result[j][i] = A[i][j]
  //   }
  // }
  var i = j = 0
  while (i < A.length && j < A[0].length) {
    result[j][i] = A[i][j]
    if (j < A[0].length - 1) {
      j++
    } else {
      j = 0
      i++
    }
  }
  return result
};
transpose([
  [1]
])
function slice(ary,start,end) {
  let res=[]
  while(start<end){
    res.push(ary[start])
    start++
  }
  return res
}

var islandPerimeter = function(grid) {
  let per=0;
for(let i=0;i<grid.length;i++){
  for(let j=0;j<grid[i].length;j++){
    if(grid[i][j]==1){
      per+=4
      if(grid[i-1][j]==1||grid[i+1][j]==1||grid[i][j-1]==1||grid[i][j+1]==1){
        per=per-1
      }
    }
  }
 
}
 return per
};

