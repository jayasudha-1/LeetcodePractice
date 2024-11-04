var searchMatrix = function(matrix, target){
    if(matrix.length===0) return false;
    let rows=matrix.length;
    let cols= matrix[0].length;
    let row=0;
    let col=cols-1;

    while(row<rows && col>=0){
        if(matrix[row][col]===target){
            return true;
        }else if(matrix[row][col]>target){
            col--;
        }else{
            row++
        }
    }
    return false;
}

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
result=searchMatrix(matrix, target);
console.log(result);