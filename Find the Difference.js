/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var myMap = new Map()
  var b
  for (var i = 0; i < t.length; i++) {
    if (!myMap.get(t[i])) {
      myMap.set(t[i], 1)
    } else {
      b = myMap.get(t[i])
      b++
      myMap.set(t[i], b)
    }
  }
  for (var i = 0; i < s.length; i++) {
    b = myMap.get(s[i])
    b--
    myMap.set(s[i], b)
  }
  for (var [key, value] of myMap) {
    if (value !== 0) {
      return key
    }
  }
};
console.log(findTheDifference('as', 'asd'));