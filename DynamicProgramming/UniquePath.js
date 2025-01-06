var uniquePaths = function(m, n) {
    // Create a 2D DP array initialized with 1s
    let dp = Array(m).fill().map(() => Array(n).fill(1));
    
    // Iterate through the grid starting from (1,1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    // The result is in the bottom-right corner
    return dp[m - 1][n - 1];
};
