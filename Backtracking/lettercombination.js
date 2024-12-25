var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    const digitToLetters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const result = [];
    
    const backtrack = (index, currentCombination) => {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }
        
        const letters = digitToLetters[digits[index]];
        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    };
    
    backtrack(0, '');
    return result;
};
//test case
result=letterCombinations("23");
console.log(result);
/*[
    'ad', 'ae', 'af',
    'bd', 'be', 'bf',
    'cd', 'ce', 'cf'
  ]*/