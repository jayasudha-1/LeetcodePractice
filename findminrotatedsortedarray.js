var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // If the middle element is greater than the rightmost element,
        // the minimum element must be in the right half of the array
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the minimum element is in the left half, including mid itself
        else {
            right = mid;
        }
    }

    // After the loop, left will point to the smallest element
    return nums[left];
};
//Input: nums = [3,4,5,1,2]
//Output: 1