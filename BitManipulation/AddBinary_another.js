var addBinary = function(a, b) {
    let result = '';      // Stores the final binary sum
    let carry = 0;        // Stores the carry from addition
    let i = a.length - 1; // Pointer for string 'a'
    let j = b.length - 1; // Pointer for string 'b'

    // Loop through both strings from the end
    while (i >= 0 || j >= 0 || carry > 0) {
        let bitA = i >= 0 ? parseInt(a[i]) : 0; // Get bit from 'a' or 0 if out of bounds
        let bitB = j >= 0 ? parseInt(b[j]) : 0; // Get bit from 'b' or 0 if out of bounds

        let sum = bitA + bitB + carry; // Add current bits and carry
        result = (sum % 2) + result;   // Append the remainder (0 or 1) to result
        carry = Math.floor(sum / 2);   // Update carry (1 if sum >= 2, else 0)

        i--; // Move pointer in 'a'
        j--; // Move pointer in 'b'
    }

    return result;
};
//Input: a = "11", b = "1"
//Output: "100"