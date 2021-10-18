var solution = function(N){
    let array_numbers = String(N).split('');
    let first_sum=0, target_sum = 0;
    let goal_numbers = [];
    for (let i = 0; i < array_numbers.length; i++)
        first_sum = first_sum + Number(array_numbers[i]);
    target_sum = first_sum * 2;
    if (target_sum >= 10){
        let copy_target_sum = target_sum;
        while (copy_target_sum > 9){
            goal_numbers.push(9);
            copy_target_sum -= 9;
        }
        goal_numbers.push(copy_target_sum);
        goal_numbers.sort((a,b) => a - b);
        return Number(goal_numbers.join(""));
    } else {
        goal_numbers.push(1);
        goal_numbers.push(target_sum - 1);
        goal_numbers.sort((a,b) => a - b);
        return Number(goal_numbers.join(""));
    }
}

console.log(solution(10));