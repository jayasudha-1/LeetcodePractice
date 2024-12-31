var cloneGraph = function(node) {
    if (!node) return null; // Handle edge case of empty graph
    
    const visited = new Map(); // Map to track original → clone node mapping
    const queue = []; // Queue for BFS traversal
    
    // Clone the starting node and add it to the map and queue
    const clonedStart = new Node(node.val);
    visited.set(node, clonedStart);
    queue.push(node);
    
    while (queue.length > 0) {
        const current = queue.shift(); // Dequeue current node
        
        for (let neighbor of current.neighbors) {
            // If the neighbor hasn't been cloned yet
            if (!visited.has(neighbor)) {
                // Clone the neighbor and add it to the map
                visited.set(neighbor, new Node(neighbor.val));
                // Add the neighbor to the queue for further traversal
                queue.push(neighbor);
            }
            
            // Link the cloned current node to the cloned neighbor
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }
    
    return clonedStart; // Return the cloned starting node
};
