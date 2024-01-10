var validAnagram = (s, t) => {
    
    let mapS = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i]))
            mapS.set(s[i], mapS.get(s[i])+1)
        else
            mapS.set(s[i], 1);
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!mapS.has(t[i]))
            return false;
        mapS.set(t[i], mapS.get(t[i]) - 1);
    }

    for (let occurrence of mapS.values())
        if (occurrence !== 0)
            return false;
        
    return true;    


    
}

console.log(validAnagram("cat","car"));