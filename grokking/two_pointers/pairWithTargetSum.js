var pairWithTargetSum = (arr, targetSum) => {
   let startIndex = 0;
   let endIndex = arr.length - 1;
   console.log(startIndex, endIndex);

   console.log(process.argv[2], process.argv[3]);
   while (startIndex !== endIndex) {
    let sumIndices = arr[startIndex] + arr[endIndex];
    if (sumIndices === targetSum)
        return [startIndex, endIndex];
    if (sumIndices > targetSum)
        endIndex--;
    if (sumIndices > targetSum)
        startIndex++
   }
   return [-1, -1];
}

console.log(pairWithTargetSum(process.argv[2], process.argv[3]));