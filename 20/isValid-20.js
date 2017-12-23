/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let brackets = ['(', ')', '{', '}', '[', ']'];
    let indexArr = [];
    if (s.length % 2 || s.length === 0) return false;
    for (let i = 0; i < s.length; i++) {
        indexArr.push(brackets.indexOf(s[i]));
        let len = indexArr.length;
        if (indexArr[len - 1] === indexArr[len - 2] + 1 && indexArr[len - 1] % 2) {
            indexArr.splice(len - 2, len);
        }
    }
    return (indexArr.length === 0 ? true : false);
};

console.log(isValid("([{}]){}[]"));