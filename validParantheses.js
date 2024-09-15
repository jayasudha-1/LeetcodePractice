/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false*/

var validParentheses = function(s){
    const stack=[];
    const map={
        "(":")",
        "[":"]",
        "{":"}"  
    };
    for (let i=0; i<s.length;i++){
        if(s[i]=="(" || s[i]=="[" || s[i]=="{"){
            stack.push(s[i]);
        }else{
            const top=stack.pop();
            if(s[i]!==map[top])
                return false;
        }
    }
    return stack.length===0;

};
// Test case
let s = "(]";
let result = validParentheses(s);
console.log(result);