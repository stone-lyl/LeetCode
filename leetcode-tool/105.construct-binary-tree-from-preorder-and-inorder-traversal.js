/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
// const tree1 = new TreeNode(1);
// console.log(tree1, 'tree1');
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 以中间的元素为分界
    if (preorder.length < 1 || inorder.length < 1) {
        return null;
    }

    const firstNum = preorder[0];
    let firstTree = new TreeNode(firstNum);
    preorder.splice(0, 1);
    const firstIndex = inorder.indexOf(firstNum);
    let leftInorder = inorder.slice(0, firstIndex);
    let rightInorder = inorder.slice(firstIndex + 1, inorder.length);

    console.log('leftInorder: ', leftInorder);
    console.log('rightInorder: ', rightInorder);
    if (leftInorder.length > 1) {
        firstTree.left = buildTree(preorder, leftInorder);
    } else if (leftInorder.length === 1) {
        preorder.splice(preorder.indexOf(leftInorder[0]), 1);
        firstTree.left = new TreeNode(leftInorder[0]);
    }
    if (rightInorder.length > 1) {
        firstTree.right = buildTree(preorder, rightInorder);
    } else if (rightInorder.length === 1) {
        preorder.splice(preorder.indexOf(rightInorder[0]), 1);
        firstTree.right = new TreeNode(rightInorder[0]);
    }
    console.log('tree', firstTree);
    return firstTree;
}
var buildTree1 = function(preorder, inorder) {
    if (preorder.length < 1 || inorder.length < 1) {
        return null;
    }
    const firELem = preorder.splice(0, 1)[0];
    let tree = new TreeNode(firELem);
    
    const inorderIndex = inorder.indexOf(firELem);
    let leftInorder = inorder.slice(0, inorderIndex);
    let rightInorder = inorder.slice(inorderIndex + 1, inorder.length);
    if (leftInorder.length === 1) {
        const leftTemp = leftInorder[0];
        preorder.splice(preorder.indexOf(leftTemp), 1);
        tree.left = new TreeNode(leftTemp);
    } else if (leftInorder.length > 1) {
        tree.left = buildTree1(preorder, leftInorder);
    }
    if (rightInorder.length === 1) {
        const rightTemp = rightInorder[0];
        preorder.splice(preorder.indexOf(rightTemp), 1);
        tree.right = new TreeNode(rightTemp);
    } else if (rightInorder.length > 1) { 
        tree.right = buildTree1(preorder, rightInorder);
    }
    console.log(tree);
    return tree;
};
// let preorder = [-1]
// let inorder = [-1]

preorder = [3, 9, 17, 6, 20, 15, 7]
inorder = [17, 9, 6, 3, 15, 20, 7]
buildTree(preorder, inorder);
// @lc code=end

