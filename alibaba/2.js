// ==== 笔试题2
/* 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组 */
var arr = [15, [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
const flatArr = (arr) => {
    const temp = arr.flat(Infinity);
    const result = Array.from(new Set(temp)).sort((a, b) => a-b);
    console.log(result);
}
flatArr(arr);