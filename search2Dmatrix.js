var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;

    let m = matrix.length; // number of rows
    let n = matrix[0].length; // number of columns

    let left = 0;
    let right = m * n - 1; // total number of elements - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // Calculate the row and column of the mid index
        let midValue = matrix[Math.floor(mid / n)][mid % n];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1; // move to the right half
        } else {
            right = mid - 1; // move to the left half
        }
    }

    return false; // target not found};

//Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//Output: true
