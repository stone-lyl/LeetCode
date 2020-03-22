
/**
 * bubble - 冒泡算法
 * 相邻两个值，两两比较，根据大小来交换元素位置，可以先找出最大的值。
 * https://juejin.im/post/5bbc7c6de51d450e5c47a26c#comment
 */

let testArr = [1, 8, 6, 3, 9, 2, 11, 7];
// testArr = [];
// testArr = [2];

// 设定 disorderArr 一定为一个 array，从小到大排序

/**
 * 1. 采用双重循环解决，外部循环控制循环次数，内部循环代表每轮的冒泡处理（元素交换，将最大的值放置最后）。
 * 2. 添加 isSorted : 判断前面内容是否为有序数组，若是，则前面部分的内容不用继续进行交换数组内容了。
 * 3. 添加无序边界： sortBorder，每次比较到此结束。sortBorder < arrLen - 1 -j 是灰常有可能的，这样可以减少循环次数。
 * @param {array} disorderArr 
 */
const bubble = (disorderArr = []) => {
    const arrLen = disorderArr.length;
    if (arrLen < 1) return disorderArr;
    if (arrLen === 1) return disorderArr[0];
    let lastExchangeIndex = 0;
    let sortBorder = arrLen - 1;
    // let max = disorderArr[0];
    for (let j = 0; j < arrLen - 1; j++) {
        let isSorted = true;
        for (let index = 0; index < sortBorder; index++) {
            let left = disorderArr[index];
            let right = disorderArr[index + 1];
            if (left > right) {
                let template = left;
                disorderArr[index] = right;
                disorderArr[index + 1] = template;
                isSorted = false;
                lastExchangeIndex = index;
            }
        }
        sortBorder = lastExchangeIndex;
        if (isSorted) {
            break;
        }
        console.log(disorderArr);
    }
    console.log(disorderArr, 'result');
    return disorderArr;
}

console.log(bubble(testArr), 'fun result');