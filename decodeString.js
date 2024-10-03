var decodeString = function(s) {
    let stack = [];
    let currentString = '';
    let currentNum = 0;
    
    for (let char of s) {
        if (!isNaN(char)) { // If it's a number
            currentNum = currentNum * 10 + Number(char);// Form the full number
        } else if (char === '[') {
            stack.push([currentString, currentNum]); // Save current string and number
            currentString = ''; // Reset current string
            currentNum = 0; // Reset number
        } else if (char === ']') {
            let [prevString, repeatCount] = stack.pop(); // Retrieve previous context
            currentString = prevString + currentString.repeat(repeatCount); // Repeat and concatenate
        } else {
            currentString += char; // Add characters to the current string
        }
    }
    
    return currentString; // Final decoded string
};
//testcases
let s = "3[a]2[bc]";
result=decodeString(s);
console.log(result);  


/*
var decodeString = function(s) {
    while (s.includes('[')) {
        s = s.replace(/(\d+)\[([a-z]+)\]/g, (_, number, word) => word.repeat(number));
    }
    return s;
};
*/