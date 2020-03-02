/**
 * quicksort 快速排序
 * https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 * 1. 在数据集之中，选择一个元素为“基准”(pivot)
 * 2. 所有小于“基准”的元素，都移到“基准”的左边；所有大于“基准”的元素，都移到“基准”的右边。
 * 3. 对“基准”左边和右边的两个子集，不断重复第一步和第二步，知道所有子集都只剩下一个元素为止。
 */

let testArr1 = [1, 8, 6, 3, 9, 2, 11, 9];

const quicksort = (disorderArr) => {
    const arrLen = disorderArr.length;
    if (arrLen <= 1) {
        return disorderArr;
    }
    const pivotIndex = Math.floor(arrLen / 2);
    const pivot = disorderArr.splice(pivotIndex, 1);
    // const pivot = disorderArr[pivotIndex]; 数组内有内容重复
    console.log('apoint: ', pivot);
    let leftArr = [], rightArr = [];
    for (let index = 0; index < disorderArr.length; index++) {
        const elem = disorderArr[index];
        if (pivot > elem) {
            leftArr.push(elem);
        } else if(pivot < elem) {
            rightArr.push(elem);
        }
    }
    console.log('left arr: ', leftArr, 'right arr: ', rightArr);
    console.log('------------');
    return quicksort(leftArr).concat(pivot, quicksort(rightArr));
}
console.log(quicksort(testArr1), 'result');