var combinationSum = function(candidates, target) {
    let result = [];
    
    const backtrack = (start, current, remainingTarget) => {
        // If the remaining target is zero, we found a valid combination
        if (remainingTarget === 0) {
            result.push([...current]);
            return;
        }
        
        // Try each candidate starting from the current position
        for (let i = start; i < candidates.length; i++) {
            let candidate = candidates[i];
            
            // If the remaining target is smaller than the candidate, no point in continuing
            if (remainingTarget < candidate) continue;
            
            current.push(candidate);  // Choose the current candidate
            backtrack(i, current, remainingTarget - candidate);  // Recurse with updated target, allow same candidate again
            current.pop();  // Backtrack, remove the last candidate
        }
    };
    
    backtrack(0, [], target);
    return result;
};
//Input: candidates = [2,3,6,7], target = 7
//Output: [[2,2,3],[7]]