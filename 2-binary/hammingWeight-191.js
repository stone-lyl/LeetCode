/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let binaryN = n.toString(2);
    let count = 0;
    for (let i = 0; i < binaryN.length; i++) {
        if (binaryN[i] === '1') count += 1;
    }
    return count;
};