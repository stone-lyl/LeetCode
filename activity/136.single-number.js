/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) {
            return num;
        }
    }
};
// 采用异或运算实现： 0^2 -> 2 |  0^2^2 -->0  | 0^x --> x | 0^x^x --> 0
// @lc code=end

