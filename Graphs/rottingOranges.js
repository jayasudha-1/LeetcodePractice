var orangesRotting = function(grid) {
    // Step 1: Initialize variables
    let rows = grid.length; // Get number of rows in the grid
    let cols = grid[0].length; // Get number of columns in the grid
    let queue = []; // To store the coordinates of rotten oranges
    let freshCount = 0; // To count the number of fresh oranges
    
    // Step 2: Populate the queue with initial rotten oranges and count fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]); // Add rotten orange to the queue
            } else if (grid[i][j] === 1) {
                freshCount++; // Count fresh oranges
            }
        }
    }
    
    // If there are no fresh oranges, return 0 immediately
    if (freshCount === 0) return 0;
    
    // Step 3: Define directions for 4-way movement (up, down, left, right)
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let minutes = 0; // To keep track of time elapsed
    
    // Step 4: Start BFS (Breadth-First Search)
    while (queue.length > 0) {
        let size = queue.length;
        let flag = false; // To check if any fresh orange rots in this minute
        
        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift(); // Get current rotten orange coordinates
            
            for (let [dx, dy] of directions) {
                let newX = x + dx;
                let newY = y + dy;
                
                // Check if the new coordinates are valid and have a fresh orange
                if (
                    newX >= 0 && newX < rows &&
                    newY >= 0 && newY < cols &&
                    grid[newX][newY] === 1
                ) {
                    grid[newX][newY] = 2; // Make the fresh orange rotten
                    queue.push([newX, newY]); // Add the newly rotten orange to the queue
                    freshCount--; // Reduce the fresh orange count
                    flag = true; // Mark that an orange was rotted this minute
                }
            }
        }
        
        if (flag) minutes++; // Only increment time if at least one orange was rotted
    }
    
    // Step 5: Check if all fresh oranges are rotten
    return freshCount === 0 ? minutes : -1;
};
