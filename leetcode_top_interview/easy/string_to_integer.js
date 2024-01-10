var atoi = (s) => {
    s = s.match(/^\s*([+-]?\d+)/g);
    
    if (s)
        s = parseInt(s.join(""))
    else 
        return 0
    

    if (s > (2 ** 31 - 1))
        s = 2 ** 31 -1;

    if (s < ((-2) ** 31))
        s = (-2) ** 31;

    return s;
}

console.log(atoi("words with 4193"));