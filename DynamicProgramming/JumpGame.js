var canJump = function(nums) {
    // Initialize the target as the last index of the array
    let target = nums.length - 1;

    // Iterate through the array from the last index to the first index
    for (let i = nums.length - 1; i >= 0; i--) {
        // Check if the current index plus its maximum jump reaches or surpasses the target
        if (i + nums[i] >= target) {
            // If true, update the target to the current index
            target = i;
        }
    }

    // After the loop, if the target has been reduced to 0, it means
    // we can reach the last index starting from the first index
    return target === 0;
};
/*
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */