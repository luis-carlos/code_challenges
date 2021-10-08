var fibonacci = function(number){
    let memoize = [0, 1];

    if(process.argv.length !== 4)
        return "Error";

    if (process.argv[3].localeCompare("-n") === 0){    
        if (number < 3)
            return memoize[number-1];

        while (number-- > 2){
            let temp_memoize = memoize[0] + memoize[1];
            memoize[0] = memoize[1];
            memoize[1] = temp_memoize;
        }

        return memoize[1];
    } else if (process.argv[3].localeCompare("-s") === 0){
         while (number > 2){
            memoize.push(memoize[memoize.length-2] + memoize[memoize.length-1]);
            number--;
        }
        return memoize;
    } else {
        return "Error";
    }

}

console.log(fibonacci(process.argv[2]));