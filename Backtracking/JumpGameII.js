var jump = function(nums) {
    let jumps = 0; // Tracks the number of jumps
    let currentReach = 0; // Tracks the maximum index reachable with the current jump
    let nextReach = 0; // Tracks the maximum index reachable with the next jump
    
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest index reachable
        nextReach = Math.max(nextReach, i + nums[i]);
        
        // If we've reached the end of the current jump range
        if (i === currentReach) {
            jumps++; // Increment the jump count
            currentReach = nextReach; // Update the current jump range to the next reach
        }
    }
    
    return jumps;
};

/*
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
*/
//time : O(n), space O(1)