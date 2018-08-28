/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length == 0) {
    return []
  }
  var x = y = 0
  var M = matrix[0].length
  var N = matrix.length
  var number = []
  var up = true
  for (let i = 0; i < M * N; i++) {
    number[i] = matrix[y][x]
    if (up) {
      if ((y - 1) >= 0 && (x + 1) < M) {
        y--
        x++
      } else if (x + 1 == M) {
        y++
        up = false
      } else if (y == 0) {
        x++
        up = false
      }
    } else {
      if ((x - 1) >= 0 && (y + 1) < N) {
        y++
        x--
      } else if (y + 1 == N) {
        x++
        up = true
      } else if (x == 0) {
        y++
        up = true
      }
    }
  }
  return number
}
findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
//matrix[y][x]，左下matrix[y+1][x-1]，右上matrix[y-1][x+1],判断什么时候向下向上