/**
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

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
var mergeTwoLists = function(l1, l2) {
  let valL1 = l1.val,
    nextL1 = l1.next;
  let valL2 = l2.val,
    nextL2 = l2.next;
  let l3 = { val: null, next: null },
    valL3,
    nextL3 = null;
  function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  do {
    for (; l2.next !== null; ) {
      if (valL1 > valL2) {
        l3.val = valL2;
        valL2 = nextL2.val;
        nextL2 = nextL2.next;
      } else {
        if (l3.val === null) {
          l3.val = valL1;
          valL3 = valL1;
        } else {
          nextL3 = new ListNode(valL1);
          valL3 = valL1;
        }
        valL1 = nextL1.val;
        nextL1 = nextL1.next;
        break;
      }
    }
  } while (nextL1);
};
