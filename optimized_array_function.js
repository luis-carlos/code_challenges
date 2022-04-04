// It is unclear what this function is supposed to do 
// as well as the optimization required

var solution = function(A) {
    var N = A.length;
    var result = 0;
    var i, j;
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            if (A[i] == A[j])
                result = Math.max(result, Math.abs(i - j));
    return result;
}

console.log(solution([1, 2, 3]));