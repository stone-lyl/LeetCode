// 将高频操作化为一次

function debounce(fn, wait, immediate) {
    var time = null 
    return function () {
        let args = arguments;
        let context = this;
        if (immediate && !time) {
            fn.apply(context, args);
        }

        if (time) clearTimeout(time);
        time = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

var limit = function (func, wait, isDebounce) {
    var timeout = null;
    return function () {
        let context = this, args = arguments;
        var throttler = () => {
            timeout = null;
            func.apply(context, args);
        }
        if (isDebounce) clearTimeout(timeout);
        console.log(timeout, 'timeout11111111');

        if (isDebounce || timeout===null) {
            console.log(timeout, 'timeout222222');
            timeout = setTimeout(throttler, wait)
        };
    }
}

_throttle = function (func, wait) {
    return limit(func, wait, false);
}
_debounce = function (func, wait) {
    return limit(func, wait, true);
}

setInterval(function () {
    _throttle(function () {
        console.log('debounce', Date.now());
    }, 1000);
}, 100);
