var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxArea = 0;

    // Helper function to perform DFS
    function dfs(i, j) {
        // If out of bounds or water, return 0
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
            return 0;
        }
        
        // Mark the current cell as visited
        grid[i][j] = 0;
        
        // Initialize area count for the current island
        let area = 1;

        // Explore in all 4 directions: up, down, left, right
        area += dfs(i + 1, j); // down
        area += dfs(i - 1, j); // up
        area += dfs(i, j + 1); // right
        area += dfs(i, j - 1); // left

        return area;
    }

    // Iterate through the entire grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // If we find an unvisited land cell
            if (grid[i][j] === 1) {
                // Call DFS to get the area of the current island
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
};