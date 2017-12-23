/**
 * 
 *   1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
	IV： 4， VI：６
	左边的小于右边的数字，则求差值。
	左边的大于右边的数字，则求和。

 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0, s1, s2;
    for (let i = 0; i < s.length; i++) {
        s1 = roman[s[i]];
        s2 = roman[s[i + 1]];
        if (s2 > s1) {
            sum = sum + s2 - s1;
            i++;
        } else {
            sum = sum + s1;
        }
    }
    return sum;
};