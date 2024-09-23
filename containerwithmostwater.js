var maxArea = function(height) {
    let left = 0;         // Initialize left pointer
    let right = height.length - 1;  // Initialize right pointer
    let maxArea = 0;      // Variable to store the maximum area

    while (left < right) {
        // Calculate the width between the two pointers
        let width = right - left;
        // Find the height of the container, which is the shorter of the two lines
        let h = Math.min(height[left], height[right]);
        // Calculate the area with current left and right pointers
        let currentArea = width * h;
        // Update maxArea if we found a larger area
        maxArea = Math.max(maxArea, currentArea);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;  // Return the maximum area found
};

//Test Case
height = [1,8,6,2,5,4,8,3,7]
result=maxArea(height);
console.log(result);