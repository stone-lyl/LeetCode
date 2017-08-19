var lengthOfLongestSubstring = function (s) {
    // console.log(s.length);
    let chart, count = 0, judge = {}, arr = [], len = 0;
    if (s === '') {
        arr.push(count);
    }
    for (let i = 0; i < s.length; i++) {
        chart = s[i];
        if (judge[chart] === undefined) {
            if (count === 0) {
                len = arr.length ? arr.length : 0
            }
            count += 1;
            arr[len] = count;            
            judge[chart] = 'true';
        } else {
            arr[arr.length - 1] = count;
            judge = {};
            count = 0;
            i--;
        }

    }
    console.log(arr);
    let Max = Math.max.apply(null, arr);
    console.log(Max);
    return Max;
};
lengthOfLongestSubstring("dvdf");