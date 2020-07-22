
// ====笔试题1：

/* 一个页面上两个div左右铺满整个浏览器，要保证左边的div一直为100px，右边的div跟随浏览器大小变化（比如浏览器为500，右边div为400，浏览器为900，右边div为800），请写出大概的css代码。 */


body {
    display: flex;
}
.div1 {
    flex-basis: 100px;
}
.div2 {
    flex-grow: 1;
}


// ==== 笔试题2
/* 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组 */
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
const flatArr = (arr) => {
    const temp = arr.flat(Infinity);
    const result = Array.from(new Set(temp)).sort((a, b) => a - b);
    return result;
}

flatArr(arr);
// ==== 笔试题3
/* 找到字符串中最大回文子串 */
function huiwen(str) {
    let max = 0;
    let strArr = str.split('');
    let result = '';
    let lenArr = new Array(strArr.length).fill(0);
    if (strArr.length === 1) {
        return str;
    }
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i + 1; j < strArr.length; j++) {
            let arr = strArr.slice(i, j + 1);
            if (arr.toString() === arr.reverse().toString()) {
                lenArr[i] = j - i + 1;
                console.log(j - i);
            }
        }
        if (max < lenArr[i]) {
            max = lenArr[i];
            result = str.substr(i, lenArr[i]);
        }
    }
    result = max === 0 ? str.slice(0, 1) : result;
    return result;
}
let str = '3434356';
huiwen(str);


// === 笔试题4
/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2）
 *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 *     版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */
function compareVersion(version1, version2) {
    let maxLen = Math.max(version1.length, version2.length);
    let version1Arr = version1.split('.');
    let version2Arr = version2.split('.');
    const getNum = (elem) => {
        elem = Number.isNaN(parseInt(elem)) ? 0 : parseInt(elem);
        return elem;
    };
    for (let index = 0; index < maxLen; index++) {
        const version1Ele = getNum(version1Arr[index]);
        const version2Ele = getNum(version2Arr[index]);
        if (version1Ele !== version2Ele) {
            return version1Ele > version2Ele ? 1 : -1;
        }
    }
    return 0;
}


// ==== 笔试题5
// 实现一个可以缓存其他函数的高阶函数memoize。能够实现：当入参相同时，可以不经过计算，直接返回结果。
function sqrt(n) { return Math.sqrt(n) }

const memoize = fn => {
  // 实现
    let cache = [];
    return (n) => {
        const cached = cache[n];
        if (cached) {
            console.log(cached, 'cached');
            return cached;
        }
        const result = fn(n);
        cache[n] = result;
        console.log(result, 'result');
        return result;
    }
}
const cachedSqrt = memoize(sqrt)
cachedSqrt(4) // 2
cachedSqrt(4) // 不经过计算，直接输出结果2