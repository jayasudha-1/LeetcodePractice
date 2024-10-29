var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the mid element is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Determine if the left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target lies in the sorted left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;  // Search left
            } else {
                left = mid + 1;   // Search right
            }
        } else {  // The right half must be sorted
            // Check if target lies in the sorted right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;   // Search right
            } else {
                right = mid - 1;  // Search left
            }
        }
    }

    // Target not found
    return -1;
};


/*Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1 */