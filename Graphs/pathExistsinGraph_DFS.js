var validPath = function(n, edges, source, destination) {
    // 🛠️ Step 1: Build the Graph Using Adjacency List
    const graph = new Map(); // Create an empty Map to store graph connections.
    
    // Initialize each node with an empty array in the graph
    for (let i = 0; i < n; i++) {
        graph.set(i, []); // Each vertex starts with an empty list of neighbors.
    }
    
    // Add edges to the adjacency list
    for (const [u, v] of edges) {
        graph.get(u).push(v); // Add vertex v as a neighbor of vertex u.
        graph.get(v).push(u); // Add vertex u as a neighbor of vertex v (undirected graph).
    }
    
    // 🛠️ Step 2: Depth-First Search (DFS)
    const visited = new Set(); // Create a set to track visited nodes.
    
    function dfs(node) {
        if (node === destination) return true; // If we reach the destination, return true.
        
        visited.add(node); // Mark the current node as visited.
        
        // Explore all neighbors of the current node
        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) { // If the neighbor is not visited yet
                if (dfs(neighbor)) return true; // Recursively call DFS for the neighbor
            }
        }
        
        return false; // If no path is found, return false.
    }
    
    // Start DFS from the source node
    return dfs(source);
};