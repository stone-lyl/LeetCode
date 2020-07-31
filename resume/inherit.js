// async function* range(start, end) {
//     for (let i = start; i < end; i++) {
//         yield Promise.resolve(i);
//     }
// }

// (async () => {
//     const gen = range(1, 5);
//     console.log(gen);
//     for await (const item of gen) {
//         console.log(item);
//     }
// })();

// var a = 0, b = 0;
// function A(a) {
//     A = function (b) {
//         console.log(++b + a);
//     }
//     console.log(a++);
// }

// A(1)
// console.dir(A);
// console.log('a');
// A(2)
let obj1 = {
    a: '1',
    b: [1, 2, 3],
    c: {
        c1: 1, c2: 2
    },
    d: new Date(),
    e: undefined,
    f: Symbol(1),
    g: function (params) {
        console.log(params);
    },
    h: new RegExp('.d')
};
// let obj2 = Object.assign({}, obj1);
let obj2 = { ...obj1 };
// 正则，new Date =>  function, symbol, undefined 都会被 忽略
let obj3 = JSON.parse(JSON.stringify(obj1));
let obj4 = new obj1.constructor;
console.log(obj2);
console.log(obj1);
console.log(obj3);
console.log(obj4);
obj2.c.c1 = 100;
obj3.c.c2 = 200;
console.log(obj2);
console.log(obj1);
console.log(obj3);
console.log(obj4);

