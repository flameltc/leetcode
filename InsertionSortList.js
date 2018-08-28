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
var insertionSortList = function(head) {
    var pre=new ListNode(-1)
    var cur=pre
    while(head){
      cur=pre
      var p=head.next
      while(cur.next&&cur.next.val<=head.val){
        cur=cur.next     
      }
      head.next=cur.next
      cur.next=head
      head=p
    }
    return pre.next
    
};