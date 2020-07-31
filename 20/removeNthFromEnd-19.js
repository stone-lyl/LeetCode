
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
 * 1.获得listnode 的长度。
 * 2.找到删除的位置。
 * 3.将一个个节点push到数组中
 * 4.将数组连接成链表。
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (n === 0) return head;
    let start = head, count = 1;
    while (start.next !== null) {
        start = start.next;
        count++;
    }
    console.log(count); //count 个数
    let len = count - n, tempArr = []; // len 位置
    start = head;
    console.log(start);
    for (let i = 0; i < count - 1; i++) {
        if (len - 1 === i) {    // 再被删除位置前一个
            start = start.next.next;
            if (i === 0) tempArr.push(new ListNode(head.val));  // 处理再head只有两个节点的情况。
        } else if (len - 1 < 0) {   // head长度为1
            start = start.next;
        }
        else if (i === 0) {         // i 等于 0 使直接 push 第一个head.val节点
            tempArr.push(new ListNode(head.val));
            start = start.next;
        }
        else {
            start = start.next;
        }

        if (start !== null) {   //选取有效的节点。
            tempArr.push(new ListNode(start.val));
        }
    }
    console.log('result', tempArr);
    let newList = tempArr[0];
    // 通过依次for循环将数组连接成 链表。
    for (let k = 1; k < tempArr.length; k++) {
        tempArr[k - 1].next = tempArr[k];
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
