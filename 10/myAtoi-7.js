/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str, 10);
    if(isNaN(num)){
        return 0;
    }else if(num >2147483647){
        return 2147483647;
    }else if(num < -2147483648){
        return -2147483648;
    }
    return num;
}; 
let atoi = myAtoi("2147483648");
console.log(atoi);
console.log(typeof(atoi)==='number');
