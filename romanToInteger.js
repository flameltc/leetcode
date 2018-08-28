/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var flag = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  var sum = flag.get(s[0])

  for (let i = 1; i < s.length; i++) {
    if (flag.get(s[i]) <= flag.get(s[i - 1])) {
      sum += flag.get(s[i])
    } else {
      sum = sum + flag.get(s[i]) - 2 * flag.get(s[i - 1])
    }
  }
  return sum
};