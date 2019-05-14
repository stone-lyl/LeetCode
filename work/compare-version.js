/**
 * 比较传入版本和当前APP版本大小
 * @param {string} compareVersion eg: '1.2.0'
 * @returns {boolean} true: 当前版本 >= 传入版本
 */
const isHigh = (compareVersion) => {
    const appVersion = '1.2.0';
    const appVersionArray = appVersion.split('.');
    const compareVersionArray = compareVersion.split('.');
    const len = Math.max(appVersionArray.length, compareVersionArray.length);

    const getNum = (elem) => {
        elem = Number.isNaN(parseInt(elem)) ? 0 : parseInt(elem);
        return elem;
    }

    for (let index = 0; index < len; index++) {
        const appElem = getNum(appVersionArray[index]);
        const compareElem = getNum(compareVersionArray[index]);
        if (appElem !== compareElem) {
            return appElem > compareElem;
        }
    }
    return true;
};

// console.log(isHigh('1.1.1'));
testIsHigh = () => {
    let elem = '0.0.0';
    let result = false;
    for (let index = 0; index < 1000; index++) {
        const elArr = elem.split('.');
        elArr[2] = parseInt(elArr[2]);
        elArr[0] = parseInt(elArr[0]);
        elArr[1] = parseInt(elArr[1]);
        if (elArr[2] < 15) {
            elArr[2] += 1;
        } else if (elArr[1] < 15) {
            if (elArr[2] === 15) {
                elArr[2] = 0;
                elArr[1] += 1;
            } else {
                elArr[1] += 1;
            }
        } else if (elArr[0] < 3) {
            if (elArr[1] === 15) {
                elArr[1] = 0;
                elArr[0] += 1;
            } else {
                elArr[0] += 1;
            }
        }
        elem = elArr.join('.');
        if (index <= 272) {
            result = isHigh(elem) === true ? true : false;
        } else {
            result = isHigh(elem) === false ? true : false;
        }
        console.log('elem', elem, 'index', index, 'result', result,'is high', isHigh(elem));
        if (result === false) {
            return result;
        }
    }
    return result;
}

console.log(testIsHigh(), '!!!!!!!!');