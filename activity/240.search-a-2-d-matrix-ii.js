/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * 暴力破解
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix1 = function(matrix, target) {
    let newArr = [].concat(...matrix);
    if (newArr.indexOf(target) === -1) {
        return false;
    }
    return true;
};
// m*n
var searchMatrix = function (matrix, target) {
    const m = matrix[0].length; // --
    const n = matrix.length; // |
    const shortDim = Math.min(m, n);
    const searchBinary = (matrix, target, start, isVer) => {
        let lo = start;
        let hi = isVer ? matrix.length : matrix[0].length;
        while (hi-1 >= lo) {
            let mid = (lo + hi) / 2;
            if (isVer) {
                if (matrix[start][mid] < target) {
                    lo = mid + 1;
                } else if(matrix[start][mid] > target){
                    hi = mid - 1;
                } else {
                    return true;
                }
            } else {
                if (matrix[mid][start] < target) {
                    lo = mid + 1;
                } else if (matrix[mid][start] > target) {
                    hi = mid - 1;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
    for (let index = 0; index < shortDim; index++) {
        const verticalFound = searchBinary(matrix, target, index, true);
        const horizonFound = searchBinary(matrix, target, index, false);
        if (verticalFound || horizonFound) return true;
    }
    return false;
};
// @lc code=end

