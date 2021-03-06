// Given a string, find the length of the longest substring without repeating characters.

//   Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
  var start = 0
  var maxLen = 0
  var map = new Map()
  for (var i = 0; i < s.length; i++){
    let ch = s[i]
    if (map.get(ch) >= start) {
      start = 
    }
  }
}