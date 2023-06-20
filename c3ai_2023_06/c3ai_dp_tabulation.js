let fibonacci_tabulation = (n) => {
    let f = new Array(n);
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i < n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n-1];
}

console.log(fibonacci_tabulation(process.argv[2]));