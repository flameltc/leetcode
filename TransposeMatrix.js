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