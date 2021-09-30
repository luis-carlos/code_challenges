var sumZero = function(n){
    let returnArray = [];

    for (let i = n; i > Math.ceil(n/2); i--){
        returnArray.push(i);
        returnArray.push(-i);
    }

    if (n % 2 != 0)
        returnArray.push(0);

    return returnArray;
}

console.log(sumZero(process.argv[2]));
