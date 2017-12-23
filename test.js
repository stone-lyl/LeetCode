/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (n === 0) return head;

    const shouldUpdateRemoveNode = count => count < 0;

    const paddedHead = {
        next: head
    };

    let removeNode = paddedHead;
    let nextNode = paddedHead;
    let i = n; // 2

    while (nextNode) {
        if (shouldUpdateRemoveNode(i)) removeNode = removeNode.next;
        nextNode = nextNode.next;
        i--;
    }

    removeNode.next = removeNode.next.next;

    return paddedHead.next;

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(list1, 3));