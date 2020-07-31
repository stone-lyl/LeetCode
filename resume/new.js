function _new(construct, params) {
    console.log(arguments, 'arguments111111');
    let args = [].slice.call(arguments);
    console.log(args, 'arguments2222222');

    let constructor = args.shift();
    console.log(constructor, 'constructor333333');
    let context = Object.create(constructor.prototype);
    let result = constructor.apply(context, args);
    return (typeof result === 'object' && result !== null) ? result : context;
}

function Car(name) {
    this.color = 'red';
    this.name = name;
}
Car.prototype.method = function() {
    console.log('hello');
}

let car = new Car('toyto');
console.log(car, 'car');
console.log(Car.constructor);
let car1 = _new(Car);
console.log(car1, 'car11');
car1.method();
