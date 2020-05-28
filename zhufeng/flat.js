var arr = [1, 2, [3, 1, [5, 6, [7, 8, [9, 10]]]]];

// flat 

const result1 = arr.flat(Infinity);

console.log(result1, 'result');

// const result2 = arr.reduce((pre, current) => {
//     console.log('11 pre :', pre, 'current: ', current);

//     return pre.concat(current);
// }, []);

// console.log(result2, 'result2');

// while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr);
// }

// console.log(arr, 'arr');