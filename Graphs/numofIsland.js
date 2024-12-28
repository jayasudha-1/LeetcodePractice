var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let islandCount = 0;

    // DFS function to mark all connected lands as visited
    function dfs(i, j) {
        // If out of bounds or water, stop the DFS
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') {
            return;
        }

        // Mark the current cell as visited
        grid[i][j] = '0';

        // Explore the four directions: up, down, left, right
        dfs(i - 1, j); // up
        dfs(i + 1, j); // down
        dfs(i, j - 1); // left
        dfs(i, j + 1); // right
    }

    // Iterate through each cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // If we find a land cell, it’s the start of a new island
            if (grid[i][j] === '1') {
                islandCount++;
                dfs(i, j); // Perform DFS to mark all connected land as visited
            }
        }
    }

    return islandCount;
};
