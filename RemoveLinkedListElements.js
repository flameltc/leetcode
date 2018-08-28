/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head !== null && head.val == val) {
    head = head.next
  }
  if (head == null) return []
  var pre = head
  var cur = pre.next
  while (cur) {
    if (cur.val == val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }
  return head
};