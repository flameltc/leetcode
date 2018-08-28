/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if(!root) return true
  if(checkDepth(root)==-1){
    return false
  }else return true
  function checkDepth(root) {
    if (!root) {
      return 0
    }
    var left=checkDepth(root.left)
    if(left==-1){
      return -1
    }
    var right=checkDepth(root.right)
    if(right==-1){
      return -1
    }
    if(Math.abs(left-right)>1){
      return -1
    }else {
      return 1+Math.max(left,right)
    }
  }
};

