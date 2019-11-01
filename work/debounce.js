// 数据劫持
var data = { name: 'yck' }
let name = data.name;
observe(data);
data.name = 'yyy';
function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function defineReactive(obj, key, val) {
    observe(val)
    Object.defineProperty(obj, key);
}