let arr1 = [1, 2, [3, 4, 5, [6, 7]]];
console.log(arr1.flat());

const mockFlat = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (Array.isArray(el)) {
            const arr1 = mockFlat(el);
            console.log(arr1, 'arr 1');
            result = result.concat(arr1);
        } else {
            result.push(el);
        }
    }
    return result;
}

console.log(mockFlat(arr1), 'mock flat');