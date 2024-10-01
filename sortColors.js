/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count0=0,count1=0,count2=0;

    for(let i=0; i<nums.length;i++){
        if(nums[i]===0) count0++;
        else if (nums[i]===1) count1++;
        else
        count2++;
    }    

    //second pass
    for(let i=0; i<count0;i++){
        nums[i]=0;
    }
    for(let i=count0; i<count0+count1;i++){
        nums[i]=1;
    }
    for(let i=count0+count1; i<count0+count1+count2;i++){
        nums[i]=2;
    }
    return nums;
};
//testcases
let nums = [2,0,2,1,1,0];//0,0,1,1,2,2
result=sortColors(nums);
console.log(result);

//Another method: dutch National flag Problem
/*
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]; // Swap 0 to the front
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++; // 1 is already in the right place
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]; // Swap 2 to the back
            high--;
        }
    }
};  
*/