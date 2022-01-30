// Get an integer number and find out the number of digits its made up of

const numberOfDigits = (n) => {
    result = 0;
    
    while (parseInt(n) > 0) {
        n /= 10;
        result++;

    }

    return result;
}

console.log(numberOfDigits(process.argv[2]));