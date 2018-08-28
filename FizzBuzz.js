/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var stack = []
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      stack[i] = 'FizzBuzz'
    } else if ((i + 1) % 3 == 0 && (i + 1) % 5 !== 0) {
      stack[i] = 'Fizz'
    } else if ((i + 1) % 5 == 0 && (i + 1) % 3 !== 0) {
      stack[i] = 'Buzz'
    } else {
      stack[i] = (i + 1).toString()
    }
  }
  return stack;
};

fizzBuzz(3)