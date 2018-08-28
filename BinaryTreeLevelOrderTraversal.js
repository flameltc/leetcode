/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  var result = []

  function preOrder(root, level = 0) {
    if (root == null) {
      return;
    }
    if (root) {
      result[level] = result[level] || []
      result[level].push(root.val)
      preOrder(root.left, level + 1)
      preOrder(root.right, level + 1)
    }
  }
  preOrder(root)
  return result
};

module.exports = function array2tree(ary, rootIndex) {
  if (ary[rootIndex] == null) {
    return null
  }
  var rootNode = {
    val: ary[rootIndex],
    left: array2tree(ary, rootIndex * 2 + 1),
    right: array2tree(ary, rootIndex * 2 + 2)
  }
  return rootNode
}



a = array2tree([3, 9, 20, null, null, 15, 7], 0)
a
console.log(levelOrder());