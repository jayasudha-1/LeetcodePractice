var evalRPN = function(tokens) {
    const stack = [];
    for (let token of tokens) {
        // Check if the token is an operator
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            // Pop the top two operands from the stack
            const num2 = stack.pop();
            const num1 = stack.pop();          
            // Apply the operator
            let result; // This is fine as let since you will be reassigning it
            if (token === '+') {
                result = num1 + num2;
            } else if (token === '-') {
                result = num1 - num2;
            } else if (token === '*') {
                result = num1 * num2;
            } else if (token === '/') {
                // Division with truncation towards zero
                result = Math.trunc(num1 / num2);
            }
            // Push the result back onto the stack
            stack.push(result);
        } else {
            // If it's a number, push it onto the stack
            stack.push(parseInt(token));
        }
    }
    // The final result will be the last remaining value on the stack
    return stack.pop();
};

//Test case
let tokens = ["2","1","+","3","*"];
let result = evalRPN(tokens);
console.log(result);