/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head
  }
  var fast = head
  var slow = head
  var pre = head
  while (fast && fast.next) {
    pre = slow
    fast = fast.next.next
    slow = slow.next
  }
  pre.next = null
  return merge(sortList(head), sortList(slow))
}

function merge(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = merge(l1.next, l2)
    return l1
  } else {
    l2.next = merge(l1, l2.next)
    return l2
  }
}