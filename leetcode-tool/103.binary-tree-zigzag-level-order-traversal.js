/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
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
    while (queue.length) {
           
        // direction === 0: 左到右， direction === 1: 右到左
        const direction = index % 2;
        if (direction === 1) {
            queue.reverse();
        }
        let arrTemp = [];
        for (let i = 0; i < queue.length; i++) {
            let tree = queue[i];
            if (!getVal(tree, index)) {
                continue;
            };
            if (direction === 1) {
                const tempIndex = queue.length - 1 - i;
                tree = queue[tempIndex];
                if (tree === null) {
                    continue;
                }
            }
            if (tree.left !== null) {
                arrTemp.push(tree.left);
            }
            if (tree.right !== null) {
                arrTemp.push(tree.right);
            }
        }
        queue = arrTemp;
        index++;        
    };
    console.log(JSON.stringify(resultArr));
    console.log('resultArr');

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
       left: { val: 3, left: { val: 4, left: { val: 5, left: null, right: null }, right: { val: 6, left: null, right: null } }, right: null },
       right: null },
    right: null }
console.log(zigzagLevelOrder(TreeNode3));
// @lc code=end

