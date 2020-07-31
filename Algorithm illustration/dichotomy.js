// 二分法
let arr = [1, 4, 7, 8, 12, 16, 19, 20, 30, 44, 54, 63, 99];

const dichiotomy = (arr, num) => {
    let midIndex = Math.trunc(arr.length / 2);
    let midNum = arr[midIndex];
    if (num === midNum) {
        return midIndex; 
    } else if (num > midNum) {
        return midIndex + 1 + dichiotomy(arr.slice(midIndex + 1), num);
    } else {
        return dichiotomy(arr.slice(0, midIndex), num);
    }
}
const findNum = 99;
console.log(dichiotomy(arr, findNum), arr.findIndex(x => x===findNum));