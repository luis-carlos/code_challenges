var solution = function(N){
    
    let nArray = [...String(N)];
    let maxNumber = Number.MIN_VALUE;
    let minNumber = Number.MAX_VALUE;
    // console.log(maxNumber);
    nArray.forEach((element, index, array) => {
        if (Number(element) === 5) {
            let clonedNArray = [...array];
            let splicedArray = clonedNArray.splice(index, 1);
            let choppedNumber = Number(clonedNArray.join(''))
            // console.log(choppedNumber);
            if (choppedNumber === 0)
                maxNumber = 0;
            if (choppedNumber > 0){
                // console.log('Positive numbers');
                if (choppedNumber > maxNumber)
                    maxNumber = choppedNumber;
            }
            else {
                // console.log("Negative numbers");
                if (choppedNumber < minNumber)
                    maxNumber = choppedNumber;
            }
        }
    });
    return maxNumber;

}

console.log(solution(5000));