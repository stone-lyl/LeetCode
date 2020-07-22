// === 笔试题4
/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2）
 *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 *     版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */
function compareVersion(version1, version2) {
    let maxLen = Math.max(version1.length, version2.length);
    let version1Arr = version1.split('.');
    let version2Arr = version2.split('.');
    const getNum = (elem) => {
        elem = Number.isNaN(parseInt(elem)) ? 0 : parseInt(elem);
        return elem;
    };
    for (let index = 0; index < maxLen; index++) {
        const version1Ele = getNum(version1Arr[index]);
        const version2Ele = getNum(version2Arr[index]);
        if (version1Ele !== version2Ele) {
            return version1Ele > version2Ele ? 1 : -1;
        }
    }
    return 0;
}
let version1 = '0.1';
let version2 = '1.1.1';
console.log('result', compareVersion(version1, version2));
console.log('result', compareVersion('13.37', '1.2 '));
console.log('result', compareVersion('1.1', '1.1.0'));
console.log('result', compareVersion('1.13', '1.2.0'));

