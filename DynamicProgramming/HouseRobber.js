var rob = function(nums) {
    if (nums.length === 0) return 0; // No houses to rob
    if (nums.length === 1) return nums[0]; // Only one house to rob

    let prev2 = 0; // Money robbed from two houses ago
    let prev1 = 0; // Money robbed from the previous house

    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(prev1, nums[i] + prev2);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};
