var lengthOfLIS = function(nums) {
    // Edge case: if the array is empty, return 0.
    if (nums.length === 0) return 0;

    // Create an array `dp` where dp[i] represents the length of the longest 
    // increasing subsequence ending at index `i`.
    let dp = new Array(nums.length).fill(1);

    // Initialize the overall maximum length.
    let maxLength = 1;

    // Iterate through the array.
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // Check if nums[j] is less than nums[i], meaning the sequence can continue.
            if (nums[j] < nums[i]) {
                // Update dp[i] to be the maximum of its current value or dp[j] + 1.
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // Update the maximum length found so far.
        maxLength = Math.max(maxLength, dp[i]);
    }

    // Return the maximum length of the longest increasing subsequence.
    return maxLength;
};
