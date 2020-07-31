/**
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 * 
 * 思路：
 * 1 从头到尾
 * 2 固定首尾，中间左减右加。 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length === 0) return [];
    nums.sort((a, b) => a > b ? 1 : -1);
    let numsArr = [];
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = nums.length - 1; j > 2; j--) {
            if (j > 0 && nums[j] === nums[j + 1]) continue;
            let right = j - 1, left = i + 1;
            while (right > left) {
                let sum = nums[i] + nums[left] + nums[right] + nums[j];
                if (sum === target) {
                    numsArr.push([nums[i], nums[left], nums[right], nums[j]]);
                    left++;
                    right--;
                    while (nums[left - 1] === nums[left]) left++;
                    while (nums[right + 1] === nums[right]) right--;
                } else if (sum > target) {
                    right--;
                } else { left++; }
            }
            // 第三层循环： right > left;
        }
        // 第二层循环 j:从尾到首
    }
    console.log(numsArr);
    return numsArr;
};
// [1, -2, -5, -4, -3, 3, 3, 5]
//     - 11
// [-1, -3, -2, 2, 3, -3, 0, -4],4
console.log(fourSum([-1, -3, -2, 2, 3, -3, 0, -4], 4));