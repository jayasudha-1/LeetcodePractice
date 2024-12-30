var pacificAtlantic = function(heights) {
    if (!heights || heights.length === 0) return [];
    
    const m = heights.length;
    const n = heights[0].length;
    
    // Create visited matrices for both oceans
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
    
    // DFS function to mark reachable cells
    const dfs = (row, col, visited, prevHeight) => {
        // Boundary and height check
        if (
            row < 0 || col < 0 || row >= m || col >= n || 
            visited[row][col] || heights[row][col] < prevHeight
        ) {
            return;
        }
        
        visited[row][col] = true;
        
        // Explore all 4 directions
        dfs(row + 1, col, visited, heights[row][col]);
        dfs(row - 1, col, visited, heights[row][col]);
        dfs(row, col + 1, visited, heights[row][col]);
        dfs(row, col - 1, visited, heights[row][col]);
    };
    
    // Run DFS for Pacific (Top row + Left column)
    for (let i = 0; i < m; i++) dfs(i, 0, pacific, heights[i][0]);
    for (let j = 0; j < n; j++) dfs(0, j, pacific, heights[0][j]);
    
    // Run DFS for Atlantic (Bottom row + Right column)
    for (let i = 0; i < m; i++) dfs(i, n - 1, atlantic, heights[i][n - 1]);
    for (let j = 0; j < n; j++) dfs(m - 1, j, atlantic, heights[m - 1][j]);
    
    // Collect cells reachable by both oceans
    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    
    return result;
};
