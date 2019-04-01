// Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  for (var i = 0; i < strs[0].length;i++){
    for (let str in strs) {
      if (str[i] !== strs[0][i]) {
        return strs[0].slice(0,i)
      }
    }
  }
  return strs[0]
};