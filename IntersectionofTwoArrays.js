/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var number = new Set()
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        number.add(nums1[i])
      }
    }
  }
  var result = [],
    k = 0
  number.forEach(function (value) {
    result[k] = value
    k += 1
  })
  return result
};