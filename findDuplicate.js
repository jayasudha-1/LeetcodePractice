var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    // Phase 1: Detect cycle (find meeting point)
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // Phase 2: Find the entrance to the cycle (which is the duplicate number)
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};
// Test case
let nums = [1,3,4,2,2]
let result = findDuplicate(nums);
console.log(result);