//time:O(n)and space :O(1)
var findDuplicates = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Find the index corresponding to the value at nums[i]
        let index = Math.abs(nums[i]) - 1;
        
        // If the number at that index is already negative, it's a duplicate
        if (nums[index] < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            // Mark the number at index as negative
            nums[index] = -nums[index];
        }
    }
    
    return result;
};
/*--time and space :O(n)
var findDuplicates = function(nums) {
    const result = [];
    const hashMap = new Map();
    
    // First loop: Populate the hashMap with frequencies
    for(let i = 0; i < nums.length; i++) {
        // Increment the count of each number in the map
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
    }
    
    // Second loop: Find numbers that appeared twice
    for (let [key, value] of hashMap) {
        if (value === 2) {
            result.push(key);
        }
    }
    return result;
};
*/