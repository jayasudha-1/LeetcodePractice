var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first k elements
    let sum = 0;
    // Initialize maxSum as the sum of the first k elements
    let maxSum = sum;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        // Update the sum by adding the new element and removing the one that goes out
        sum = sum + nums[i] - nums[i - k];
        // Update maxSum if current sum is greater
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum average
    return maxSum / k;
};
let nums = [1,12,-5,-6,50,3], k = 4;
result=findMaxAverage(nums, k);
console.log(result);
