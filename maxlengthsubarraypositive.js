var getMaxLen = function(nums) {
    let positiveLen = 0;  // Tracks length of subarray with positive product
    let negativeLen = 0;  // Tracks length of subarray with negative product
    let maxLen = 0;       // Tracks the maximum length of subarray with positive product
    
    for (let num of nums) {
        if (num === 0) {
            // Reset lengths when encountering 0
            positiveLen = 0;
            negativeLen = 0;
        } else if (num > 0) {
            // Positive number: increment both if valid
            positiveLen += 1;
            negativeLen = negativeLen > 0 ? negativeLen + 1 : 0;
        } else {
            // Negative number: swap lengths and increment accordingly
            let temp = positiveLen;
            positiveLen = negativeLen > 0 ? negativeLen + 1 : 0;
            negativeLen = temp + 1;
        }
        // Update maxLen with the current positiveLen
        maxLen = Math.max(maxLen, positiveLen);
    }
    
    return maxLen;
};
