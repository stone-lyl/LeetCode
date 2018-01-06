/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let coinsSort = coins.sort((a, b) => a > b);
    console.log(coinsSort);
    for (let i = coinsSort.length - 1; i >= 0; i--) {
        let sum = 0, count = 0;
        if (coinsSort[i] > amount) {
            continue;
        } else if (coinsSort[i] === amount) {
            return 1;
        } else {
            sum += coinsSort[i];
            count = 1;
            for (let j = 0; j < i; j++) {
                sum += coinsSort[j];
                if (sum === amount) {
                    console.log(count + 1);
                    return count++;
                } else if (sum > amount) {
                    break;
                } else {
                    count++;
                }
            }
        }


    }
    return -1;
};
