
/**
 * Definition for singly-linked list.
 *   function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *  1->2->3->4->5, and n = 2.
 * 1->2->3->5.
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let start = head, count = 1;
    while (start.next !== null) {
        start = start.next;
        count++;
    }
    console.log(count);
    let len = count - n, tempArr = [];
    start = head;
    console.log(start); 
    for( let i = 0; i < count -1; i++){
        if(len-1 === i ){
            start = start.next.next;
            if (i === 0) tempArr.push(new ListNode(head.val));
        }else if( len -1 < 0 ){
            start = start.next;
        }
        else if( i === 0){
            tempArr.push(new ListNode(head.val));
            start = start.next;
        }
        else{
            start = start.next;
        }

        if( start !== null){
            tempArr.push(new ListNode(start.val));
        }
    }
    console.log('result', tempArr);
    let newList = tempArr[0] ;
    for( let k = 1 ;k< tempArr.length; k++){
        tempArr[k-1].next = tempArr[k];
    }
    return newList;

};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var list1 = new ListNode(1);
list1.next = new ListNode(2);
// list1.next.next = new ListNode(3);
// list1.next.next.next = new ListNode(4);
// list1.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(list1, 1));
