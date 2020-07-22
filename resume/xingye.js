// const line = readline();
// const arr = line.split(' ');
// print(arr);

/**
 * @param {string}  '2,10,3,4,5,7,11,10,11,20'
 * @returns 
 * 2,3,4,5
    7
    10,11
    20
 */

const str = '2,10,3,4,5,7,11,10,11,20';
const sortGroup = (str) => {
    let arr = Array.from(new Set(str.split(',')))
        .sort((a, b) => a - b);
    console.log(arr);
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (+arr[i] === +arr[i-1] + 1) {
            result.push(arr[i]);
        } else {
            console.log(result.join(','));
            result = [];
            result.push(arr[i]);
        }
    }
    console.log(result.join(','));
}
sortGroup(str);