var addBinary = function(a, b) {
    // Convert binary strings to BigInt using '0b' prefix
    let numA = BigInt('0b' + a);
    let numB = BigInt('0b' + b);
    
    // Add the two BigInts
    let sum = numA + numB;
    
    // Convert the result back to a binary string
    return sum.toString(2);
};
//Input: a = "11", b = "1"
//Output: "100"