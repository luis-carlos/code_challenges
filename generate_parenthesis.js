var generateParenthesis = function(n){
    const results = [];

    function helperFunction(l, r, s) {
        if (l > r) {
            return;
        }

        if (l === 0 && r === 0){
            results.push(s);
            return;
        }

        if (l > 0) helperFunction(l-1, r, s + "(");
        if (r > 0) helperFunction(l, r-1, s + ")");

    }

    helperFunction(n, n, '');
    return results;
}

console.log(generateParenthesis(process.argv[2]));