var moveZeroes = (nums) => {
    let length = nums.length;
    console.log(length);
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            length--;
            i--;
        } 
    }

    return nums;

}

console.log(moveZeroes([0, 0, 1]));