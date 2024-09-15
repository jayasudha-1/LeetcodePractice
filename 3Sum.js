var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    const result = [];
    for(i=0;i<nums.length;i++){
        //console.log(i);
        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        let l=i+1;
        let r=nums.length-1;
        while(l<r){
            const sum=nums[i]+nums[l]+nums[r];
            if (sum>0){
                r--;
            }
            if(sum<0){
                l++;
            }
            if(sum==0){
                result.push([nums[i],nums[l],nums[r]]);
                l++;
                while(nums[l]==nums[l-1] && l<r){
                    l++;
                }

            }
        }
    }
    return result;
    
};

// Test case
let nums = [-1,0,1,2,-1,-4]
let result = threeSum(nums);
console.log(result);