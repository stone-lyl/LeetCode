/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length;) {
        if (val === nums[i]) nums.splice(i, 1);
        else i++;
    }
    // console.log(nums, nums.length);
    return nums.length;
};
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// @lc code=end

