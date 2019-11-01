// 创建Map
let myMap = new Map();
let keyObj = {}, keyFun = function () { }, keyStr = 'string';
myMap.set(keyObj, 'key is obj');
myMap.set(keyFun, 'key is Fun');
myMap.set(keyStr, 'key is Str');
// myMap.set(keyObj, 'key is obj');
// console.dir(myMap, 'myMap');

// map flatMap
var arr = [1, 2, 3, 4];
// arr.map(x => [x * 2]);
// arr.flatMap(x => [x * 2]);
// arr.flatMap(x => [[x * 2]]);

// Proxy
let p = new Proxy(target, handler);


// 性能 all
