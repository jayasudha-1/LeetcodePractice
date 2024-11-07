var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0;
    let currentCount=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            currentCount++;
        }
        else{
            maxCount=Math.max(maxCount, currentCount);
            currentCount=0;
        }
    }
    return Math.max(maxCount, currentCount);
    
};


let nums = [1,1,0,1,1,1];
result=findMaxConsecutiveOnes(nums);
console.log(result);//3