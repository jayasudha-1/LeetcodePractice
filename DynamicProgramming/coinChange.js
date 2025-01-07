var coinChange = function(coins, amount) {
    // Initialize DP array with Infinity
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins needed for amount 0
    
    // Iterate through each coin
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    // Check if amount is achievable
    return dp[amount] === Infinity ? -1 : dp[amount];
};
