var numDecodings = function(s) {
    if (s.length === 0 || s[0] === '0') return 0; // Cannot start with '0'
   
   const n = s.length;
   let dp = new Array(n + 1).fill(0);
   
   // Base cases
   dp[0] = 1; // Empty string has one way to decode
   dp[1] = s[0] !== '0' ? 1 : 0; // If the first character is valid
   
   for (let i = 2; i <= n; i++) {
       // Check single digit
       const oneDigit = parseInt(s.slice(i - 1, i));
       if (oneDigit >= 1 && oneDigit <= 9) {
           dp[i] += dp[i - 1];
       }
       
       // Check two digits
       const twoDigits = parseInt(s.slice(i - 2, i));
       if (twoDigits >= 10 && twoDigits <= 26) {
           dp[i] += dp[i - 2];
       }
   }
   
   return dp[n];
   
};

// Example usage
console.log(numDecodings("12"));   // Output: 2 ("AB", "L")
console.log(numDecodings("226"));  // Output: 3 ("BZ", "VF", "BBF")
console.log(numDecodings("06"));   // Output: 0 (Invalid decoding)
