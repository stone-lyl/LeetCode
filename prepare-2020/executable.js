// 比较好理解，函数的执行时上下文（环境）变量
var scope = "global scope";
function checkscope1(){
    let scope = "local scope1";
    function f(){
        return scope;
    }
    return f();
}
console.log('checkscope1', checkscope1());

// 这个就跟闭包有关了。
function checkscope2(){
    let scope = "local scope2";
    function f(){
        return scope;
    }
    return f;
}
console.log('checkscope1', checkscope2()());