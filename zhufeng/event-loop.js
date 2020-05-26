async function async1() {
    console.log('1 start');
    await async2();
    console.log('1 end');
}

async function async2() {
    console.log(2)
}
console.log('start');

setTimeout(() => {
    console.log('set time out');
}, 0);

async1();

new Promise(function (resolve) {
    console.log('promise 1');
    resolve();
}).then(function () {
    console.log('promise 2');
})
console.log('end');

// start - 1 start - promise 1 - end - 2 - 1 end - promise 2 - set timeout