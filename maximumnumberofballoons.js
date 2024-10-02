var maxNumberOfBalloons = function(text) {
    // Create a map to count the occurrences of each character in the word "balloon"
    let charCount = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0 };
    
    // Count the occurrences of the required characters
    for (let char of text) {
        if (char in charCount) {
            charCount[char]++;
        }
    }
    
    // Since 'l' and 'o' appear twice in "balloon", we need to divide their counts by 2
    charCount['l'] = Math.floor(charCount['l'] / 2);
    charCount['o'] = Math.floor(charCount['o'] / 2);
    
    // Find the minimum count across all characters to determine how many "balloon"s can be formed
    return Math.min(charCount['b'], charCount['a'], charCount['l'], charCount['o'], charCount['n']);
};
//testcases
let text = "nlaebolko";
result=maxNumberOfBalloons(text);
console.log(result);