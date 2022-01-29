// Factorial of n

const factorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++)
        factorial *= i;
    return factorial
}

console.log(factorial(process.argv[2]));