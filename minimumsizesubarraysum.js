var minSubArrayLen = function(target, nums) {
    let left=0;
    let sum=0;
    let minimumLen=Infinity;

    for(let right=0; right<nums.length;right++){
        sum=sum+nums[right];
        while(sum >=target){
            minimumLen=Math.min(minimumLen, right-left +1);
            sum=sum-nums[left];
            left++;
        }
    }
    return minimumLen===Infinity ? 0: minimumLen;
}
//test case
target = 7, nums = [2,3,1,2,4,3]
result=minSubArrayLen(target,nums);
console.log(result);