/**
 * 思路：
1. 将出入的数组 nums  从大到小排序 : sort.
2. 元素从 第一个到倒数第二个.循环, 当 nums[i] === nums[i-1]  ==> continue
3. 然后从左右两边 i+1 , length -1, 获取与 nums[i] 相加为0 的 数组.
4. 注意再 左右两边重复时,需要继续 left++ ,right--.

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length === 0) return [];
    nums.sort((a, b) => a > b ? 1 : -1);
    let numsArr = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (right > left) {
            let sum = nums[left] + nums[right] + nums[i];
            if (sum === 0) {
                let numArr = [nums[i], nums[left], nums[right]];
                numsArr.push(numArr);
                left++;
                right--;
                while (nums[left] === nums[left - 1]) left++;
                while (nums[right] === nums[right + 1]) right--;
            } else if (sum > 0) { right--; }
            else { left++; }
        }
    }
    return numsArr;
}

console.log(threeSum([1,2], 3));