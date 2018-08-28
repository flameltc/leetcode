/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  var size = word.length
  var count = 0
  if (size == 1) return true
  for (var i = 1; i < size; i++) {
    if (word[i].charCodeAt() >= 97 && word[i].charCodeAt() <= 122) {
      count++
    } else {
      count += 2
    }
  }
  if (size == count + 1 || (size * 2 == count + 2 && word[0].charCodeAt() < 97)) {
    return true
  } else {
    return false
  }
};