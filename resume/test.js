function Car() {
}

Car.prototype.say = function () {
    console.log('hello');
}
function Moc() {
}

Moc.prototype.action = function () {
    console.log('action');
}

let moc = new Moc();
console.log(moc, '1111111');
Object.setPrototypeOf(moc, Car.prototype);
console.log(moc, '22222');
