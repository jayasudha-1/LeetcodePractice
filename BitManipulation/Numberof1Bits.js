var hammingWeight = function(n) {
    let count=0;
    while(n !==0){
        n= n & (n-1);
        count++;
    }
    return count 
};
//Every time you perform n &= (n - 1), it removes the rightmost set bit (1) in n.
//The loop continues until there are no more set bits left (n becomes 0).