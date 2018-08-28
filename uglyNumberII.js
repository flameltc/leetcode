/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  var min
  var number = [1]
  var tw = th = fi = 0
  for (let i = 0; i < n; i++) {
    min = Math.min(number[tw] * 2, number[th] * 3, number[fi] * 5)
    number.push(min)
    if (number[tw] * 2 === min) {
      tw++
    }
    if (number[th] * 3 === min) {
      th++
    }
    if (number[fi] * 5 === min) {
      fi++
    }
  }
  return number[n - 1]
};
nthUglyNumber(10)