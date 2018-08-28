/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var carry = 0
  var m = n = 0
  var number = []
  while (a.length !== b.length) {
    if (a.length > b.length) {
      b = "0" + b
    } else {
      a = "0" + a
    }
  }
  for (let i = a.length - 1; i >= 0; i--) {
    m = a[i] - 0
    n = b[i] - 0
    number[i] = m + n + carry
    if (number[i] > 1) {
      carry = 1
      number[i] = number[i] % 2
    } else {
      carry = 0
    }
  }
  if (carry) {
    number = '1' + number.join('');
  } else {
    number = number.join('');
  }
  return number
};
a = '11'
b = '1'
addBinary(a, b)