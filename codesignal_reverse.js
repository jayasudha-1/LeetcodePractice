function smallestString(word) {
    let n = word.length;
    let smallest = word;  // Start with the original word as the smallest string

    // Reverse the first k characters and check
    for (let k = 1; k <= n; k++) {
        // Reverse the first k characters
        let reversedPrefix = word.slice(0, k).split('').reverse().join('') + word.slice(k);
        // Reverse the last k characters
        let reversedSuffix = word.slice(0, n - k) + word.slice(n - k).split('').reverse().join('');

        // Update the smallest string using lexicographical comparison
        if (reversedPrefix < smallest) {
            smallest = reversedPrefix;
        }
        if (reversedSuffix < smallest) {
            smallest = reversedSuffix;
        }
    }

    return smallest;
}

// Test case
let word = "dbaca";
let result = smallestString(word);
console.log(result);  // Output should be the lexicographically smallest string
