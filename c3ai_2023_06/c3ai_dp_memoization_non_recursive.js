let F = (n) => {
    let memo = [0, 1];
    if (n < 3)
        return memo[n-1];

    for (let i = 2; i < n; i++ ) {
        let temp = memo[0];
        memo[0] = memo[1];
        memo[1] = memo[0] + temp;
    }
    return memo[1];
}

console.log(F(process.argv[2]));