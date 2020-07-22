
// 1:
// let a = 12, b = 12;
// function fn() {
// //   console.log(a,b); // a: error, b: 12
//     // console.log(a);
//     console.log(b);
//   let a = b = 13;
//   console.log(a, b); // 13,13
// }
// fn();
// console.log(a, b); // 12, 13


// 2:
// let i = 1;
// let fn = function(i) {
//   return function(n) {
//     console.log(n + (++i));
//   }
// }

// let f = fn(1);
// f(2); // 2+ 2=4
// fn(3)(4); // 8
// f(5); //5 + 3 = 8
// console.log(i); // 1

// 3
// console.log(a); // undefined
// var a = 12;
// function fn() {
//     console.log(1);
//   console.log(a); // undefined
//   var a =13;
// }
// fn();
// console.log(a); //12

// 4

// var a = 10, b =11, c =12;
// function test(a) {
//   a = 1;
//   var b = 2;
//   c = 3;
// }
// test(a);
// console.log(a); // 10
// console.log(b); //11
// console.log(c); // 3

// 5
// var a = 4;
// function b (x,y,a) {
//   console.log(a); // 3
//     arguments[2] = 10;
//     arguments[1] = 99;
// console.log(y, a); // 99, 10
// }
// a = b(1,2,3);
// console.log(a); // undefined

// 6
// if (!('a' in window)) {
//     var a = 1;
// }
// console.log(a); // undefined

// 7

// var a = 9;
// function fn() {
//   a = 0;
//   return function(b) {
//     return b+a++;
//   }
// }
// var f = fn();
// console.log(f(5)); // 5, - a: 1
// console.log(fn()(5)); // 5
// console.log(f(5)); // 6, - a： 2
// console.log(a); // 2

// 8
var a = 0, b = 0;
function A(a) {
  A = function(b) {
    console.log(a+b++); // 4
  }
  console.log(a++); // 1, a: 2
}
A(1);
A(2)
console.log(a, b);// 2 , 0