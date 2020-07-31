function instance(left, right) {
    let prototype = right.prototype;
    left = left.__proto__;
    while(left) {
        if (prototype === left) {
            return true;
        }
        left = left.__proto__;
    }
    return false;
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
const auto = new Car('Honda', 'Accord', 1998);

console.log(instance(auto, Car), 'result');
console.log(instance(auto, Object), 'result');
console.log(instance(auto, Function), 'result');