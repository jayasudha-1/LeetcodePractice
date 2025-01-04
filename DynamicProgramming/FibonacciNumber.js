var fib = function(n) {
    if (n===0) return 0;
    if (n===1) return 1;
    let fibArray=[0,1];

    for(i=2; i<=n; i++){
        fibArray[i]=fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[n]; 
};

//Input: n = 4, Output: 3 Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.