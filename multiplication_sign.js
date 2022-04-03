var solution = function(numbers) {
    if (numbers.includes(0))
        return 0;
    let negativeNumbers = numbers.filter(number => number < 0);
    if ((negativeNumbers.length % 2) === 0)
        return 1;
    else
        return -1;

}

console.log(solution([1, 2, 0, -5]));