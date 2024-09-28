var characterReplacement = function(s, k) {
    const count = new Array(26).fill(0); // To count the frequency of each character
    let left = 0, maxCount = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const rightCharIndex = s.charCodeAt(right) - 'A'.charCodeAt(0); // Assign to a variable
        count[rightCharIndex]++; // Increment the count using the variable
        maxCount = Math.max(maxCount, count[rightCharIndex]);
        // If the current window size minus the count of the most frequent character is greater than k
        if (right - left + 1 - maxCount > k) {
            const leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0); // Use a variable for the left pointer
            count[leftCharIndex]--; // Shrink from the left
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1); // Update the maximum length
    }
    return maxLength;
};
// Example usage:
console.log(characterReplacement("ABAB", 2)); // Output: 4
//console.log(characterReplacement("AABABBA", 1)); // Output: 4
