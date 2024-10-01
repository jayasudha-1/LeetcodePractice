var canConstruct = function(ransomNote, magazine) {
    const magazineMap = new Map();
    
    // Count the occurrences of each character in magazine
    for (let char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }
    // Check if ransomNote can be constructed from magazine
    for (let char of ransomNote) {
        if (!magazineMap.has(char) || magazineMap.get(char) === 0) {
            return false;  // If char is not in magazine or not enough occurrences
        }
        magazineMap.set(char, magazineMap.get(char) - 1);  // Use one occurrence
    }
    return true;  // All characters in ransomNote are satisfied
};
//testcases
let  ransomNote = "aac", magazine = "aab";
result=canConstruct(ransomNote, magazine);
console.log(result);