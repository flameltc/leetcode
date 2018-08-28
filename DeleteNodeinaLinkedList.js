/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function (head,node) {
  var p=head
  while (p.next!=null) {
    if(p.next.value==node){
      p.next=p.next.next
    }else {
      p=p.next
    }  
  }
  return head
  // if(head.val===node){
  //   return 
  // }
  // var dig=deleteNode(head.next,node)
};