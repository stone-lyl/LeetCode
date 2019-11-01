function precision(num, preci) {
    return +Number.parseFloat(num.toString()).toFixed(preci);
}
 /**
 * sum 计算合计
 */
function sum(arr, attribute) {
    let result = 0;
    if (Array.isArray(arr)) {
        result = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue[attribute]
        }, 0);
    } else if (arr instanceof Object) {
        result = arr[attribute];
    }
    // isNaN ''/null 不考虑
    result = isNaN(result) ? 0 : +result;
    result = Number.parseFloat(result).toFixed(2);
    console.log(result, 'result');
    return result;
}

function ave(arr, attribute, ...args) {
    const sum1 = sum(arr, attribute.toString());
    const len = arr.length ? arr.length : 1;
    const initAve = precision((sum1 / len), 2);
    console.log(initAve);

    if (!args.length) {
        return initAve;
    }
    const aveArr = args.map(arg => {
        const all = sum(arr, arg);
        return precision((all / len), 2);
    });
    const result = aveArr.reduce((accumulator, currentValue) => accumulator + currentValue, initAve);
    console.log(precision(result, 2));
    return precision(result, 2);
}
let array1 = [
    { a: 20, b: 234 },
    { a: 1.12, b: 14 },
    { a: 18.3, b: 12 },
    { a: 12.3, b: 23.4 },
    { a: 12.3, b: 2.34 },
    { a: 1.23, b: 23.4 }
]

let obj1 = {
    a: 12,
    b: 23
}
sum(array1, 'a');
ave(array1, 'a');
sum(array1, 'b');
ave(array1, 'b');
ave(array1, 'a', 'b');

sum(obj1, 'a');
ave(obj1, 'a');
sum({}, 'a');
ave({}, 'a');
