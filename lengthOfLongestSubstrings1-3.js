var lengthOfLongestSubstring = function (s) {
    let list = [], judgeArr = {}, temp, lengthArr = [], reduce = 0;
    for (let i = 0; i < s.length; i++) {
        temp = s[i];
        //将每个不同的字符当作 judgeArr 的一个特别的属性，这样来防止重复。
        if (judgeArr[temp] === undefined) {
            list.push(temp);
            //用字符属性标记再 s 中的位置。
            judgeArr[temp] = i;
        } else {
            lengthArr.push(list.length);
            // 需要减少的数的个数
            reduce = list.length - (i - judgeArr[temp]) + 1;
            //splice(start, reduceNum);
            list.splice(0, reduce);
            judgeArr[temp] = i;
            list.push(temp);
        }
    }
    lengthArr.push(list.length);
    return Math.max(null, lengthArr);
};
lengthOfLongestSubstring("");