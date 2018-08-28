/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  paragraph = paragraph.replace(/[!,.\'?;:]/g, '').toLowerCase().split(' ')
  var ms = {}
  var maxCount = 0
  var dig
  paragraph.forEach(it => {
    ms[it] = (ms[it] == null) ? 1 : ms[it] + 1
    if (ms[it] >= maxCount && !banned.includes(it)) {
      maxCount = ms[it]
      dig = it
    }
  })
  return dig
};
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
console.log(mostCommonWord(paragraph, banned))