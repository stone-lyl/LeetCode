/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let index = coin; index <= amount; index++) {
            dp[index] += dp[index - coin];
            console.log('index: ', index, 'dp[index]', dp[index]);
        }
    }
    console.log(dp, 'dp');
    console.log(dp[amount], 'amount');
};
let amount = 5;
let coins = [2, 1, 5]
change(amount, coins);
// @lc code=end

