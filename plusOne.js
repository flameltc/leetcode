/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits.length == 1) {
    if (digits[0] == 9) {
      return [1, 0]
    } else {
      digits[0] += 1
      return digits
    }
  }
  for (let i = digits.length - 1; i > 0; i--) {
    if (i == digits.length - 1) {
      digits[digits.length - 1] += 1;
    }
    if (digits[i] > 9) {
      digits[i - 1] += 1
      digits[i] = 0
    }

  }
  if (digits[0] == 10) {
    digits[0] = 0
    digits.unshift(1);
  }
  return digits
};