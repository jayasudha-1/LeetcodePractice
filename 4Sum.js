var fourSum = function(nums, target) {
    let result = [];
    let n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array to facilitate deduplication and two-pointer approach

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate values for `i`
        
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicate values for `j`

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    // Corrected this line to push the quadruplet array, not the sum
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Skip duplicates for `left` and `right`
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum > target) {
                    right--; // Decrease `right` to reduce the sum
                } else {
                    left++; // Increase `left` to increase the sum
                }
            }
        }
    }

    return result;
};

// Test case
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
let result = fourSum(nums, target);
console.log(result); // Expected output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
