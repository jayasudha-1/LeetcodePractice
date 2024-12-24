function isStrobogrammatic(num) {
    const validPairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        const leftChar = num[left];
        const rightChar = num[right];
        
        if (!(leftChar in validPairs) || validPairs[leftChar] !== rightChar) {
            return false;
        }
        
        left++;
        right--;
    }

    return true;
}

// Example usage:
console.log(isStrobogrammatic("69"));  // Output: true
console.log(isStrobogrammatic("88"));  // Output: true
console.log(isStrobogrammatic("962")); // Output: false
console.log(isStrobogrammatic("818")); // Output: true
