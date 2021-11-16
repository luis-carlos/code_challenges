// s = "barfoothefoobarman"
// words = ["foo", "bar"]
// output = [0, 9]

// s = "barfoofoobarthefoobarman"
// words = ["bar", "foo", "the"]
// output = [6, 9, 12]

var solution = function(string, words){
    let output = [];
    let wordsMap = new Map();
    let wordsNumber = words.length;
    let wordLength = words[0].length;
    words.forEach((word) => {
        if (!wordsMap.has(word))
            wordsMap.set(word, 1);
        else
            wordsMap.set(word, wordsMap.get(word) + 1);
    });

    
 
    for (let i = 0; i <= string.length-(wordsNumber*wordLength); i+=wordLength){
        let tempMap = new Map(wordsMap);
        let check = true;
        let tempString = string.substring(i, i + wordsNumber*wordLength);
        for (let j = 0; j <= tempString.length - wordLength; j+= wordLength) {
            let tempString2 = tempString.substring(j, j + wordLength);
            if (tempMap.has(tempString2))
                tempMap.set(tempString2, tempMap.get(tempString2)-1);
        }
        for (let val of tempMap.values()){
            if (val !==0){
                check = false
                break;
            }
        }
        
        if (check)
            output.push(i)
    }
    console.log(output);        
}

solution("barfoothefoobarman", ["foo", "bar"]);