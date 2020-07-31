function Foo() {
    // 在浏览器中为设置定义，提升为全局变量。
    getName = function () {
        console.log(1);
    }
    return this;
}

Foo.getName = function () {
    console.log(2);
}

Foo.prototype.getName = function () {
    console.log(3);
}

var getName = function () {
    console.log(4);
}

function getName() {
    console.log(5);
}

// let foo1 = new Foo();
// let foo2 = new Foo;
// console.log(foo1);
// console.log(foo2);
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// 在浏览器上执行才不报错
Foo.getName(); //  2 
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3