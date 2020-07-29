/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    let sum = 0, i = 3, temp1 = 2, temp2 = 1;
    while (i <= n) {
        sum = temp1 + temp2;
        temp2 = temp1;
        temp1 = sum;
        i++;
    }
    return sum;
};
// @lc code=end

