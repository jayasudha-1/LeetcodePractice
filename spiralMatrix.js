var spiralOrder = function(matrix) {
    // Edge case: if the matrix is empty, return an empty array.
    if (matrix.length === 0) return [];
    
    let result = []; // This will store the spiral order of the elements.
    
    // Initializing the boundaries
    let top = 0;                       // Top boundary
    let bottom = matrix.length - 1;     // Bottom boundary
    let left = 0;                       // Left boundary
    let right = matrix[0].length - 1;   // Right boundary

    // We loop while the top boundary is less than or equal to the bottom,
    // and the left boundary is less than or equal to the right.
    while (top <= bottom && left <= right) {

        // Traverse the top row from left to right.
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Move the top boundary down after traversing the top row.

        // Traverse the rightmost column from top to bottom.
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Move the right boundary to the left after traversing the rightmost column.

        // Check if there are still rows remaining to traverse.
        if (top <= bottom) {
            // Traverse the bottom row from right to left.
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Move the bottom boundary up after traversing the bottom row.
        }

        // Check if there are still columns remaining to traverse.
        if (left <= right) {
            // Traverse the leftmost column from bottom to top.
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Move the left boundary to the right after traversing the leftmost column.
        }
    }

    return result; // Return the spiral order.
};

//Test case
matrix =[[1,2,3],[4,5,6],[7,8,9]]
result=spiralOrder(matrix);
console.log(result);