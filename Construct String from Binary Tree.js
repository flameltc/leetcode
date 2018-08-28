/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  return helper(t).reduce((res,item)=>{
    res+=item
  },'')
  
  function helper(t, ary = []) {
    if (t) {
      ary.push(t.val)
      if (t.left != null || t.right != null) {
        ary.push('\(')
        helper(t.left, ary)
        ary.push('\)')
      }
      if (t.right != null) {
        ary.push('\(')
        helper(t.right, ary)
        ary.push('\)')
      }
      return ary
    }
  }
};