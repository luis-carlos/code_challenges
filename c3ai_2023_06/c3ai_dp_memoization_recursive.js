let memo = new Map();
let F = (i) => {
    if (i == 0 || i == 1)
        return i;
    if (!memo.has(i))
        memo.set(i, F(i-1) + F(i-2));
    return memo.get(i);
}

console.log(F(process.argv[2]));