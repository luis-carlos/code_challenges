var plusOne = (nums) => {
    let leading = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let partialSum = nums[i] + leading;
        if (partialSum > 9) {
            partialSum -= 10;
            leading = 1;
        }
        else {
            leading = 0;
        }
        nums[i] = partialSum;
    }

    if (leading === 1)
        nums.unshift(nums[0] + leading)

    return nums;
}

console.log(plusOne([9]));

