var searchMatrix = function(matrix, target) {
    if(matrix.length===0) return false;
    let m=matrix.length;
    let n=matrix[0].length;


    let left=0;
    let right=m*n-1;

    while(left <= right)
    {
        let mid=Math.floor((left+right)/2);
        let midvalue= matrix[Math.floor(mid/n)][mid%n];

        if(midvalue===target){
            return true;
        }else if(midvalue<target){
        left=mid+1;
        }else{
            right= mid-1;
        }
    }
    return false;
    
};
//Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
//Output: true