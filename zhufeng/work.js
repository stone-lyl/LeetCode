// 1
function A() {
    console.log(1);
}

function Func() {
    A = function () {
        console.log(2);
    }
    return this;
}

Func.A = A;

Func.prototype = {
    A: () => {
        console.log(3);
    }
}

A();
Func.A();
Func().A();
new Func.A();
new Func().A();
new new Func().A();

// 2
var x = 2;
var y = {
    x: 3,
    z: (function (x) {
        this.x = x;
        x += 2;
        return function (n) {
            this.x *= n;
            x += 3;
            console.log(x);
        }
    })(x)
}

var m = y.z;
m(4);
y.z(5);
console.log(x, y.x);

// 3
var a = '?';
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}

// 4
var x = 0; y = 1;
function fn() {
    x += 2;
    fn = function (y) {
        console.log(y + (--x));
    };
    console.log(x, y);
}

fn(3);
fn(4);
console.log(x, y);

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
    return n;
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