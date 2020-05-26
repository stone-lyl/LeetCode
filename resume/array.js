// 1. set
function DeduplicationArr(arr) {
    const set = new Set(arr);
    return Array.from(set);
}
let array = [1, 2, 3, 3, 3, 2, 1, '1', '3', 'arr'];
console.log(DeduplicationArr(array), 'DeduplicationArr');

// obj -> Map key - 不行 1, '1'无法区分
function DeduplicationArr1(arr) {
    let map = new Map(), resultArr = [];
    arr.forEach(element => {
        if (!map.has(element)) {
            map.set(element, true);
            resultArr.push(element);
        }
    });
    console.log(resultArr, 'DeduplicationArr1');
}
DeduplicationArr1(array);

// indexof  includes
// filter
function unique(arr) {
    return arr.filter((val, index, arr) => arr.indexOf(val) === index);
}
console.log(unique(array), 'unique');
