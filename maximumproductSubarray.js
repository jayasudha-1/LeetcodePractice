var maximumProductSubarray=function(nums){

    let maxCurrent=nums[0];
    let minCurrent=nums[0];
    let maxGlobal=nums[0];
    for(let i=1;i<nums.length;i++){
        let tempMax=Math.max(nums[i], maxCurrent*nums[i], minCurrent * nums[i]);
        minCurrent=Math.min(nums[i], maxCurrent*nums[i], minCurrent * nums[i]);
        maxCurrent=tempMax;
    if(maxCurrent>maxGlobal){
        maxGlobal=maxCurrent;
    }
}
    return maxGlobal;

};

// Test case
let nums = [-2,1,-3,4]
let result = maximumProductSubarray(nums);
console.log(result);