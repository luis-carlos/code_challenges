const nums = [2, 5];
const target = 5;

var search = (nums, target) => {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    if (leftIndex == rightIndex) {
        return nums[leftIndex] == target ? 0 : -1;
    }

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex + leftIndex)/2);
        console.log(`leftIndex: ${leftIndex}, rightIndex: ${rightIndex}. ${nums[middleIndex]}`);
        if (nums[middleIndex] == target)
            return middleIndex;
        if (nums[middleIndex] < target)
            leftIndex = middleIndex + 1;
        if (nums[middleIndex] > target)
            rightIndex = middleIndex - 1;
    }
    return -1;
}

console.log(search(nums, target));