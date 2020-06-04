const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function myPromise(fn) {
    let _this = this;
    _this.state = PENDING;
    _this.value = undefined;
    _this.resolvedCallbacks = [];
    _this.rejectedCallbacks = [];

    _this.resolve = function (value) {
        if (value instanceof myPromise) {
            // 如果 value 是个 Promise，递归执行
            return value.then(_this.resolve, _this.reject);
        }
        setTimeout(() => {
            if (_this.state === PENDING) {
                _this.state = RESOLVED;
                _this.value = value;
                _this.resolvedCallbacks.forEach(cb => cb());
            }
        }, 0);
    }
    _this.reject = function (reason) {
        setTimeout(() => {
            if (_this.state === PENDING) {
                _this.state = REJECTED;
                _this.value = reason;
                _this.rejectedCallbacks.forEach(cb => cb());
            }
        }, 0);
    }

    try {
        fn(_this.resolve, _this.reject)
    } catch (error) {
        _this.reject(error);
    }
}

myPromise.prototype.then = function (onResolved, onRejected) {
    let self = this;
    var promise2;
    onResolved = typeof onResolved === 'function' ? onResolved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };
    if (self.state === RESOLVED) {
        return (promise2 = new myPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onResolved(self.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }))
    }

    if (self.state === REJECTED) {
        return (promise2 = new myPromise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onRejected(self.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }));
    }

    if (self.state === PENDING) {
        return (promise2 = new myPromise(function (resolve, reject) {
            self.resolvedCallbacks.push(function () {
                try {
                    let x = onResolved(self.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });

            self.rejectedCallbacks.push(function () {
                try {
                    let x = onRejected(self.value);
                    resolutionProcedure(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });


        }));
    }
}

function resolutionProcedure(promise2, x, resolve, reject) {
    // 避免循环
    if (promise2 === x) {
        return reject(new TypeError('Error'));
    }
    // 如果 x 为 Promise，状态为 pending 需要继续等待否则执行
    if (x instanceof myPromise) {
        if (x.state === PENDING) {
            x.then(function (val) {
                resolutionProcedure(promise2, val, resolve, reject);
            }, reject);
        } else {
            x.then(resolve, reject);
        }
        return;
    }
    let called = false;
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, (y) => {
                    if (called) return;
                    called = true;
                    resolutionProcedure(promise2, y, resolve, reject);
                }, e => {
                        if (called) return;
                        called = true;
                        reject(e);
                })
            } else {
                resolve(x);
            }
        } catch (e) {
            if (called) return;
            called = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}
