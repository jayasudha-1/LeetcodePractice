var longestPalindrome = function(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        // Helper function to expand around center
        const expand = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }
            return s.slice(l + 1, r);
        };
        // Compare current palindrome with the result
        let odd = expand(i, i);      // Odd-length palindromes (single character center)
        let even = expand(i, i + 1); // Even-length palindromes (two-character center)
        result = odd.length > result.length ? odd : result;
        result = even.length > result.length ? even : result;
    }
    return result;
};
//test case
s = "babad" //bab or aba
result=longestPalindrome(s);
console.log(result);