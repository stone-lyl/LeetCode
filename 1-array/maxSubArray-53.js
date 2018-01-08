/**
 * 思路：
 * 很经典的一个题目，感觉题目本身不难，但是想法会太多。
以 sum < 0  时, 重置sum = 0， 再去加上后续的值。 sum > 0 时，sum = sum + nums[i]
最后和 max进行比较。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max, sum = 0;
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (sum < 0) {
            sum = 0;
            sum = nums[i];
        } else {
            sum = sum + nums[i];
        }
        max = max > sum ? max : sum;
    }
    return max;
};

var maxSubArray2 = function (nums) {
    let max = 0, sum = 0;
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums[0];
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum < 0) {
            sum = 0;
        } else {
            max = max > sum ? max : sum;
        }
    }
    return max;
};

var max = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(max);