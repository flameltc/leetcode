/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  var slow = head
  var fast = head
  var res = []
  res.push(head.val)
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    res.push(slow.val)
  }
  if (!fast.next) {
    res.pop()
  }
  while (slow.next) {
    slow = slow.next
    if (slow.val == res[res.length - 1]) {
      res.pop()
    } else {
      return false
    }
  }
  return true
};