var validPath = function(n, edges, source, destination) {
    // 🛠️ Step 1: Build the Graph Using Adjacency List
    const graph = new Map(); // Create an empty Map to store graph connections.
    
    // Initialize each node with an empty array
    for (let i = 0; i < n; i++) {
        graph.set(i, []); // Each vertex starts with an empty list of neighbors.
    }
    
    // Add edges to the adjacency list
    for (const [u, v] of edges) {
        graph.get(u).push(v); // Add vertex v as a neighbor of vertex u.
        graph.get(v).push(u); // Add vertex u as a neighbor of vertex v.
    }
    
    // 🛠️ Step 2: Breadth-First Search (BFS)
    const visited = new Set(); // Create a set to track visited nodes.
    const queue = [source]; // Initialize a queue with the source node.
    visited.add(source); // Mark the source node as visited.
    
    while (queue.length > 0) { // While the queue is not empty
        const node = queue.shift(); // Dequeue the first node from the queue.
        
        if (node === destination) return true; // If destination is reached, return true.
        
        for (const neighbor of graph.get(node)) { // Explore neighbors
            if (!visited.has(neighbor)) { // If not visited
                visited.add(neighbor); // Mark neighbor as visited
                queue.push(neighbor); // Enqueue the neighbor
            }
        }
    }
    
    return false; // If queue is empty and destination wasn't found, return false.
};
