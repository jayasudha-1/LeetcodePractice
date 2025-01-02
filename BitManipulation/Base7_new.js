function convertToBase7(num) {
    if (num === 0) return '0'; // Edge case for zero
    
    let result = '';
    let isNegative = num < 0; // Handle negative numbers(true)(at the end,- sign will be added)
    num = Math.abs(num);

    while (num > 0) {
        result = (num % 7) + result; // Get the remainder and prepend it
        num = Math.floor(num / 7);  // Divide and truncate
    }

    return isNegative ? '-' + result : result;
}