var findMedianSortedArrays = function(nums1, nums2) {
    let newNums = nums1.concat(nums2);   
    newNums.sort(function(a,b){return a>b?1:-1});
    let median = parseInt(newNums.length/2);
    console.log(median);
    if(newNums.length%2){
        median = newNums[median];        
    }else{
        median = (newNums[median]+newNums[median-1])/2;
    }
    console.log(median);
    console.log(newNums);
    return median;
};

let nums1 = [1]
let nums2 = [2,3,4,5,6,7,8,9,10]
findMedianSortedArrays(nums1,nums2);