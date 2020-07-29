/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide1 = function (dividend, divisor) {
    let dividendAbs = Math.abs(dividend);
    let divisorAbs = Math.abs(divisor);
    if (dividendAbs < divisorAbs) { 
        return 0;
    } else if (dividendAbs === divisorAbs) {
        return Math.sign(dividend) === Math.sign(divisor) ? 1 : -1;
    }
    let result = 0;
    while (dividendAbs >= divisorAbs) {
        dividendAbs = dividendAbs - divisorAbs;
        result += 1;
    }
    result = Math.sign(dividend) === Math.sign(divisor) ? result : -result;
    return result;
};

var divide = function (dividend, divisor) {
    let dividendAbs = dividend > 0 ? dividend : -dividend;
    let divisorAbs = divisor > 0 ? divisor : -divisor;
    let dividendStr = dividendAbs.toString();
    let divisorStr = divisorAbs.toString();
    let dividendLen = dividendStr.length;
    let divisorLen = divisorStr.length;
    let INT_MAX = 0x7FFFFFFF;
    let INT_MIN = 1 << 31;
    if (dividendAbs < divisorAbs) { 
        return 0;
    }
    let resultArr = [];
    if (dividendLen >= divisorLen) {
        let tempDividend = +dividendStr.slice(0, divisorLen);
        let diff = dividendLen - divisorLen;
        for (let index = 0; index <= diff; index++) {
            let countDigit = 0;
            if (index !== 0) {
                let from = divisorLen + index - 1;
                tempDividend = +`${tempDividend}${dividendStr.substr(from, 1)}`;
            }
            while (tempDividend >= divisorAbs) {
                tempDividend = tempDividend - divisorAbs;
                countDigit += 1;
            } 
            resultArr.push(countDigit);
        }
    }
    console.log(resultArr);
    result = resultArr.join('');
    result = Math.sign(dividend) === Math.sign(divisor) ? result : -result;
    if (result > INT_MAX) {
        return INT_MAX;
    } else if (result < INT_MIN) {
        return INT_MIN;
    }
    return result;
};
// @lc code=end
console.log(divide(-2147483648, 1), 'result');

