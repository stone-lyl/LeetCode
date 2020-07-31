/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let resultArr = [];
    if (root === null) {
        return resultArr;
    }
    let loopFn = (node, arr, len) => {
        if (node.val !== null && node.val !== undefined) {
            arr[len] = arr[len] ? arr[len] : [];
            arr[len].push(node.val);
        } else {
            return;
        }
        len++;
        if (node.left) {
            loopFn(node.left, arr, len);
        }
        if (node.right) {
            loopFn(node.right, arr, len);
        }
    }
    loopFn(root, resultArr, 0);
    // console.log(JSON.stringify(resultArr));
    return resultArr;
};

var levelOrder1 = function (root) {
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
let root = { "val": 3, "left": null, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }
    ;
console.log(levelOrder1(root), 'resultArr');