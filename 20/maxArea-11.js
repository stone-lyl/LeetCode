/**
 * 11. Container With Most Water
 * Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).n vertical lines are drawn such that the two endpoints of line i is at(i, ai) and(i, 0).Find two lines, which together with x - axis forms a container, such that the container contains the most water.
 * Note: You may not slant the container and n is at least 2.
 */
/**
 * 1.第一个方法： 从第一个开始向后围成的面积，存入数组中，
 * 直到最后一个，找出最大值，和他们组成的两条线。
 * 2. 距离越远的 高度比 距离近的高，则不在计算近的高度。
 * 3.卡在了 [1500, 1499,...,2,1]倒序上
 */
/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
    let maxArea = 0, value;
    for(let i = 0; i < height.length; i++){
        value = height[i];
        maxArea = compareMax(height, value, i) > maxArea ? compareMax(height, value, i) : maxArea;
    }
    return maxArea;
};

compareMax = (height, value, i) => {
    let maxArea = 0, minHeight, currentArea = 0, j = height.length - 1, maxHeight = 0 ;
    for (; j > i; j--){
        maxHeight = height[j] > maxHeight ? height[j] : maxHeight; 
        if (j === height.length -1 || height[j] === maxHeight){
            minHeight = value > height[j] ? height[j] : value;
            currentArea = (j - i) * minHeight;
            console.log(maxArea, 'maxArea');
            maxArea = maxArea > currentArea ? maxArea : currentArea;
        }
    }
    return maxArea;
}

const max = maxArea([5, 2, 12, 1, 5, 3, 4, 11, 9, 4]);
console.log(max, 'max');