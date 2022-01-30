// Fibonacci. No recursivity, no memoize

const fibonacci = (n) => {
    a = 0;
    b = 1;
    while (a <= n){
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}

fibonacci(process.argv[2]);