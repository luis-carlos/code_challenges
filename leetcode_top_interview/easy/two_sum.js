var twoSum = (array, target) => {
    
    // This approach works only with sorted arrays.
    // The problem originall asks for indices, not the actual numbers.
    // For the latter, we could use this code
    
    // let returnArray = [];
    // let bottomIndex = 0;
    // let topIndex = array.length - 1;
    // while (bottomIndex < topIndex) {
    //     let sum = array[bottomIndex] + array[topIndex];
    //     if (sum === target) {
    //         returnArray.push(bottomIndex, topIndex)
    //         return returnArray;
    //     }
    //     if (sum > target)
    //         topIndex--;
    //     else if (sum < target)
    //         bottomIndex++;
    // }

    // Brute force approach
    // let returnArray = []

    // for (let i = 0; i < array.length - 1; i++)
    //     for (let j = i + 1; j < array.length; j++)
    //         if (array[i] + array[j] === target) {
    //             returnArray.push(i, j);
    //             return returnArray;
    //         }

    // Using a map

    let map = new Map();

    for (let i = 0; i < array.length; i++) {
        if (map.has(target - array[i]))
            return [map.get(target - array[i]), i];
        else
            map.set(array[i], i);
    }


}

console.log(twoSum([3, 2, 4], 6));