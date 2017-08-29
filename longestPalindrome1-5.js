// 将字符串转换为每个字符之间含空格的数组
// 再以数组中每一位为中心进行回文判断
// 主要使用 split(); 在字符串中插入内容,并转换为数组
// join();将数组转换为字符串

var longestPalindrome = function (s) {
    let sca;
    let newStr, str, maxArr=[];
    sca = s.split("").join(" ").split("");
    sca.unshift(" ");
    for (var i = 0; i < sca.length; i++) {
        for (var j = 0; j <= i; j++) {
            str = sca.slice(i - j, i + j + 1);
            newStr = str.slice(0);
            newStr.reverse();
            if (str.toString() !== newStr.toString()) {
                break;
            }else{
                maxArr = maxArr.length>str.length ? maxArr : str;                
            }
        }
    }
    console.log('last',maxArr);
    let arr= [];
    // maxArr.forEach(function(element) {
    //     if(element !== " "){
    //         arr.push(element);
    //     }
    // }, this);
    for(let k=0; k < maxArr.length; k++){
        if(maxArr[k] !== " "){
            arr.push(maxArr[k]);
        }
    }
    console.log("join",arr.join(""));
    return(arr.join(""));
};
console.log(longestPalindrome("ccd"));

// longestPalindrome([ "d", " ", "n", " ", "c", " ", "n", " ", "g" ]);