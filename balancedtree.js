var isBalanced = function(root) {
    return height(root) != -1
};
function height(root){
    if(root===null) return 0;
    const leftheight=height(root.left);
    if(leftheight === -1) return -1;

    const rightheight=height(root.right);
    if(rightheight ===-1) return -1;

    if(Math.abs(leftheight-rightheight) > 1){
        return -1;
    }
    return Math.max(leftheight, rightheight)+1;
}