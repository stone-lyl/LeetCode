
/**
 * s = "leetcode",
 * dict = ["leet", "code"].
 * 使用indexOf 来查找匹配。
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
    let dp = [];
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && (wordDict.indexOf(s.slice(j, i)) !== -1)) {
                dp[i] = true;
                console.log(i, dp[i]);
                break;
            }
        }
    }
    console.log(dp[s.length]);
    console.log(dp[s.length] === true);
    return dp[s.length] === true;
};
wordBreak("aaaaaa", ["aa", "aaaa"]);
// var wordBreak = function(s, wordDict) {
//     var hasFound = [],
//         len = s.length,
//         i,
//         j;

//     hasFound[0] = true;

//     for (i = 1; i <= len; i++) {
//         for (j = 0; j < i; j++) {
//             if (hasFound[j] && (wordDict.indexOf(s.substring(j, i)) !== -1)) {
//                 hasFound[i] = true;
//                 break;
//             }
//         }
//     }
//     console.log( hasFound[len] === true );
//     return hasFound[len] === true;
// };