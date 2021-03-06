/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var i, j;
    if(numRows === 1){
        return s;
    }
    var count = 0;
    var colDirect = true;
    var row = 0, col = 0;
    var map = [];
    for(i = 0; i < s.length; i++){
        map[i] = [];
    }
    for(i = 0; i < s.length; i++){
        if(colDirect){
            map[row][col] = s[i];
            row++;
            count++;
        }else{
            map[row][col] = s[i];
            row--;
            col++;           
            count++;
        }
        if(colDirect && count === numRows){
            count = 0;
            row -= 2;
            col++; 
            colDirect = false;
        }
        if(!colDirect && count === numRows - 2){
            count = 0;
            colDirect = true;
        }
    }
    var res = "";
    for(i = 0; i < map.length; i++){
        for(j = 0; j < map[i].length; j++){
            if(map[i][j]){
                res += map[i][j];
            }
        }
    }
    return res;
};
console.log(convert("",1));