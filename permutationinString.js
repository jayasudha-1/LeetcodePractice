var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1count = new Array(26).fill(0);
    const s2count = new Array(26).fill(0);

    // Fill frequency arrays for s1 and the first window of s2
    for (let i = 0; i < s1.length; i++) { 
        s1count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // Helper function - compare two frequency arrays
    const matches = (a, b) => a.every((val, index) => val === b[index]);

    // Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches(s1count, s2count)) return true;

        // Slide the window: add next character and remove the leftmost character
        s2count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;
    }

    // Final check for the last window
    return matches(s1count, s2count);
};
let s1 = "ab", s2 = "eidbaooo";
result=checkInclusion(s1, s2);
console.log(result);