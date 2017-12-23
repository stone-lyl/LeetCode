/**
 * 列出 从千位到个位所有的罗马字,
 * 将数字分隔，最后找到对应的罗马数字，进行连接。
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var roman = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ];

    if (isNaN(num)) return num;
    let str = '', romanStr;
    let numStr = num.toString().split("").reverse();
    for (let i = numStr.length - 1; i >= 0; i--) {
        romanStr = roman[i][numStr[i]]
        str = str.concat(romanStr);
    }
    return str;
};