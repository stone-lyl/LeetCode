/**
 * 有n个硬币，其中1个为假币，假币重量较轻，你有一把天平，请问，至少需要称多少次能保证一定找到假币?
 * @param {*} n 
 */
const findDefective = (n) => {
    if (n <= 1) return 0;
    const remainder = n % 3;
    const quotient = parseInt(n / 3);
    // let sum = 0;
    // let quotientArr = [];
    if (quotient === 1 && remainder === 0) {
        return 1;
    } else if (quotient === 0) {
        return 1;
    }
    
    return findDefective(quotient + remainder) + 1;
}

console.log('result', findDefective(9));
// log3(n) 只取整 3为底数 （9,27] -> result：3