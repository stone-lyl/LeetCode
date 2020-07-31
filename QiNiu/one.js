const filteNum =(arr) => {
    let mapArr =new Set(arr);
    let result = [];
    mapArr.forEach((ele) => {
        result.push(ele);
    },[])
    result.sort((a, b) => {
        return a < b ? -1 : 1;
    })
    console.log(result);
}

filteNum([5,5,5,1,2,3,44,44])