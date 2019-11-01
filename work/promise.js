// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// });

// new Promise((resolve, reject) => {
//     console.log(3);
//     reject();
//     console.log(4);
// })
// promise.then(() => {
//     console.log(3);
// });

// console.log(4);
function Promise1(fn) {
    let value = null, callbacks = [], state = 'pending';
    this.then = function (onFullfilled) {
        callbacks.push(onFullfilled);
        return this;
    };
    function resolve(value) {
        setTimeout(() => {            
            callbacks.forEach((callback) => {
                callback(value);
            });
        }, 0);
    }
    fn(resolve);
}

function getUserId() {
    return new Promise1(function (resolve) {
        const results = { id: 12 };
        setTimeout((results) => {
            resolve(results.id);            
        }, 1000, results);
    })
}

// getUserId().then((res) => {
//     console.log(res, 'res');
// })
// console.info(getUserId, 'getUserId');


// https://segmentfault.com/a/1190000016848192
// 题目三
Promise.resolve(1).then(2).then((res) => console.log(res, '222'));
Promise.resolve(1).then((res) => 33 + res).then((res) => console.log(res, '222'));
// 题目4
function red() {
    console.log('red!!');
}
function green() {
    console.log('green!!');
}
function yellow() {
    console.log('yellow!!');
}

const lightPromise = (timeout, fn) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            fn();
            resolve();
        }, timeout);
    });
}

const light = () => {
    Promise.resolve().then(() =>
        lightPromise(3000, red)).then(() =>
            lightPromise(2000, green)).then(() =>
                lightPromise(1000, yellow)).then(() => light());
}
    // console.log();
// light();