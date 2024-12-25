var generateParenthesis = function(n) {
    let result = [];

    // Helper function to backtrack and generate valid combinations
    function backtrack(currentCombination, openCount, closeCount) {
        // If we've used n opening and n closing parentheses, add the combination to the result
        if (currentCombination.length === 2 * n) {
            result.push(currentCombination);
            return;
        }

        // Add opening parenthesis if we haven't used all of them
        if (openCount < n) {
            backtrack(currentCombination + '(', openCount + 1, closeCount);
        }

        // Add closing parenthesis if we can (i.e., if there are more opening than closing)
        if (closeCount < openCount) {
            backtrack(currentCombination + ')', openCount, closeCount + 1);
        }
    }

    // Start the backtracking process
    backtrack('', 0, 0);

    return result;
};

let n=3;
let result = generateParenthesis(n);
console.log(result);