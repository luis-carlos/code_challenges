var caesar_cypher = (s, k) => {
    let stringArray = s.split('');
    for (let i = 0; i < s.length; i++) {
        let currentChar = s.charCodeAt(i);
        
        if ((currentChar >= 65 && currentChar <=90) || (currentChar >= 97 && currentChar <=122)) {
            let rawNumber = currentChar + k%26;
            console.log(rawNumber);
            if (rawNumber > 90 && rawNumber < 97)
                rawNumber = 64 + Math.floor(rawNumber/90) * rawNumber%90;
            else if (rawNumber > 122)
                rawNumber = 96 + Math.floor(rawNumber/122) * rawNumber%122;
            stringArray[i] = String.fromCharCode(rawNumber);
        }
    }
    
    return stringArray.join('');
}

console.log(caesar_cypher("W", 62));
// .                       !w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E <-- Expected
//                         !w-bL`-yX!.a`mVKm`lX/MaCyyvSS!CSwts.!g/`be`edk1DaZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E <-- Actual
//                         !w-bL`-yX!.a`mVKmFlX/MaCyyvSS!CSwts.!g/`be`edk1DaZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E