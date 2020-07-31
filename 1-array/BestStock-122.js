/**
 只要 后面的值大于前面的值，都叠加累计。
 *  @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0], max = 0, sum = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[i - 1]) {
            min = prices[i];
        } else {
            if (prices[i] - min > 0) {
                max = prices[i] - min;
                min = prices[i];
                sum += max;
            }
        }
    }
    if (prices.length <= 1) {
        return 0;
    }
    return sum;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4, 6]));