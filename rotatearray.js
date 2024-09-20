var rotate = function(nums, k) {
    // Handle cases where k >= nums.length
    k = k % nums.length;
    // Helper function to reverse the array
    function reverse(nums, start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    // Step 1: Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);   
    // Step 3: Reverse the remaining n - k elements
    reverse(nums, k, nums.length - 1);
};

//test case
let nums = [1,2,3,4,5,6,7], k = 3
result=rotate(nums, k);
console.log(result);