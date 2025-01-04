var climbStairs = function(n) {
    if(n===1) return 1;
    if(n===2) return 2;

    let first=1;
    let second=2;
    for(let i=3; i<=n; i++){
        let current=first+second;
        first= second;
        second= current;
    }
    return second;
    
};
/* Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/