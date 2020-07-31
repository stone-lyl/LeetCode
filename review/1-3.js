// 1

/**
 * @param arr {number[]}
 */
const distinctAndSort = (arr) => {
    return Array.from(new Set(arr)).sort((a, b) => b - a);
}

// 2

/**
 * @param list {{id: number, type: string, name: string}[]}
 */
const transform = (list) => {
    return list.reduce((obj, item) => {
        const type = item.type;
        delete item.type;
        if (obj[type]) {
            obj[type].push(item);
        } else {
            obj[type] = [item];
        }
    }, {});
}

// 3

/**
 * @param arr {string[]}
 */
const findYCount = (arr) => {
    let lastXIndex = 0;
    const resultArr = arr.map((str) => {
        lastXIndex = str.lastIndexOf('x');
        str = str.slice(0, lastXIndex);
        return str.split('y').length - 1;
    });
    return resultArr;
}

