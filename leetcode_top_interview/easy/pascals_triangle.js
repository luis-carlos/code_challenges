var generate = (numRows) => {
    numRows = parseInt(numRows);
    let returnBidimensionalArray = [[1]];
    
    if (numRows === 1)
        return returnBidimensionalArray;

    returnBidimensionalArray.push([1,1]);

    for (let i = 3; i <= numRows; i++) {
        let tempArray = [1];
        for (let j = 0; j < returnBidimensionalArray[i-2].length - 1; j++)
            tempArray.push(returnBidimensionalArray[i-2][j] + returnBidimensionalArray[i-2][j+1]);
        tempArray.push(1);
        returnBidimensionalArray.push(tempArray);
    }
    
    return returnBidimensionalArray;

}


console.log(generate(process.argv[2]));