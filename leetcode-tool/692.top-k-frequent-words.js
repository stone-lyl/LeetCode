/*
 * @lc app=leetcode id=692 lang=javascript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {}
    for (const word of words) {
        if (!Object.prototype.hasOwnProperty.call(obj, word)) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }
    var sortable = [];
    for (var key in obj) {
        sortable.push([key, obj[key]]);
    }

    sortable.sort(function (a, b) {
        if (b[1] === a[1]) {
            if (a[0] > b[0]) {
                return 1;
            };
            if (a[0] < b[0]) {
                return -1;
            };
            return 0;
        }
        return b[1] - a[1];
    });
    var result = [];
    for (let index = 0; index < k; index++) {
        const element = sortable[index];
        result.push(element[0]);
    }
    return result;
};
// @lc code=end