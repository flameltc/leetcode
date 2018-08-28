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
var minDiffInBST = function (root) {
    var pre = -Infinity
    var res = Infinity

    function sor(root) {
        if (!root) return;
        sor(root.left)
        res = Math.min(res, root.val - pre)
        pre = root.val
        sor(root.right)
    }
    sor(root)
    return res
};