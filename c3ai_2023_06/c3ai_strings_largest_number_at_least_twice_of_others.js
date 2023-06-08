var getRandomArray = function(numberOfElements, minValue, maxValue) {
    let returnArray = new Array();
    for (let i = 0; i < numberOfElements; i++) {
        returnArray.push(Math.floor(Math.random() * (maxValue - minValue) + minValue));
    }
    return returnArray;
}

var findLargestNumberAtLeastTwiceOfOthers = function () {
    const sampleArray = [3, 6, 1, 0];
    let maxNumber = -1;
    let maxIndex = -1;

    console.log(sampleArray);

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maxNumber) {
            maxNumber = sampleArray[i];
            maxIndex = i;
        }
    }

    for (let i = 0; i < sampleArray.length; i++) {
        console.log(`Trying ${sampleArray[i]}`);
        if (i !== maxIndex && ((sampleArray[i] * 2) > maxNumber)) {
            console.log('Doing the math');
            console.log(sampleArray[i] * 2);
            return -1;
        }
    }

    return maxIndex;




}

console.log(findLargestNumberAtLeastTwiceOfOthers());