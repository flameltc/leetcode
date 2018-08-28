/**
 * @param {number[][]} points
 * @return {number}
 * S=1/2[x1(y2-y3)+x2(y3-y1)+x3(y1-y2)]
 */
var largestTriangleArea = function (points) {
  let len = points.length
  let x1, x2, x3, y1, y2, y3, s
  let max = 0
  for (let i = 0; i < len - 2; i++) {
    x1 = points[i][0]
    y1 = points[i][1]
    for (let j = i + 1; j < len - 1; j++) {
      x2 = points[j][0]
      y2 = points[j][1]
      for (let k = j + 1; k < len; k++) {
        x3 = points[k][0]
        y3 = points[k][1]
        s = (1 / 2) * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
        max = max > s ? max : s
      }
    }
  }
  return max
};
var points = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, 2],
  [2, 0]
]
console.log(largestTriangleArea(points));