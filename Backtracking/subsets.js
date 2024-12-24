var subsets = function(nums) {
    let result = [];
    
    // Helper function for backtracking
    const backtrack = (index, current) => {
        // Add the current subset to the result
        result.push([...current]);
        
        // Explore further subsets
        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]); // Include nums[i]
            backtrack(i + 1, current); // Recurse to the next index
            current.pop(); // Backtrack by removing the last element
        }
    };
    
    // Start the recursion
    backtrack(0, []);
    return result;
};
