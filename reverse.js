var reverse = function (x) {
    let last, result = 0;
    while (x >= 1 || x <= -1) {
        last = x % 10;
        result = last + result * 10;
        x = parseInt(x / 10);
    }
    let max = Math.pow(2,31) -1;
    let min = Math.pow(2,31);
    if (result > max || result < -min) {
        result = 0;
    }
    console.log(result);
    return result;
};
reverse(32768)