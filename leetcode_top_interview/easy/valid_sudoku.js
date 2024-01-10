var validSudoku = (board) => {
    for (let i = 0; i < board.length; i++) {
        let tempMap = new Map();
        for (let j = 0; j < board[i].length; j++) {
            if (Number.isInteger(parseInt(board[i][j]))) {
                if (tempMap.has(parseInt(board[i][j])))
                    return false;
                else 
                    tempMap.set(parseInt(board[i][j]), 1);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        let tempMap = new Map();
        for (let j = 0; j < board[i].length; j++) {
            if (Number.isInteger(parseInt(board[j][i]))) {
                if (tempMap.has(parseInt(board[j][i])))
                    return false;
                else 
                    tempMap.set(parseInt(board[j][i]), 1);
            }
        }
    }
    
    let boundaries = [
        [0, 2, 0, 2],
        [3, 5, 0, 2],
        [6, 8, 0, 2],
        [0, 2, 3, 5],
        [3, 5, 3, 5],
        [6, 8, 3, 5],
        [0, 2, 6, 8],
        [3, 5, 6, 8],
        [6, 8, 6, 8]
   ];

   for (let b = 0; b < boundaries.length; b++) {
        let tempMap = new Map();
        for (let i = boundaries[b][0]; i <= boundaries[b][1]; i++) {
            for (let j = boundaries[b][2]; j <= boundaries[b][3]; j++) {
                if (Number.isInteger(parseInt(board[i][j]))) {
                    if (tempMap.has(parseInt(board[i][j])))
                        return false;
                    else 
                        tempMap.set(parseInt(board[i][j]), 1);
                }
            }
        }
    }

    return true;
}

console.log(validSudoku([
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]));