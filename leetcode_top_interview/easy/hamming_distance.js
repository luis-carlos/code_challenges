var hammingDistance  = (x, y) => {
    let xArray = Number(x).toString(2).padStart(31,0).split("");
    let yArray = Number(y).toString(2).padStart(31,0).split("");
    let diffNumbers = 0;

    for (let i = 0; i < 31; i++)
        if (xArray[i] !== yArray[i])
            diffNumbers++;
    

    return diffNumbers;
}

console.log(hammingDistance(process.argv[2], process.argv[3]));