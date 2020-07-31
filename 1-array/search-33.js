/**
 * 第一种思路：
 * var search = function(nums, target) {
    let index = nums.indexOf(target);
    return index;
};
 */

/**
 * 第二个做法，二分法。
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function (nums, target) {
    let low = 0, heigh = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let mid = Math.floor((low + heigh) / 2);
        if (target === nums[mid]) return mid;
        else if (target < nums[low]) low++;
        else if (target > nums[heigh]) heigh--;
        else {
            if (nums[mid] > target) heigh = mid - 1;
            if (nums[mid] < target) low = mid + 1;
        }
    }
    return -1;
};