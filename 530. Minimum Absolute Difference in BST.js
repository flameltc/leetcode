/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    var pre = -Infinity
    var res = Infinity
    helper(root)
    return res

    function helper(root) {
        if (!root) return;
        helper(root.left, pre, res)
        res = Math.min(res, root.val - pre)
        pre = root.val
        helper(root.right, pre, res)
    }
};
