/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let newArr = x.toString().split('').reverse();
    let num = newArr.join('');
    return x == num;
};

console.log(isPalindrome(-989));