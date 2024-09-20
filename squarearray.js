/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);  // Create a new array to store the squares
    let left = 0;  // Pointer to the leftmost element
    let right = n - 1;  // Pointer to the rightmost element
    let position = n - 1;  // Start filling the result array from the back
    
    while (left <= right) {
        let leftSquare = nums[left] * nums[left];  // Square of the left element
        let rightSquare = nums[right] * nums[right];  // Square of the right element
        
        // Compare squares and place the larger one at the current position
        if (leftSquare > rightSquare) {
            result[position] = leftSquare;
            left++;  // Move the left pointer to the next element
        } else {
            result[position] = rightSquare;
            right--;  // Move the right pointer to the previous element
        }
        
        position--;  // Move the position for the next largest square
    }
    
    return result;  // Return the sorted squares array
};
// Test case
let nums = [-4,-1,0,3,10]
let result = sortedSquares(nums);
console.log(result);