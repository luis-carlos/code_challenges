var diagonalDifference = (arr) => {
    let leftRightDiagonal = 0;
    let rightLeftDiagonal = 0;
    
    for (let i = 0; i < arr.length; i++) {
        leftRightDiagonal += arr[i][i];
    }
    
    let offset = 0;
    for (let i = arr.length-1; i>=0; i--) {
        rightLeftDiagonal += arr[i][offset++];
    }
    
    return Math.abs(leftRightDiagonal - rightLeftDiagonal);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8 ,9]]));

