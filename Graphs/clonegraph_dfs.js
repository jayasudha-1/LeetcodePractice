var cloneGraph = function(node) {
    if (!node) return null; // Handle empty graph
    
    const visited = new Map(); // To track visited nodes
    
    const dfs = (currentNode) => {
        if (visited.has(currentNode)) {
            return visited.get(currentNode); // Return already cloned node
        }
        
        // Clone the current node
        const clonedNode = new Node(currentNode.val);
        visited.set(currentNode, clonedNode); // Mark as visited
        
        // Clone neighbors
        for (let neighbor of currentNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }
        
        return clonedNode;
    };
    
    return dfs(node);
};
