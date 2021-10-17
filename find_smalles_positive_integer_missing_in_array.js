var solution = function(intArray){
    intArray.sort((a,b) => a-b);
    console.log(intArray);

    for (let i = 0; i < intArray.length; i++){
        if (i === (intArray.length - 1)) {
            if (intArray[i] <= 0) 
            return 1;
        }
        if ((intArray[i] >= 0) && (intArray[i] !== intArray[i + 1]) && (intArray[i + 1] !== (intArray[i] + 1))) {
            console.log(`[${i}]${intArray[i]} different than ${intArray[i+1]}`);
            return (intArray[i] + 1);
            // return (intArray[i] + 1)
        }
    }
}

console.log(solution([-1, -3]));