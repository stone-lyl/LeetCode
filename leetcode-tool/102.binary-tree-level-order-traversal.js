/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let resultArr = [];
    if (root === null || root.val === null) {
        return resultArr;
    }
    let queue = [root];
    let index = 0;
    const getVal = (tree, index) => {
        if (tree ===null || tree.val === null) {
            return false;
        }
        if (resultArr[index] !== null && resultArr[index] !== undefined) {
            resultArr[index].push(tree.val);
        } else {
            resultArr[index] = [tree.val];
        }
        return true;
    }
    while (queue.length !== 0) {
        let tempQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const tree = queue[i];    
            if (!getVal(tree, index)) {
                continue;
            };

            if (tree.left !== null) {
                tempQueue.push(tree.left);
            }

            if (tree.right !== null) {
                tempQueue.push(tree.right);
            }
        }
        queue = tempQueue;
        index++;
    }
    console.log(JSON.stringify(resultArr));
    return resultArr;
};

const TreeNode = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};
const TreeNode1 = null;
const TreeNode2 = {
    val: 1,
    left: {
       val: 2,
       left: { val: 4, left: null, right: null },
       right: null },
    right:{
       val: 3,
       left: null,
        right: { val: 5, left: null, right: null }
    }
}
const TreeNode3 =  {
    val: 1,
    left: {
       val: 2,
        left: {
            val: 3, left: {
                val: 4, left: {
                    val: 5, left: null, right: null
                }, right: {
                    val: 6, left: null, right: null
                }
            }, right: null
        },
       right: null },
    right: null }
console.log(levelOrder(TreeNode3));
// @lc code=end

