var maxDepth = function(root) {
    if(root===null){
        return 0;
    } 
    let leftDepth=maxDepth(root.left);
    let rightDepth=maxDepth(root.right);
    return Math.max(leftDepth,rightDepth)+1;

};
/*
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
*/