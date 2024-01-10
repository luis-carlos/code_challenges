var countPrimes = (n) => {
    if (n < 2)
        return 0;
    
    let count = 0;    
    let visited = new Array();
    
    
    for (let i = 2; i < n; i++) {
        if (visited[i])
            continue;
        else
            count++;
        for (let j = i+i; j <n; j +=i)
            visited[j] = true;
    }

    return count;

    
}

console.log(countPrimes(process.argv[2]));