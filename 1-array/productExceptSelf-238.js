/**
 * 记录nums[i]为零的特殊情况
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let zero = [], product = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zero.push(i);
            continue;
        }
        product = product * nums[i];
    }
    let newNums = [];
    for (let k = 0; k < nums.length; k++) {
        if (zero.length > 1) {
            newNums.push(0);
        } else if (zero.length === 1) {
            if (k === zero[0]) {
                newNums.push(product);
            } else {
                newNums.push(0);
            }
        } else {
            newNums.push(product / nums[k]);
        }
    }
    console.log(newNums);
    return newNums;
};
productExceptSelf([1, 2, 5, 3, 0]);