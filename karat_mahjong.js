const tiles1 = "11133555";
const tiles2 = "111333555";
const tiles3 = "00000111";
const tiles4 = "13233121";
const tiles5 = "11223344555";
const tiles6 = "99999999";
const tiles7 = "999999999";
const tiles8 = "9";
const tiles9 = "99";
const tiles10 = "000022";
const tiles11 = "888889";
const tiles12 = "889";
const tiles13 = "88888844";
const tiles14 = "77777777777777";
const tiles15 = "1111111";
const tiles16 = "1111122222";
const tiles17 = "1111";

/*
complete(tiles1)  => True
complete(tiles2)  => False
complete(tiles3)  => True
complete(tiles4)  => True
complete(tiles5)  => False
complete(tiles6)  => True
complete(tiles7)  => False
complete(tiles8)  => False
complete(tiles9)  => True
complete(tiles10) => False
complete(tiles11) => False
complete(tiles12) => False
complete(tiles13) => True
complete(tiles14) => True
complete(tiles15) => False
complete(tiles16) => False
*/

const complete = (tilesString) => {
    let tilesMap = new Map();
    let numberOfPairs = 0;
    console.log(`Tiles: ${tilesString}`);
    for (let i = 0; i < tilesString.length; i++) {
        if (tilesMap.has(tilesString[i])) {
            if (tilesMap.get(tilesString[i]) + 1 === 3)  
                tilesMap.set(tilesString[i], 0);
            else
                tilesMap.set(tilesString[i], tilesMap.get(tilesString[i]) + 1);
        } else {
            tilesMap.set(tilesString[i], 1);
        }
    }
    console.log(tilesMap);

    for (key of tilesMap) {
        console.log(key[0], key[1]);
        if (key[1] === 1)
            return false;
        if (key[1] === 2)
            numberOfPairs++;
    }

    console.log(`Number of pairs: ${numberOfPairs}`)

    if (numberOfPairs != 1)
        return false;
    
    return true;
        
        
}

console.log(complete(tiles16));