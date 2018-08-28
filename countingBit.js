/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var number = [0]
  var count = -1
  for (let i = 1; i <= num; i++) {
    if ((i & (i - 1)) == 0) {
      count++
      number[i] = 1
    } else {
      number[i] = 1 + number[i - Math.pow(2, count)]
    }
  }
  return number
};
countBits(16)

// 0 0       0 
// 1 1       1
// 2 10      1
// 3 11      2
// 4 100     1
// 5 101     2
// 6 110     2
// 7 111     3 
// 8 1000    1
// 9 1001    2
// 10 1010   2
// 11 1011   3
// 12        2
// 13        3
// 14        3
// 15        4
// 16        1