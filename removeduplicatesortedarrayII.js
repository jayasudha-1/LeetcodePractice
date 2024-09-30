var removeDuplicates = function(nums) {
    if(nums.length <=2) return nums.length;
    let j=2;
    for(let i=2;i<nums.length;i++){
        if(nums[i]>nums[j-2]){
            nums[j]=nums[i];
            j++;
        }
    }
    return j;
};

//testcases
let nums = [1,1,1,2,2,3];//1,1,2,2,3(5 count)
result=removeDuplicates(nums);
console.log(result);