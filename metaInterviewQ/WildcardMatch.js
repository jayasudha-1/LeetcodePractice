function isMatch(s, p) {
    const m = s.length;
    const n = p.length;
    
    // Create a DP table
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));
    
    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Handle patterns with '*'
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                // Characters match or '?' matches any character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' can match empty (dp[i][j-1]) or match one more character (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}

// Example Usage
console.log(isMatch("aa", "a"));    // Output: false
console.log(isMatch("aa", "*"));    // Output: true
console.log(isMatch("cb", "?a"));   // Output: false
console.log(isMatch("adceb", "*a*b")); // Output: true
console.log(isMatch("acdcb", "a*c?b")); // Output: false
