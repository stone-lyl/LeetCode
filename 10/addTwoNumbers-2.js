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
 * @listurn {ListNode}
 */
function ListNode(val, next) {
    this.val = val;
    this.next = null || next;
}
//超时了
var addTwoNumbers = function (l1, l2) {
    let result = [], count = 0;
    let arr1 = listToArray(l1);
    let arr2 = listToArray(l2);
    let length = (l1.length >= l2.length) ? l1.length : l2.length;

    function listToArray(list) {
        let arr;
        while (list) {
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }

    for (let i = 0; i < length; i++) {
        count += l1[i] * Math.pow(10, i) + l2[i] * Math.pow(10, i);
    }
    while (count !== 0) {
        result.push(count % 10); 5
        count = parseInt(count / 10);
    }
    let list, next = null;
    for (let j = result.length - 1; j >= 0; j--) {
        list = new ListNode(result[j]);
        list.next = next;
        next = list;
    }
    return list;
};

//涛涛的解法
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(0);
    var it = result;
    var tail;
    while(l1 || l2) {
        var v1 = l1 ? l1.val : 0;
        var v2 = l2 ? l2.val : 0;
        var tmp = it.val + v1 + v2;
        it.val = tmp % 10;
        it.next = new ListNode(tmp / 10 >= 1 ? 1 : 0);
        tail = it;
        it = it.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
       
    }
    if(it.val === 0) {
        tail.next = null;
    }
    return result;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
