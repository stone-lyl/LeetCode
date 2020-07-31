function f1() {
    n = 99;
}
f1();
console.log('f1: ', n);

function f2() {
    let n = 222;
    nAdd = () => { n += 1 };
    function f3() {
        console.log('f3 中的 n', n);
    }
    return f3;
}

let result = f2();
result();
nAdd();
result();

var name = 'this window';
var obj1 = {
    name: 'my object1',
    getNameFunc: function () {
        return function () {
            return this.name;
        }
    }
};
console.log('obj1: ', obj1.getNameFunc()()); // this window (浏览器中结果)

var obj2 = {
    name: 'my object2',
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        }
    }
};
console.log('obj2: ', obj2.getNameFunc()());  // my object2