/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let nums = nums1.slice(0, m);
    let len = nums1.length;
    let i = 0, j = 0;
    for (let index = 0; index < len; ) {
        if (nums[i] <= nums2[j]) {
            if (i >= m) {
                nums1.splice(index, n - j, ...nums2.slice(j, n));
                return nums1;
            }
            nums1[index] = nums[i];
            i++;
            index++;
        } else {
            if (j >= n) {
                nums1.splice(index, m - i, ...nums.slice(i, m));
                return nums1;
            }
            nums1[index] = nums2[j];
            j++;
            index++;
        }
    }
    return nums1;
};

// @lc code=end

