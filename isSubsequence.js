var isSubsequence = function(s, t) {
    let i = 0; // Pointer for string s
    let j = 0; // Pointer for string t
    // Iterate through t
    while (j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move to the next character in s if a match is found
        }
        j++; // Always move to the next character in t
    }
    return i === s.length;
};
//Test case
s="abc", t = "ahbgdc"
result=isSubsequence(s, t);
console.log(result);