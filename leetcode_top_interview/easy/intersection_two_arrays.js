var intersectionOfTwoArrays = (nums1, nums2) => {
    
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let returnArray = [];
    let indexOf = 0;

    for (let i = 0; i < nums2.length; i++) {
        let foundIndex = nums1.indexOf(nums2[i], indexOf);
        if (foundIndex >= 0) {
            returnArray.push(nums2[i]);
            indexOf = foundIndex + 1;
        }
    }

    return returnArray;
}

console.log(intersectionOfTwoArrays([1,2,2,1], [2,2]));