let a = {
    n: 10
};
let b = a;
b.m = b = {
    n: 20
};
console.log(a); // n:10 m: {n:20}

console.log(b); // b: n: 20


// 2
let x = [12, 23];
function fn(y) {
    y[0] = 100;
    y = [100];
    y[1] = 200;
    console.log(y); // [100, 200]
}
fn(x);
console.log(x); // [100, 23]