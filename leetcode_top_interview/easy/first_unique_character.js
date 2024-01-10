var firstUniqueChar = (s) => {
    let charsMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!charsMap.has(s[i]))
            charsMap.set(s[i], 1);
        else
            charsMap.set(s[i], charsMap.get(s[i]) + 1 );
    }
    
    for (entry of charsMap) {
        // console.log(entry, entry[0], entry[1]);
        if (entry[1] === 1)
            return s.indexOf(entry[0]);
    }

    return -1;

}

console.log(firstUniqueChar(process.argv[2]));