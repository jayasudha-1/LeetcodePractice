var summaryRanges = function(nums) {
    let ranges = [];  // Result array to store the ranges
    let start = 0;    // To track the start of a range
    
    for (let i = 0; i < nums.length; i++) {
        // If current number is the last one or not consecutive with the next one
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            // If start equals i, it's a single number
            if (start === i) {
                ranges.push(`${nums[start]}`);
            } else {
                // Else it's a range
                ranges.push(`${nums[start]}->${nums[i]}`);
            }
            // Move start to the next number
            start = i + 1;
        }
    }
    return ranges;
};
//Test case
nums = [0,1,2,4,5,7]
ranges=summaryRanges(nums);
console.log(ranges);