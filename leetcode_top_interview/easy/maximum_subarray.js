var maxSubArray = (nums) => {
    let sum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        sum = (sum < 0) ? 0 : sum;
        console.log("Sum on each iteration", sum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));