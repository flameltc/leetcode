/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二分法
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return sortedBST(nums, 0, nums.length - 1)

  function sortedBST(nums, left, right) {
    if (right < left) return null
    var mid = Math.floor((left + right) / 2)
    var root = new TreeNode(nums[mid])
    root.left = sortedBST(nums, left, mid - 1)
    root.right = sortedBST(nums, mid + 1, right)
    return root
  }
};