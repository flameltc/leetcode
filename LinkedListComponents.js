/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  var number = 0
  var val = null
  while (head) {
    if (!G.includes(val) && (G.includes(head.val))) {
      number++
    }
    val = head.val
    head = head.next
  }
  return number
};