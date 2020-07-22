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
//  let str = '3434356';
 let str = '23';
console.log(huiwen(str), 'result');