var maximumSubarray=function(nums){

    let maxCurrent=nums[0];
    let maxGlobal=nums[0];
    for(let i=1;i<nums.length;i++){
        maxCurrent=Math.max(nums[i], maxCurrent+nums[i]);
    if(maxCurrent>maxGlobal){
        maxGlobal=maxCurrent;
    }
}
    return maxGlobal;

};




// Test case
let nums = [-2,1,-3,4,-1,2,1,-5,4]
let result = maximumSubarray(nums);
console.log(result);