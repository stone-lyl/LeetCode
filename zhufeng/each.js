/**
 * each
 * arr: [10, 20, 30, 'AA', 40];
 * arr.each
 * 可指定 this: obj，不指定则为window
 * item 不是数字 return false
 */

Array.prototype.each = function (callback, arr = []) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callback(arr[i], i, arr));
    }
    return resultArr;
}

let arr = new Array(1, 2, 3, 5, 4, 6, 7);
console.log(arr);
const arrResult = arr.each((elem, index) => {
    console.log(elem);
    if (index === 3) {
        return elem;
    }
    return elem * 10;
}, arr);

console.log(arrResult, 'arr result');

