/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return nums[0];
    }
    let opt = [];
    opt[0] = nums[0];
    opt[1] = Math.max(nums[0], nums[1]);
    for (let index = 2; index < len; index++) {
        opt[index] = Math.max(nums[index] + opt[index - 2], opt[index - 1]);
    }
    console.log(opt, 'opt11111');
    return opt[len - 1];
};
// let testArr1 = [1,7,9,4];
// let testArr2 = [2,1,1,2];
// console.log(rob(testArr2));
// @lc code=end

