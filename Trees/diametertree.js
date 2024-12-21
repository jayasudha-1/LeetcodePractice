var diameterOfBinaryTree = function(root) {
    let largestdiameter=0;

    function height(node){
        if(!node) return 0;

        const leftheight=height(node.left);
        const rightheight=height(node.right);
        const diameter=leftheight+rightheight;
        largestdiameter=Math.max(diameter,largestdiameter);
        return 1 + Math.max(leftheight, rightheight);
        
    }
    height(root);
    return largestdiameter;
    
};