// Print tree of n-levels stars

const print_tree = (n) => {
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++)
            process.stdout.write("* ");
        process.stdout.write("\n");
    }
}

print_tree(process.argv[2]);