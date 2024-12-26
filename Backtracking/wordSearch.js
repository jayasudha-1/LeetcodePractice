var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    const dfs = (i, j, index) => {
        // Base Case: If all characters are matched
        if (index === word.length) return true;
        
        // Check boundaries and character match
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[index]) {
            return false;
        }
        
        // Temporarily mark the cell as visited
        const temp = board[i][j];
        board[i][j] = '#';
        
        // Explore all 4 directions
        const found = (
            dfs(i + 1, j, index + 1) || // Down
            dfs(i - 1, j, index + 1) || // Up
            dfs(i, j + 1, index + 1) || // Right
            dfs(i, j - 1, index + 1)    // Left
        );
        
        // Backtrack and restore the original value
        board[i][j] = temp;
        
        return found;
    };
    
    // Start DFS from every cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};
