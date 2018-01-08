/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const d = [];
    if(nums.length === 0) return 0;
    for (let i = 0; i < nums.length; i++) {
        d[i] = 1;
        for (let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                d[i] = Math.max(d[i], d[j] + 1);
            }
        }
    }
    let max = Math.max(...d);
    console.log(max);
};

console.log(lengthOfLIS([]));
console.log(Math.max(...[5, 3, 4, 8, 6, 7]));