async function async1() {
    console.log('1 start');
    const a = await async2();
    console.log(a);
    console.log('1 end');
}

async function async2() {
    console.log(2);
    return '这才是回调？';
}

setTimeout(() => {
    console.log('set time out');
}, 0);

async1();
console.log('start');

new Promise(function (resolve) {
    console.log('promise 1');
    resolve();
}).then(function () {
    console.log('promise 2');
})
console.log('end');

// start -- 1 start -- promise 1 -- end -- 2 -- 1 end --- promise2  --- set time out  

// start - 1 start - 2 - promise 1 - end - 1 end - promise 2 - set time out (浏览器答案正确)
