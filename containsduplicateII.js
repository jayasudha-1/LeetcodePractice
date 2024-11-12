var containsNearbyDuplicate = function(nums, k) {
    const map = new Map(); // Create a new Map to store the last seen index of each element

    for (let i = 0; i < nums.length; i++) {  // Iterate through the array
        if (map.has(nums[i])) {  // Check if the number has been seen before
            const j = map.get(nums[i]);  // Get the last index where this number was found
            if (i - j <= k) {  // Check if the difference between current index and last index is <= k
                return true;  // If so, return true (we found a nearby duplicate)
            }
        }
        map.set(nums[i], i);  // Update the map with the current index of the number
    }
    return false;  // If no such pair is found, return false
};
/*
nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/