/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let f1 = 2, f2 = 1, fn;
    if (n === 1) { return f2; }
    else if (n === 2) { return f1; }
    for (let i = 3; i <= n; i++) {
        fn = f1 + f2;
        f2 = f1;
        f1 = fn;
    }
    return fn;
};