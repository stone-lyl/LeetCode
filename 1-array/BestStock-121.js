/**
 * 只允许买一股
 * 
 * Input: [7, 1, 5, 3, 6, 4]
Output: 5
max. difference = 6-1 = 5 
(not 7-1 = 6, as selling price needs to be larger than buying price)
 *
 *思考本题最重要有两个因素： 1. 买入和抛差距最大的时候 gap  2. 时间：买入 < 抛出 
 gap 记录符合情况下的所有差距， 通过max比较。
 min始终为当前最小值
 *  @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min < 0) {
            min = prices[i];
        } else {
            max = max > prices[i] - min ? max : prices[i] - min;
        }
    }
    if (prices.length <= 1) {
        return 0;
    }
    return max;
};
console.log(maxProfit([1,2]));