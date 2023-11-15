

var flippingMatrix = (matrix) => {
    let matrixSize = matrix.length;
    let sum = 0;
    
    for (let i=0; i < matrixSize/2; i++)
        for (let j=0; j < matrixSize/2; j++) {
            sum += Math.max(matrix[i][j], matrix[i][matrixSize-1-j], matrix[matrixSize-1-i][j], matrix[matrixSize-1-i][matrixSize-1-j]);
        }
    return sum;
    
}


console.log(flippingMatrix([[112, 42, 83, 119], 
                [56, 125, 56, 49], 
                [15,78, 101, 43], 
                [62, 98, 114, 108]]));
// flippingMatrix([[107, 54, 128, 15], 
//                 [12, 75, 110, 138], 
//                 [100, 96, 34, 85], 
//                 [75, 15, 28, 112]]);