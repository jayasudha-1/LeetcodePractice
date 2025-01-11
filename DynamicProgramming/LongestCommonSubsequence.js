var longestCommonSubsequence = function(text1, text2) {
    // Initialize dimensions of the input strings
    const m = text1.length;
    const n = text2.length;

    // Create a 2D dp array with dimensions (m + 1) x (n + 1) initialized to 0
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    // Fill the dp table by comparing characters of text1 and text2
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // Characters match, add 1 to the LCS of the previous characters
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Take the maximum LCS by excluding either the current character of text1 or text2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Return the value in the bottom-right corner of the dp table
    return dp[m][n];
};
