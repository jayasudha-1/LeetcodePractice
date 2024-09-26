var findAnagrams = function(s, p) {
    let result = [];
    let pLen = p.length;
    let sLen = s.length;
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);

    // Base case: if p is longer than s
    if (pLen > sLen) {
        return result;
    }

    // Populate frequency arrays for the first window
    for (let i = 0; i < pLen; i++) {
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Compare the first window
    if (pCount.toString() === sCount.toString()) {
        result.push(0);  // No need to return, just push
    }

    // Sliding window: Start from index pLen and move to sLen
    for (let i = pLen; i < sLen; i++) {
        // Slide the window: remove the leftmost character and add the new rightmost character
        sCount[s.charCodeAt(i - pLen) - 'a'.charCodeAt(0)]--;  // Remove left character
        sCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;  // Add right character

        // Compare the new window
        if (pCount.toString() === sCount.toString()) {
            result.push(i - pLen + 1);  // Push the start index of the anagram
        }
    }

    // Return the result after all comparisons
    return result;
};
//Test Cases
s = "cbaebabacd", p = "abc"
result=findAnagrams(s,p);
console.log(result);
/*

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input: s = "abab", p = "ab"
Output: [0,1,2] */