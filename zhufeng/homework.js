// 1 没有问题
// function A() {
//     console.log(1);
// }

// function Func() {
//     A = function () {
//         console.log(2);
//     }
//     return this;
// }

// Func.A = A;

// Func.prototype = {
//     A: () => {
//         console.log(3);
//     }
// }

// A(); // 1
// Func.A(); // 1
// Func().A(); // 2
// new Func.A(); // 1
// new Func().A(); // 3
// new new Func().A(); // Uncaught TypeError 箭头函数不能new 

// 2
// var x = 2;
// var y = {
//     x: 3,
//     z: (function (x) {
//         this.x = x; // 'outter this is global'
//         x += 2;
//         return function (n) {
//             this.x *= n;
//             x += 3;
//             console.log(this, 'this');
//             console.log(x);
//             console.log(this.x, 'this x');
//         }
//     })(x)
// }

// var m = y.z; // x = 4, this.x = 2;
// m(4); // n = 4 , this.x = 2 *4 = 8; x = 7;
// // console.log(global.x, 'global');
// // console.log(x, 'xxxxx');

// y.z(5); // z 执行过一次后为：this.x = 2, x = 4;// this-global  this.x = 3*5, x = 4 + 3 ;//this object
// console.log(x, y.x); // x = 2;  y.x = 15;// x 一直作为参数传入。 y.x ???


// let obj = {
//     a: 1,
//     add: function (count = 1) {
//         this.a += count;
//     }
// }
// console.log(obj.a);
// obj.add(5);
// console.log(obj.a);

// 3
// var a = {
//     x: 0,
//     toString() {
//         return ++this.x;
//     }
// };
var i = 0;
Object.defineProperty(global, 'a', {
    get() {
        return ++i;
    }
})
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
// null ???

// 4 没有问题
// var x = 0; y = 1;
// function fn() {
//     x += 2;
//     fn = function (y) {
//         console.log(y + (--x));
//     };
//     console.log(x, y);
// }

// fn(3); // 2, 1
// fn(4); // 5
// console.log(x, y); // 1, 1

// 5
setTimeout(() => {
    console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
    console.log(3);
}, 10);
console.log(4);
console.time('AA');
for (let i = 0; i < 90000000; i++) {
    let n = i;
}

console.timeEnd('AA');
setTimeout(() => {
    console.log(6);
}, 8);
console.log(7);
setTimeout(() => {
    console.log(8);
}, 15);
console.log(9);

// 2 -> 4 -> AA -> AA end -> 7 -> 9 -> 6 -> 3 -> 8 -> 1 ??
// 2 - 4- AA - 7 - 9 - undefinded - 3 - 1 - 6 - 8