var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    const inOrderTraversal = (node) => {
        if (!node || result !== null) {
            return;
        }

        // Visit the left subtree
        inOrderTraversal(node.left);

        // Process the current node
        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        // Visit the right subtree
        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);
    return result;
};