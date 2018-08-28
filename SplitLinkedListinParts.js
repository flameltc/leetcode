/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  let len = 0
  let cur = root
  let res = []
  while (cur) {
    cur = cur.next
    len++
  }
  let par = Math.floor(len / k)
  let last = len % k
  let cur = root
  for (let i = 0; i < k; i++) {
    res[i] = root
    for (let j = 0; j < par + (last > 0); j++) {
      cur = root
      root = root.next
    }
    if (cur) {
      cur.next = null
    }
    last--
  }
  return res
};