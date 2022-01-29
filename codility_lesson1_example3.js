// Reversed centered star tree

const print_reversed_tree = (n) => {
    // Cycle for levels
    for (let i = n; i > 0; i--){
        // Cycle for white starting spaces
        for (let j = 0; j < n - i; j++)
            // console.log(`${j} spaces`);
            process.stdout.write(' ');
        // Cycle for stars
        for (let k = 1; k <= (i * 2) -1; k++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
        
}

print_reversed_tree(process.argv[2]);