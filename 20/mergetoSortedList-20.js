/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let l3 = new ListNode(0);
    // console.log('init l3', l3);
    let temp = l3;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            temp.next = l2;
            l2 = l2.next;
        } else {
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
        // console.log(temp);
        // console.log('l3:', l3);
    }
    if (l1) {
        temp.next = l1;
    }
    if (l2) {
        temp.next = l2;
    }
    return l3.next;
};
// const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
// const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
// console.log(mergeTwoLists(l1, l2));
