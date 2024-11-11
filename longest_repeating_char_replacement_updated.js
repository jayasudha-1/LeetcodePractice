var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let maxFreq = 0;
    let freqMap = {};

    for (let right = 0; right < s.length; right++) {
        // Increase frequency of the current character
        const char = s[right];
        freqMap[char] = (freqMap[char] || 0) + 1;
        
        // Update maxFreq to the highest frequency in the current window
        maxFreq = Math.max(maxFreq, freqMap[char]);

        // Check if the current window is valid
        while (right - left + 1 - maxFreq > k) {
            // If not valid, shrink the window from the left
            freqMap[s[left]] -= 1;
            left++;
        }

        // Update the maximum length of a valid window
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

//console.log(characterReplacement("ABAB", 2)); // Output: 4

let s="ABAB", k=2;
result=characterReplacement(s, k);
console.log(result);