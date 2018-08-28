/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var mm = new Map()
  var len = nums.length / 2
  for (var it of nums) {
    if (!mm.get(it)) {
      mm.set(it, 1)
    } else {
      mm.set(it, mm.get(it) + 1)
    }
  }
  for (var [key, value] of mm) {
    if (value >= len) {
      return key
    }
  }
};