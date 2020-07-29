
/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start


const sortNum = (element, nums, index) => {
    let head = nums.splice(0, index);
    nums.sort((a, b) => a - b);
    const findIndex = nums.findIndex(x => x === element);
    const spliceNum = nums.splice(findIndex + 1, 1);
    head = head.concat(spliceNum[0]);
    console.log('sort arr', head);
    nums.splice(0, 0, ...head);
    console.log('sort arr', nums, head);
    return nums;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    if (len < 2) {
        return nums;
    }
    let targetNum = {
        num: nums[len - 1],
        index: len - 1
    };
    for (let index = len - 2; index >= 0; index--) {
        const element = nums[index];
        // 1. 找出后面比前面大的内容。
        // 2. 找到后，从此元素截断，前面内容不变，后面内容进行从小到大排序
        // 3. 将新排序后，元素后一位数，放到元素之前的位置。
        // 4. 拼接前面截取的内容。
        if (element < targetNum.num) {
            let head = nums.splice(0, index);
            nums.sort((a, b) => a - b);
            const findIndex = nums.lastIndexOf(element);
            const spliceNum = nums.splice(findIndex + 1, 1);
            head = head.concat(spliceNum[0]);
            nums.splice(0, 0, ...head);
            return;
        } else if (element > targetNum.num) {
            targetNum.num = element;
            targetNum.index = index;
        }
    }
    nums.reverse();
    return;
}


// sortNum(arr);
// @lc code=end

