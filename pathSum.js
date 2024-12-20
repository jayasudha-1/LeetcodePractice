var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;  // Base case: if the tree is empty, there's no path, return false
    }
    if (!root.left && !root.right) {
        return targetSum === root.val;  // Base case: if it's a leaf node, check if the remaining sum matches the node's value
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    // Recursively check the left and right subtrees with the updated targetSum
};
