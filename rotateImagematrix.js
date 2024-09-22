var rotate = function(matrix) {
    // Step 1: Transpose the matrix(converting rows into columns.)
    for(let i=0; i<matrix.length;i++){ // n=matrix.length => replace the other places with n
         for(let j=i;j<matrix.length;j++){
            temp =matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
         }
    }
     // Step 2: Reverse each row
         for(let i=0;i<matrix.length;i++){
            matrix[i].reverse();
         }
    };

// Example usage
let matrix = [[1,2,3],
[4,5,6],
[7,8,9]];
rotate(matrix);
console.log(matrix);