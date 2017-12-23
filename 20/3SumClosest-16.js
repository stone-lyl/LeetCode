/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 0) return [];
    nums.sort((a, b) => a > b ? 1 : -1);
    let result;
    let min = nums[0] + nums[1] + nums[nums.length - 1] - target;
    min = min > 0 ? min : -min;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (right > left) {
            let sum = nums[i] + nums[right] + nums[left];
            let gap = sum - target;
            if (gap === 0) {
                result = nums[i] + nums[left] + nums[right];
                return result;
            } else if (gap > 0) {
                if (min >= gap) {
                    min = gap;
                    result = sum;
                }
                right--;
            } else {
                if (min >= -gap) {
                    min = -gap;
                    result = sum;
                }
                left++;
            }
        }
    }
    return result;
};