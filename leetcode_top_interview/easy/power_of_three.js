var isPowerOfThree = (n) => {

    if (n === 0)
        return true;

    while (n%3 === 0)
        n /= 3;

    return n === 1;
    
}

console.log(isPowerOfThree(process.argv[2]));