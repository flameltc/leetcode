/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 == 1) {
    return false;
  }
  var flag = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      flag.push(s[i]);
    } else if (s[i] === '}' && flag[flag.length - 1] === '{' || s[i] === ']' && flag[flag.length - 1] === '[' || s[i] === ')' && flag[flag.length - 1] === '(') {
      flag.pop();
    }
  }
  return flag.length === 0;
};