/**
 * 从头开始对s进行切割
 * 记录下s被切割后能与wordDict匹配的index
 * 若最后一项recode[s.length]也能匹配则成功
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let record = [];
    record[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (record[j] && (wordDict.indexOf(s.slice(j, i)) !== -1)){
                record[i] = true;
                break;
            }
        }
    }
    return record[s.length] === true ;
};

console.log(wordBreak('abcd', ['a', 'abc', 'b', 'cd']));