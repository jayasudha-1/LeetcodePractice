var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if mid is a peak
        if (nums[mid] < nums[mid + 1]) {
            // Move to the right side
            left = mid + 1;
        } else {
            // Move to the left side (or mid)
            right = mid;
        }
    }
    // left and right will converge to the peak element
    return left; // or return right, they are equal at this point
};
let nums = [1,2,3,1];
let result = findPeakElement(nums);
console.log(result);