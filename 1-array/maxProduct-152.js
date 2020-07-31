/**
 *  * 思路：
 * 1.   正反走一遍，可以避免出现奇数个负数的情况下获取到最大值。
 * 2.   对nums[i] === 0 和 不等于0的情况进行区分判断。
 */

/**
* @param {number[]} nums
* @return {number}
*/
var maxProduct = function (nums) {
    let max = nums[0], product = 1;
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            product = 1;
            max = Math.max(0, max);
        } else {
            product *= nums[i];
            max = Math.max(product, max);
        }
    }
    product = 1;
    for (let k = nums.length - 1; k > 0; k--) {
        if (nums[k] === 0) {
            product = 1;
            max = Math.max(0, max);
        } else {
            product *= nums[k];
            max = Math.max(product, max);
        }
    }
    return max;
}