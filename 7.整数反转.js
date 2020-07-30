/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (33.27%)
 * Likes:    1497
 * Dislikes: 0
 * Total Accepted:    232.1K
 * Total Submissions: 697.4K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let isPlus = x >= 0;
  x = Math.abs(x);
  if (x / 10 < 1) {
    return x;
  }
  while (x/10>=1) { 
    num = x % 10;
    result = (result + num) * 10;
    x = Math.floor(x / 10);
  }
  const res = isPlus ? result + x : -1 * (result + x);
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0;
  }
  return res;
};
// @lc code=end

