var getMinimumDifference = function(root) {
    let values = []; // Step 1: Create an array to store all node values
    let minDiff = Infinity; // Step 2: Initialize the minimum difference as Infinity (very large number)

    // Step 3: Define a helper function for in-order traversal of the tree
    const inOrder = (node) => {
        if (!node) return; // If the node is null, stop the recursion
        inOrder(node.left); // Recursively visit the left subtree
        values.push(node.val); // Add the current node's value to the `values` array
        inOrder(node.right); // Recursively visit the right subtree
    };

    // Step 4: Perform the in-order traversal to fill the `values` array
    inOrder(root);

    // Step 5: Iterate through the sorted `values` array to find the smallest difference
    for (let i = 1; i < values.length; i++) {
        // Compare the current value with the previous one to calculate the difference
        minDiff = Math.min(minDiff, values[i] - values[i - 1]);
    }

    return minDiff; // Step 6: Return the smallest difference
};