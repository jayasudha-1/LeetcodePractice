/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Sort the array to use the two-pointer approach
    nums.sort((a, b) => a - b);
    
    let closestSum = Infinity;  // Initialize the closest sum with a very large number
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Initialize two pointers
        let l = i + 1;
        let r = nums.length - 1;
        
        while (l < r) {
            const currentSum = nums[i] + nums[l] + nums[r];
            
            // Check if the current sum is closer to the target than the previous closest sum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            // Move pointers to try to get closer to the target
            if (currentSum < target) {
                l++;
            } else if (currentSum > target) {
                r--;
            } else {
                // If the sum is exactly the target, return it directly
                return currentSum;
            }
        }
    }
    
    return closestSum;
};
//testcases
let nums = [-1,2,1,-4], target = 1;
result=threeSumClosest(nums, target);
console.log(result);