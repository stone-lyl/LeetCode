/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let obj = {};
    if(nums.length <= 1) return false;
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === true){
            return true;
        }
        obj[nums[i]] = true;
    }
    return false;
};

console.log(containsDuplicate([2]));