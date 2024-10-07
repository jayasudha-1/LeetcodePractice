var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            // Count the streak of consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};
//Test case
let nums = [100,1,4,200,1,3,2];// The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
let result = longestConsecutive(nums);
console.log(result);