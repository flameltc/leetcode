/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.67%)
 * Likes:    835
 * Dislikes: 0
 * Total Accepted:    209.2K
 * Total Submissions: 369.3K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 当x<0时，false
  if (x < 0 || (x%10 === 0 && x!==0)) {
    return false
  }
  // 反转一半数字，相等的话为true
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = x % 10 + reverseNum * 10;
    x = Math.floor(x / 10);
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10);
};
// @lc code=end

