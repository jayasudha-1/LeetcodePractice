var subarraySum = function(nums, k) {
    let count = 0;   // To keep track of the total number of subarrays
    let sum = 0;     // To maintain the cumulative sum
    let map = new Map();   // Map to store sum frequencies
    map.set(0, 1);   // Base case: there's one way to have sum of 0 (no elements)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];   // Add the current number to the cumulative sum
        
        // If sum - k is found in the map, it means there is a subarray that adds up to k
        if (map.has(sum - k)) {
            count += map.get(sum - k);  // Add the count of such subarrays
        }
        
        // Update the map with the current sum's frequency
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;  // Return the total count of subarrays
};
//Test Cases
nums = [1,2,3], k = 3
result=subarraySum(nums, k);
console.log(result);