/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let resultArr = [];
    if (root === null || root.val === null) {
        return resultArr;
    }
    let loopFn = (node, arr, len) => {
        if (node.val === null) {
            return;
        }
        // arr[len] = arr[len] ? arr[len] : [];
        // arr[len].push(node.val); 
        if (arr[len] === null || arr[len] === undefined) {
            arr[len] = [node.val];
        } else {
            arr[len].push(node.val);
        }
        if (!node.children || node.children.length === 0) {
            return;
        }
        len++;
        node.children.forEach(elem => {
            loopFn(elem, arr, len);
        });
    }
    loopFn(root, resultArr, 0);
    // console.log(JSON.stringify(resultArr), 'json result arr');
    return resultArr;
};

let root = {
    "val": 1, "children": [
        {
            "val": 3, "children": [
                { "val": 5, "children": [] }, { "val": 6, "children": [] }]
        },
        {
            "val": 2, "children": []
        }, {
            "val": 4, "children": []
        }
    ]
};
console.log(levelOrder(root), 'result arr');