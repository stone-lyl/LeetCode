// const myPromise = () => Promise.resolve('hahaha');
// function firstFn() {
//     myPromise().then(res => console.log(res));
//     console.log('11111111');
// }

// async function secondFn() {
//     console.log('333333');
//     console.log(await myPromise());
//     console.log('222222222');
// }

// firstFn();
// secondFn();

// const numformat = Intl.NumberFormat('en-Us', {
//     style: 'currency', currency: 'USD'
// }).format(1111);
// console.log(numformat, 'numformat');
// // 111 -> 333333 haha haha 2222222;

// let name = 'Lydia';
// function getName() {
//   console.log(name);  // Re
//   let name = 'Sttt';
// }
// getName();

// let p = new Promise(function (resolve, reject) {
//     resolve(5);
// });

// let p1 = p.then(function (val) {
//     console.log(val, '111111');
//     return 8;
// }).then(val => {
//     console.log(val, '2222');
//     return 9;
// }).then(val => {
//     console.log(val, '33333');
//     return 10;
// })
// console.log(p1);

var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1

