var levelOrder = function(root) {
    if (!root) return []; // If the root is null, return an empty array

    let result = []; // Array to store the final result
    let queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        let level = []; // Array to store values of nodes at the current level
        let levelSize = queue.length; // Number of nodes at the current level

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); // Remove the first node from the queue
            level.push(node.val); // Add the node's value to the level array

            // Add the left and right children (if they exist) to the queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level); // Add the current level array to the result
    }

    return result; // Return the final level order traversal
};
