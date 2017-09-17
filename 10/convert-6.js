/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//遇到一个吐血的bug，一个函数最后一定一定要加 分号。
var convert = function (s, numRows) {
    // law简单的说，是我找到的一个规律 每两条竖线的间的间隔。
    let law = numRows * 2 - 2, newArr = [];
    if(numRows <= 1 ){
        return s;
    }
    for (let i = 0; i < numRows; i++) {
        let j = i, judge = true;
        if (i === 0 || i === law / 2) {
            while (j < s.length) {
                newArr.push(s[j]);
                j = j + law;
            }
        } 
        //如果在两条竖线中间有一个数字时，用此规律。
        else {
            while (j < s.length) {
                if( judge){
                    newArr.push(s[j]);
                    //第一条竖线到数字的距离。
                    j += law - i * 2;
                    judge = false;
                }else{
                    newArr.push(s[j]);
                    //第二条竖线到数字的距离。
                    j += i * 2;
                    judge = true;
                }
            }
        }
    }
    newArr = newArr.join("").toString();
    console.log('newArr', newArr);
    return newArr;
};
console.log(convert("sfdsfas", 1));
