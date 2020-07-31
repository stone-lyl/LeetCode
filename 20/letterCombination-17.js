/**
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 思路：
 * 	1.先用letter数组记录下数字对应的字母。
	2.第一次循环获取每个数字。
	3.然后判断数字是否大于1
	4.大于1  进入 以前存好的结果数组中循环。
	5.第三次循环： 循环当前数字对应的字母，与以前的字母相组合，放入resultArr中。
 * 
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    
    let letter = [
        [''],
        [''],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    let beforeArr = [''];
    for(let i = 0; i < digits.length; i++){
        let result, digit = digits[i], resultArr = [];
        if(digit > 1 ){
            for(let j = 0; j< beforeArr.length; j++){
                for(let k = 0; k < letter[digit].length; k++){
                    result = beforeArr[j] + letter[digit][k];
                    resultArr.push(result);
                }
            }
        }
        beforeArr = resultArr;
    }
    console.log('result before', beforeArr);
    if(beforeArr.length === 1){
        return [];
    }
    return beforeArr;
};

console.log(letterCombinations(""));