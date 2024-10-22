var isPerfectSquare = function(num) {
    if (num < 2) return true;  // Numbers 0 and 1 are perfect squares

    let left = 2, right = Math.floor(num / 2);  // Start from 2 to num/2

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let guessSquared = mid * mid;

        if (guessSquared === num) {
            return true;  // Found the perfect square
        } else if (guessSquared > num) {
            right = mid - 1;  // Search in the left half
        } else {
            left = mid + 1;  // Search in the right half
        }
    }

    return false;  // No perfect square found
};

//Input: num = 16
//Output: true