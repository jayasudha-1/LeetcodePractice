
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0
    
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous unique element
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Update the next unique element
            k++; // Increment the count of unique elements
        }
    }
    
    return k;
};
/*
var removeDuplicates = function(nums) {
    if(nums.length==0) return 0;
    let i=0;
    for(j=i; j<nums.length;j++){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
};

*/




//test case
let nums = [1,1,2]
result=removeDuplicates(nums);
console.log(result);