/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    var temp = 0
    helper(root)
    return root

    function helper(root) {
        if (!root) return
        helper(root.right)
        root.val += temp
        temp = root.val
        helper(root.left)

    }
};