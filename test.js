/**
 *  y =  a0 + ax + a2x2…..+anxn
 * @param {*数组} a 
 * @param {*所求变量} x 
 */
function f1(a, x) {
    let y = a[0];
    for (let i = 1; i < a.length; i++) {
        y += a[i] * Math.pow(x, i);
    }
    return y;
}

function f2(a, x) {
    let y = a[a.length-1];
    for (let i = a.length -2 ; i > 0; i--) {
        y = a[i] + x*y;
    }
    return y;
}
console.log(new Date());