var solution = function(A){
    A.sort((a,b) => a-b);
    console.log(A);

    for (let i = 0; i < A.length; i++){
        if (i === (A.length - 1)) {
            if (A[i] <= 0) 
            return 1;
        }
        if ((A[i] >= 0) && (A[i] !== A[i + 1]) && (A[i + 1] !== (A[i] + 1))) {
            console.log(`[${i}]${A[i]} different than ${A[i+1]}`);
            return (A[i] + 1);
        }
    }
}

console.log(solution([1]));