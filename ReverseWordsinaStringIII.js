/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function reverse(s) {
    let str = ''
    for (let i = s.length - 1; i >= 0; i--) {
      str += s[i]
    }
    return str.trim()
  }
  let stack = [],
    k = 0
  stack[0] = ''
  for (let i = 0; i < s.length; i++) {
    stack[k] += s[i]
    if (s[i] == ' ') {
      stack[k] = reverse(stack[k]) + ' '
      k++
      stack[k] = ''
    } else if (i == s.length - 1) {
      stack[k] = reverse(stack[k])
    }
  }
  let str = ''
  for (let i = 0; i < stack.length; i++) {
    str += stack[i]
  }
  return str
};
reverseWords("Let's take LeetCode contest")