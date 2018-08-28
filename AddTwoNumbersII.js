/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var s1=s2=[]
    while(l1){
      s1.push(l1.val)
      l1=l1.next
    }
    while(l2){
      s2.push(l2.val)
      l2=l2.next
    }
     
};