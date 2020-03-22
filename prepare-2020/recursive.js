/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。
 * 你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */
// 时间复杂度 O(2^n) -- leetcode 70 时间超时
const recursive = (n) => {
    if (n <= 2) {
        return n;
    }
    return recursive(n - 1) + recursive(n - 2);
}
let testN = 3;
// console.log('result: ', recursive(testN));

const recursiveOptimization = (n) => {
    if (n <= 2) {
        return n;
    }
    let sum, i = 3, temp1 = 2, temp2 = 1;
    while (i <= n) {
        sum = temp1 + temp2;
        temp2 = temp1;
        temp1 = sum;
        i++;
    }
    return sum;
}

let testM = 3;
console.log('result: ', recursiveOptimization(testM));