// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

var removeDuplicate = (nums) => {
    let comparator = nums[0];
    let nextOrderedNumberIndex = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > comparator) {
            let tempSwap = 0;
            comparator = nums[i];
            tempSwap = nums[nextOrderedNumberIndex];
            nums[nextOrderedNumberIndex] = nums[i];
            nums[i] = tempSwap;
            nextOrderedNumberIndex++;
        }
    }
    return nextOrderedNumberIndex;
    
}

console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));