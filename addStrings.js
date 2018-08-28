/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var carry = 0
  var m = n = 0
  var str = []
  while (num1.length !== num2.length) {
    if (num1.length > num2.length) {
      num2 = "0" + num2
    } else {
      num1 = "0" + num1
    }
  }
  for (let i = num1.length - 1; i >= 0; i--) {
    m = num1[i] - 0
    n = num2[i] - 0
    str[i] = m + n + carry
    if (str[i] > 9) {
      carry = 1
      str[i] = str[i] % 10
    } else {
      carry = 0
    }
  }
  if (carry) {
    str = '1' + str.join('');
  } else {
    str = str.join('');
  }
  return str
};
addStrings("123", "779")