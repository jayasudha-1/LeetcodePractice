function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Handle empty input case

    let prefix = strs[0]; // Start with the first string as the initial prefix

    for (let i = 1; i < strs.length; i++) {
        // Compare the prefix with the next string
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix until it matches the start of strs[i]
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return ""; // No common prefix
        }
    }

    return prefix; // Return the longest common prefix
}

// Example Usage
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
//console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
