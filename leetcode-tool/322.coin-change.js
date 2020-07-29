/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                console.log('i: ', i, 'dp[i]', dp[i], 'coin:', coin);
            }
        }
    }
    console.log('dp: ', dp);
    const result = dp[amount];
    console.log('result: ', result);
};
let conins = [1, 11, 5];
let amount = 15;
coinChange(conins, amount);
// @lc code=end

