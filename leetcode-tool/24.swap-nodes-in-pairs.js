/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
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
var swapPairs = function(head) {
    console.log(head, 'head');
        // 当head为null或者只要一个listnode时
    if (!head || !head.next) {
        return head;
    }
    let result;
    let temp;
    let left = new ListNode(0);
    let mid = head;
    let right = head.next;

    let iter = (left, right, mid) => {
        temp = right.next;
        right.next = mid;
        // 修改了head
        mid.next = temp;

        left.next = right;
        // 我还是不懂result是怎么改变的
        if (!result) {
            result = right;
        }
        left = mid;
        if (!left.next || !left.next.next) {
            return;
        }
        mid = left.next;
        right = mid.next;
        iter(left, right, mid);
    }
    iter(left, right, mid);
    console.log(head, 'head');
    console.log(result, 'result');
    return result;
};
// @lc code=end

class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

const listFromArray = (arr) => {
    let head;
    let cursor;
    for (const item of arr) {
        let node = new ListNode(item);
        if (cursor) {
            cursor.next = node;
            cursor = node;
        }
        if (!head) {
            head = node;
            cursor = head;
        }
    }
    return head;
}

const listToArray = (head) => {
    let arr = [];
    let cursor = head;
    while (cursor) {
        arr.push(cursor.val);
        cursor = cursor.next;
    }
    return arr;
}

const test = (input) => {
    console.log('before: ', input);
    let head = listFromArray(input);
    head = swapPairs(head);
    console.log('after: ', listToArray(head));
    console.log('');
}

test([1, 2, 3, 4, 5, 6])
// test([1, 2, 3])
// test([1, 2])
