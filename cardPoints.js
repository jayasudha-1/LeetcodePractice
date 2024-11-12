var maxScore = function(cardPoints, k) {
    const n = cardPoints.length;
    const totalSum = cardPoints.reduce((a, b) => a + b, 0);

    // If we need to take all the cards, the max score is the total sum
    if (k === n) return totalSum;

    // Find the minimum sum of a subarray with length `n - k`
    let windowSize = n - k;
    let minSubarraySum = 0;
    
    // Calculate the initial window sum
    for (let i = 0; i < windowSize; i++) {
        minSubarraySum += cardPoints[i];
    }

    // Now slide the window across the array
    let currentSum = minSubarraySum;
    for (let i = windowSize; i < n; i++) {
        // Slide the window to the right by adding the next element and subtracting the previous start
        currentSum += cardPoints[i] - cardPoints[i - windowSize];
        minSubarraySum = Math.min(minSubarraySum, currentSum);
    }

    // Maximum score is the total sum minus the smallest subarray sum of length `n - k`
    return totalSum - minSubarraySum;
};

// Example usage:
console.log(maxScore([1,2,3,4,5,6,1], 3)); // Output: 12
console.log(maxScore([2,2,2], 2));          // Output: 4
console.log(maxScore([9,7,7,9,7,7,9], 7));  // Output: 55
