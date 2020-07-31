/**
 * Proxy VS Object.defineProperty
 * Object.defineProperty 虽然实现了双向绑定，但是他还有一些缺陷
 * 1. 只能对属性进行劫持，所以需要深度遍历整个对象
 * 2. 对于数组不能监听到数据的变化
 */

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
methodsToPatch.forEach(function (method) {
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator(...args) {
        // 调用原生函数
        const result = original.apply(this, args);
        const ob = this.__ob__;
        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted) ob.observeArray(inserted);
        // 触发更新
        ob.dep.notify();
        return result;
    })
})
// 构造函数模式： constructor 构造函数不仅能创造出独立的对象，还能将每个实例通过原型对象连接起来。
// 构造函数： 一个普通函数，内部使用了 `this` 变量，使用 `new` 构建实例， `this` 指向实例对象。 

function Person(name, color) {
    this.name = name;
    this.color = color;
    this.eat = () => {
        console.log("吃老鼠");
    };
}
let person1 = new Person('productM', '黄色');
let person2 = new Person('群群', '白色');
console.log(person1.constructor === Person); // true
console.log(person1 instanceof Person); // true
console.log(person1.eat === person2.eat); // false
// 在实例中 eat 方法是大家共用的，并且不需要改动。但每一个实例都需要新生成一个这样的方法，有点浪费内存。所以铛铛铛铛 我们的 `prototype` 出现。这意味着我们可以把那些不变的属性和方法定义到 `prototype` 上。
Person.prototype.type = '喵科动物';
console.log(person2.type === person1.type); // true

// isPrototyOf: 判断某个 prototype 对象和某个实例之间关系 
Person.prototype.isPrototyOf(person2); // true
// hasOwnProperty: 区分自己的属性还是继承自 `prototype` 上的属性
person1.hasOwnProperty('name'); // true;
person1.hasOwnProperty('type'); // false


// constructor 返回创建实例对象的 Object 构造函数的引用。
// 所有的对象都会从它的原型上继承一个 `constructor` 属性
// 绝大数函数都有 `prototype` 属性，改属性指向原型。
// 绝大多数对象都有 `__proto__`, 指向了创建该对象的构造函数的原型。这个对象执行构造函数的 `prototype`,因为 `prototype` 是内部的，我们不能访问到，所以使用 `__proto__` 访问。
Object.prototype.constructor === Object;

// 执行 ``
/**
 * 实现构造函数new操作
 * @param {object} constructor 构造函数
 * @param {Object} params 构造函数参数
 */
function _new(constructor, params) {
    // 将 argument 转为数组
    let args = [].slice.call(arguments);
    // 取出构造函数
    let constructor = args.shift();
    // 创建一个空对象，继承构造函数的prototype属性
    let context = Object.create(constructor.prototype);
    // 执行构造函数
    let result = constructor.apply(context, args);
    return (typeof result === 'object' && result !== null) ? result : context;
}


class animal {
    constructor(name) {
        this.name = name;
        this.age = 18;
    }
    getInfo() {
        console.log(`my name is ${this.name}, age is ${this.age}`);
    }
}
class dog extends animal {
    constructor(name) {
        super(name);
    }
    getMyInfo() {
        console.log(`my name is ${this.name}, age is ${this.age}!!!!!!!!!`);
    }
}