/**
 * >> 有符号右移：
 * 9： 01001
 * 9>>1 -> 4：00100
 * 9>>2 -> 2: 00010
 * & 与操作
 * 9:  1001
 * 14: 1110
 * 8:  1000
 * 9 & 14 -> 8
 * result[i] = result[i>>1] + (i & 1); 规律
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    let result = [], i;
    result[0] = 0;
    for (i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};
