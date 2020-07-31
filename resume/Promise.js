// const timeout = ms => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, ms);
// });

// const ajax1 = () => timeout(2000).then(() => {
//     console.log('1');
//     return 1;
// });

// const ajax2 = () => timeout(1000).then(() => {
//     console.log('2');
//     return 2;
// });

// const ajax3 = () => timeout(2000).then(() => {
//     console.log('3');
//     return 3;
// });

// const mergePromise = ajaxArray => {
//     // 保存数组中的函数执行后的结果
//     var data = [];

//     // Promise.resolve方法调用时不带参数，直接返回一个resolved状态的 Promise 对象。
//     const saveResult = fn => {
//         return () => fn().then(result => {
//             data.push(result);
//             return result;
//         })
//     };
//     return ajaxArray
//         .reduce((prev, next) => prev.then(() => next()), Promise.resolve())
//         .then(() => data);
// };

// // mergePromise([ajax1, ajax2, ajax3]);
// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//     console.log('done');
//     console.log(data); // data 为 [1, 2, 3]
// });

function fakerFn(n) {
    return n;
}

const tenPromise = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(new Date());
            resolve();
        }, n*1000);
    });
}
console.log(new Date(), '1111');

tenPromise(1);
// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]