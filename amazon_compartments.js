// String of * and | 
// Find strings between array of start and end indexex

const STRING_LENGTH = 10000;

function generateIndicesArray(){
    let indicesArray = [];
    let thisManyTries = 1;
    let firstIndex = Math.floor(Math.random() * STRING_LENGTH) + 1;
    indicesArray.push(firstIndex);
    while(true){
        secondIndex = Math.floor(Math.random() * STRING_LENGTH) + 1;
        if (secondIndex > firstIndex)
            break;
        thisManyTries++;
    }
    indicesArray.push(secondIndex);
    // console.log(indicesArray, thisManyTries);
    return indicesArray;

}

function generateRandomString(){
    let randomStringArray = [];
    for (let i = 1; i <= STRING_LENGTH; i++) {
        // 0 will give a star, 1 will give a bar
        let stringChar = "";
        if (Math.floor(Math.random() * 2) == 0)
            stringChar = "*";
        else 
            stringChar = "|";
        randomStringArray.push(stringChar);
    }
    return randomStringArray.join("");
}

function numberOfItems(s, indices){
    console.log(s);
    let itemsCount = 0;
    let barsArray = [];
    let subString = s.substring(indices[0]-1, (indices[1]+1));
    console.log(indices);
    console.log(subString);
    for (let i in subString){
        if (subString[i].localeCompare("|") == 0)
            barsArray.push(Number(i));
    }
    for (let i = 0; i < barsArray.length-1; i++){
        itemsCount += barsArray[i+1] - barsArray[i] - 1;
    }

    console.log(itemsCount);
        
}

// generateIndicesArray();
const start = Date.now();
numberOfItems(generateRandomString(), generateIndicesArray());
console.log((Date.now() - start) / 1000);