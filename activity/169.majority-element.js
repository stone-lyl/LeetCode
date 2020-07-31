/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let result = [];
    for (const num of nums) {
        if (result[num]) {
            result[num] += 1;
        } else {
            result[num] = 1;
        }

        if (result[num] > nums.length / 2) {
            return num;
        }
    }
};
// @lc code=end

