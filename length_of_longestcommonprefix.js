var longestCommonPrefix = function(arr1, arr2) {
    let hashSet = new Set();
    let maxLength = 0;
    // Store all prefixes of numbers in arr1
    for (let num of arr1) {
        let strNum = num.toString(); // Converting number to string
        // Generate and add prefixes of strNum to the hash set
        for (let i = 1; i <= strNum.length; i++) {
            hashSet.add(strNum.slice(0, i));
        }
    }
    // Check prefixes of numbers in arr2 against the hash set
    for (let num of arr2) {
        let strNum = num.toString(); // Converting number to string
        // Check for common prefixes
        for (let i = 1; i <= strNum.length; i++) {
            let prefix = strNum.slice(0, i);
            if (hashSet.has(prefix)) {
                maxLength = Math.max(maxLength, prefix.length);
            } else {
                break; // No need to check longer prefixes
            }
        }
    }
    return maxLength;
};
console.log(longestCommonPrefix(arr1 = [1,10,100], arr2 = [1000])); 