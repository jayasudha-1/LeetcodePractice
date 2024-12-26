var canJump = function(nums) {
    let maxJump = 0; // Tracks the farthest index reachable

    for (let i = 0; i < nums.length; i++) {
        // If current index is beyond the farthest reachable point, return false
        if (i > maxJump) {
            return false;
        }
        
        // Update the farthest reachable index
        maxJump = Math.max(maxJump, i + nums[i]);
        
        // Early exit: If we can already reach the last index, return true
        if (maxJump >= nums.length - 1) {
            return true;
        }
    }

    return false; // Default return if loop completes
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


/*
Jump Game (I):

We only care if we can reach the end, not how.
Track the farthest point reachable and ensure you don't get stuck.
Jump Game II:

It's guaranteed that we can reach the end.
Minimize the number of jumps by tracking:
currentReach: How far the current jump can go.
nextReach: How far the next jump can go.
Increase jumps only when i reaches currentReach.
*/