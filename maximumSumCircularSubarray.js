var maxSubarraySumCircular = function(nums) {
    let premax=nums[0];
    let premin=nums[0];
    let max=nums[0];
    let min=nums[0];
    let total=nums[0];

    for(let i=1;i<nums.length;i++){
        let n=nums[i];
        premax=Math.max(n, n+premax);
        max=Math.max(max,premax);
        premin=Math.min(n, n+premin);
        min=Math.min(min,premin);
        total+=n;  
    }
    return max<0 ? max : Math.max(max, total-min);  
};


//Test Cases
nums=[1,-2,3,-2];
result=maxSubarraySumCircular(nums);
console.log(result);