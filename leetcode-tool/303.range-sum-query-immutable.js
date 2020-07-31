/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for (let index = i; index <= j; index++) {
        const element = this.nums[index];
        sum += element;
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * */
// const nums = [-2, 0, 3, -5, 2, -1];
//   var obj = new NumArray(nums)
//  var param_1 = obj.sumRange(0,2)
 
// @lc code=end

// NumArray.prototype.sumRange = function(i, j) {
//     let sum = 0;
//     // for (let index = i; index <= j; index++) {
//     //     const element = this.nums[index];
//     //     sum += element;
//     // }
//     sum = this.nums.reduce((preVal, curVal, index) => {
//         if (index > j || index < i) {
//             curVal = 0;
//         }
//         // console.log(preVal, 'pre', curVal, 'cur');
//         return preVal + curVal;
//     }, 0);
//     // console.log(sum, 'result');
//     return sum;
// };