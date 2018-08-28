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
var reverseList = function (head) {
  if(head==null){
    return null 
  }
  var pre=null
  var rest=null
  var p=head
  while(p!==null){
    rest=p.next  //2->3->4->5          3->4->5
    p.next=pre   //1                   2->1
    pre=p      //1                     2->1
    p=rest    //2->3->4->5             3->4->5
  }
  return pre
};
var a={value:1,next:{value:2,next:{value:3,next:null}}}
reverseList(a)

var reverseBetween = function(head, m, n) {
  if(head==null){
    return null
  }
  var p=head
  var count=0
  while(count<m){
    
  }
};

