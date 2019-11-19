// 数据劫持
/**
 * 监听数据get, set
 */
let data = { name: 'yck' }

let name = data.name;
data.name = 'yyy';
function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function defineReactive(obj, key, val) {
    // 当子属性为Object时，递归子属性
    observe(val);
    let dp = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value');
            // 添加到订阅
            if (Dep.target) {
                dp.addSub(Dep.target);
            }
            return val;
        },
        set: function reactiveSetter(newVal) {
            console.log('set value');
            val = newVal;
            // 执行 watcher 的 update 方法
            dp.notify();
        }
    })
}
/**
 * 以上代码实现了如何监听数据的 set and get 事件， 但想html模板实现响应式 
 * （<div> {{name}} </div>）还需给属性添加发布订阅
 */

/**
 * 通过 Dep 解耦
 */
class Dep {
    constructor() {
        this.subs = [];
    };
    addSub(sub) {
        // sub 是 Watcher 实例
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        });
    }
};

 // 全局属性，通过该属性配置 Watcher
Dep.target = null;

function update(val) {
    document.querySelector('div').innerText = val;
}

class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this;
        this.cb = cb;
        this.obj = obj;
        this.key = key;
        this.value = obj[key];
        Dep.target = null;
    }
    update() {
        // 获取新值
        this.value = this.obj[this.key];
        // 调用update方法更新DOM
        this.cb(this.value);
    }
}
let data1 = { name: 'yck' };
observe(data1);
new Watcher(data1, 'name', update);
data1.name = 'yyy';

/**
 * 以上为发布订阅模式
 */

 