var houseRobber = (nums) => {
    let prev1 = 0;
    let prev2 = 0;
    let tmp = 0;

    for (let num of nums) {
        tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }

    return prev1;
        
}

houseRobber([2,10,9,4,5,2,4,4,6,10,7,1,2,1,9,3,8,3,9,7]);