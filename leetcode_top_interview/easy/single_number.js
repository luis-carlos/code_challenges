var singleNumber = (nums) => {
    
    if (nums.length === 1)
        return nums[0];
    
    nums.sort((a,b) => a - b);
    let shouldCompare = true;
    let comparingNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (i === nums.length-1)
            return nums[i];
        if (shouldCompare)
            if (nums[i] === comparingNumber) {
                shouldCompare = false;
            }
            else {    
                return comparingNumber;
            }
        else {
            comparingNumber = nums[i];
            shouldCompare = true;
        }

    }
}

console.log(singleNumber([1]));