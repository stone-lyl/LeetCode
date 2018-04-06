
/**
 * 从头开始对s进行切割
 * 记录下s被切割后能与wordDict匹配的index
 * 若最后一项recode[s.length]也能匹配则成功
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    return dps(s, wordDict, {});
};

function dps(s, wordDict, map) {
    if (s.length === 0) return [];
    if (map[s]) {
        return map[s];
    }
    var res = [];
    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i];
        if (s.startsWith(word)) {
            if (word.length === s.length) {
                res.push(word);
            } else {
                var sublist = dps(s.substring(word.length), wordDict, map);
                sublist.forEach(function (sub) {
                    res.push(word + " " + sub);
                });
            }
        }
    }
    map[s] = res;
    return res;
}
console.log(wordBreak('aaaFFF', ["a", "aa", "FFF", "sand", "dog", 'sanddogA']));
// console.log(wordBreak('aaaaaaaaaaaaaaaa',['a','aaaa','ab','aaa']))