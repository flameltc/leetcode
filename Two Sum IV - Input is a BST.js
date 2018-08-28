/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  var s = new Set()
  return findEl(root, k, s)

  function findEl(root, k, s = new Set()) {
    if (!root) return false
    if (s.has(k - root.val)) {
      return true
    }
    s.add(root.val)
    return findEl(root.right, k, s) || findEl(root.left, k, s)
  }
};