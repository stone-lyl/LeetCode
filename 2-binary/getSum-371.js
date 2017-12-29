/** 例子： 759 + 674 = 1433
* 不考虑进位得： 323  异或运算不考虑进位
* 考虑进位得： 1110   与运算
* 323 + 1110 = 1433 
* 将两者相加，终止条件是进位为0时
**/
var getSum = function (a, b) {
    if (b === 0) { return a };
    if (a === 0) { return b };

    while (b !== 0) {
        var carry = a & b; //进位值
        a = a ^ b;         //相加 不考虑进位
        b = carry << 1;  //進位
    }
    return a;
};