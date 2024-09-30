var merge = function(nums1, m, nums2, n) {
    // Start from the end of nums1 and nums2
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for placement in nums1

    // While there are elements in both arrays
    while (i >= 0 && j >= 0) {
        // Compare the elements from nums1 and nums2
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Place nums1[i] at the current position
            i--; // Move the pointer for nums1
        } else {
            nums1[k] = nums2[j]; // Place nums2[j] at the current position
            j--; // Move the pointer for nums2
        }
        k--; // Move the pointer for the merged array
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};
//Test case
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
result=merge(nums1, m, nums2, n);
console.log(nums1);