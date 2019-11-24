/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * 改进后方案
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = nums[0];
    for (let i = 1; i < nums.length;) {
        if (count === nums[i]) nums.splice(i, 1);
        else {
            count = nums[i];
            i++;
        }
    }
    // console.log(nums, nums.length);
    return nums.length;
};
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

// 第一次成功使用的方法
// var removeDuplicates = function (nums) {
//     for (let index = 0; index < nums.length; index++) {
//         const num = nums[index];
//         const firstIndex = nums.indexOf(num);
//         const lastIndex = nums.lastIndexOf(num);
//         nums.splice(firstIndex, lastIndex - firstIndex);
//     }
//     return nums.length;
// };
// 下面的内容output一直为[1,1]
// var removeDuplicates = function (nums) {
//     if (!Array.isArray(nums)) {
//         return;
//     }
//     const set1 = new Set(nums);
//     nums = [...set1].slice(0, set1.size);
//     console.log(nums, set1.size, [...set1]);
//     return nums.length;
// };
// @lc code=end

