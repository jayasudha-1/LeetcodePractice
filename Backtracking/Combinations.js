var combine = function(n, k) {
    let result = [];
    
    const backtrack = (start, current) => {
        // If the current combination has k elements, add it to the result
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        
        // Iterate through the numbers from 'start' to 'n'
        for (let i = start; i <= n; i++) {
            current.push(i);  // Choose the current number
            backtrack(i + 1, current);  // Explore further with the next numbers
            current.pop();  // Undo the choice
        }
    };
    
    backtrack(1, []);
    return result;
};

//Input: n = 4, k = 2
//Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]