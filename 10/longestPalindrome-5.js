
//此算法超时。
// 思想，从第一位开始一位一位的去验证是否为回文函数。
//验证方式为，从当前位一直循环到最后一位
var longestPalindrome = function (s) {
    let max = 0, list;
    for (let i = 0; i < s.length; i++) {
        for(let j = i+1; j<s.length+1; j++){
            if(palindromic(s.slice(i,j),j-i)){
                if(j-i>max){
                    max = j-i;
                    list = s.slice(i,j);
                }
            }
        }
    }
    console.log(max, list);
};
function palindromic(str, n) {
    let k = n/2;
    for(let i = 0; i<k; i++){
        if(str[i] != str[n-i-1])
            return false;
    }
    return true;
}
longestPalindrome("saas");