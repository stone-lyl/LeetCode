/**
 * 找数组中最长的相同前缀
注意[],[''],['jkfjs']等特殊情况
 */

/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
    let char, str = '', judge = 0;
    if (strs.length === 0) {
        return '';
    }
    for (let j = 0; j < strs[0].length; j++) {
        char = strs[0].charAt(j);
        for (let i = 1; i < strs.length; i++) {
            if (char !== strs[i].charAt(j)) {
                str = strs[0].slice(0, j);
                return str;
            }
        }
    }
    return strs[0];
};