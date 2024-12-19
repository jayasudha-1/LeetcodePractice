function lowestCommonAncestor(root, p, q) {
    // Start from the root of the tree
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            // Both nodes are in the left subtree
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            // Both nodes are in the right subtree
            root = root.right;
        } else {
            // Split point found; this is the lowest common ancestor
            return root;
        }
    }
    return null; // In case the tree is empty
}

//Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
//Output: 6
//Explanation: The LCA of nodes 2 and 8 is 6.