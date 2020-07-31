/**
 * integer%2 -》 获得的内容为它的二进制
eg:  6%2  -> 0    3%2->1  1%2->1   110
 // 將bits array轉換成整數回傳
    return parseInt(list.join(""),2);
    
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let bit1 = 0, bitList = [];
    for (let i = 32; i > 0; i--) {
        if (n > 0) {
            bitList.push(n % 2);
            n = parseInt(n / 2);
        } else {
            bitList.push(0);
        }
    }
    for (let j = bitList.length - 1; j >= 0; j--) {
        if (bitList[j] === 1) {
            bit1 += Math.pow(2, 31 - j);
        }
    }
    return bit1;
};