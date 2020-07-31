//也可使用一次循环，将 i：0-nums.length  
//相加为 sumi , 再将 nums的总和相加为 sumNum. return sumi - sumNum. 
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] = nums[i];
    }
    for (let j = 0; j <= arr.length; j++) {
        if (j !== arr[j]) {
            return j;
        }
    }
};