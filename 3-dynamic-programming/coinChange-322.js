/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// Number.MAX_SAFE_INTEGER： 最大的安全整数： 2^53 - 1;
var coinChange = function (coins, amount) {
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
        dp[i] = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i - coins[j]] + 1 < dp[i]) {
                dp[i] = dp[i - coins[j]] + 1;
            }
        }
    }
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
// var coinChange = function (coins, amount) {
//     const DP = [0];
//     let count = 0;

//     for (let i = 1; i <= amount; i += 1) {
//         DP[i] = Number.MAX_SAFE_INTEGER;
//         for (let j = 0; j < coins.length; j += 1) {
//             count++;
//             if (i >= coins[j] && DP[i - coins[j]] + 1 < DP[i]) {
//                 DP[i] = DP[i - coins[j]] + 1;
//             }
//         }
//     }
//     console.log(count);
//     return DP[amount] === Number.MAX_SAFE_INTEGER ? -1 : DP[amount];
// };
// [186, 419, 83, 408], 6249
console.log(coinChange([2], 1));