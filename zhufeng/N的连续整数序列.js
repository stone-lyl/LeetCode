/**
 * 输入正整数N，输出所有和为N的连续正整数序列
 * 列如： 输入15
 * 结果： [[1,2,3,4,5], [4,5,6], [7,8]];
 */

const getList = (n = 1) => {
    let mid = Math.ceil(n / 2);
    let resultArr = [];
    for (let j = 1; j < mid; j++) {
        let oneArr = [];
        let sum = 0;
        for (let i = j; i <= mid; i++) {
            sum += i;
            if (sum > n) {
                break;
            } else if (sum === n) {
                oneArr.push(i);
                resultArr.push(oneArr);
                console.log(oneArr, 'one arr');
                break;
            } else {
                oneArr.push(i);
            }
        }
    }
    console.dir(resultArr);
}

getList(18);