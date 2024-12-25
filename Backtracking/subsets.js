// Function to generate all subsets of an array
var subsets = function(nums) {
    // Step 1: Create an empty array to store all subsets
    let result = []; 
    
    // Step 2: Define the backtracking function
    const backtrack = (currentSubset, startIndex) => {
        // Step 3: Add the current subset to the result
        // Use a copy of currentSubset to avoid reference issues
        result.push([...currentSubset]); 
        
        // Step 4: Loop through the array starting from startIndex
        for (let i = startIndex; i < nums.length; i++) {
            // Step 5: Include nums[i] in the current subset
            currentSubset.push(nums[i]);
            
            // Step 6: Recursively call backtrack for the next index
            // Move to the next element in the array
            backtrack(currentSubset, i + 1); 
            
            // Step 7: Remove the last added element (backtrack)
            // This step ensures we explore other possibilities
            currentSubset.pop(); 
        }
    };

    // Step 8: Start the backtracking process from an empty subset
    backtrack([], 0);

    // Step 9: Return the result containing all subsets
    return result;
};


let nums = [1, 2, 3];
let result = subsets(nums);
console.log(result);
