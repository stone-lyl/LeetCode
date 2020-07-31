/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 使用广度优先实现
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    let depCount = 0;
    let resultArr = [];
    if (!root) {
        return depCount;
    }
    const loopFn = (root, depCount) => {
        let value = root.val;
        if (value === null || value === undefined) {
            resultArr.push(depCount);
            return;
        }
        depCount++;
        let newRight = root.right;
        let newLeft = root.left;
        if (newRight) {
            loopFn(newRight, depCount);
        }
        if (newLeft) {
            loopFn(newLeft, depCount);
        }
        if (!newLeft && !newRight) {
            resultArr.push(depCount);
        }
    }
    loopFn(root, depCount);
    return Math.min.apply(null, resultArr);
};

let root = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
    ;
let root1 = { 'val': null }; // 1
let root2 = { "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }; // 2
let root3 = { "val": 1, "left": { "val": 2, "left": { "val": 9, "left": null, "right": null }, "right": null }, "right": { "val": 3, right: null, left: { val: 5, right: null, left: null } } };
console.log(minDepth(root), 'depth');
// @lc code=end

