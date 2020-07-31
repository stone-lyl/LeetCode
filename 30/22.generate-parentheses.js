/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    const Iteration = (combination, left, right) => {
        if (left === n && right === n) {
            result.push(combination);
            return;
        }
        if (left < n) {
            Iteration(combination + '(', left + 1, right);
        }
        if (right < left) {
            Iteration(combination + ')', left, right + 1);
        }
    };
    Iteration('', 0, 0);
    return result;
};
// console.log(generateParenthesis(3), 'result');

var generateParenthesis1 = function (n) {
    let res = [];
    function h(ps, l, r) {
        if (l == n && r == n) {
            res.push(ps);
            return;
        }
        if (l < n) {
            h(ps+'(', l+1, r);
        }
        if (l > r) {
            h(ps+')', l, r+1);
        }
    }
    h('', 0, 0);
    return res;
};

// @lc code=end

