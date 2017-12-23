var twoSum = function (nums, target) {
    var index1 = 0, index2 = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[i] + nums[j]) {
                index1 = i;
                index2 = j;
            }
        }
    }
    return [index1, index2];
};
let result = twoSum([100, -100], 0);
console.log(result);