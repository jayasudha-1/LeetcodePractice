// Function to generate all permutations of an array
var permute = function(nums) {
    // Step 1: Create an empty array to store all permutations
    let result = [];
    
    // Step 2: Define the backtracking function
    const backtrack = (currentPermutation) => {
        // Step 3: Base Case - If currentPermutation's length equals nums' length
        if (currentPermutation.length === nums.length) {
            // Add a copy of currentPermutation to result
            result.push([...currentPermutation]);
            return;
        }
        
        // Step 4: Iterate through each number in nums
        for (let i = 0; i < nums.length; i++) {
            // Skip if the number is already in the current permutation
            if (currentPermutation.includes(nums[i])) continue;
            
            // Step 5: Choose the current number
            currentPermutation.push(nums[i]);
            
            // Step 6: Explore further with recursion
            backtrack(currentPermutation);
            
            // Step 7: Backtrack (Undo the choice)
            currentPermutation.pop();
        }
    };
    
    // Step 8: Start the recursion with an empty array
    backtrack([]);
    
    // Step 9: Return all the permutations
    return result;
};
//output: 
//1,2,3 
[  [1, 2, 3], [1, 3, 2],
  [2, 1, 3], [2, 3, 1],
  [3, 1, 2], [3, 2, 1]
]
