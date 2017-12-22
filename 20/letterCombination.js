/**
 * Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
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

    for(let i = 0; i < digits.length; i++){
        let digit = digits[i];
        
    }
};