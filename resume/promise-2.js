const myPromise = () => Promise.resolve('hahaha');
function firstFn() {
    myPromise().then(res => console.log(res));
    console.log('11111111');
}

async function secondFn() {
    console.log('333333');
    console.log(await myPromise());
    console.log('222222222');
}

firstFn();
secondFn();

const numformat = Intl.NumberFormat('en-Us', {
    style: 'currency', currency: 'USD'
}).format(1111);
console.log(numformat, 'numformat');
// 111 -> 333333 haha haha 2222222;

let name = 'Lydia';
function getName() {
  console.log(name);  // Re
  let name = 'Sttt';
}
getName();