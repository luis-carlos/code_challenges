var validPalindrome = (s) => {
    s = s.replace(/[^a-zA-Z0-9]/g,'');
    s = s.toLowerCase();
    let offset = 0;

    for (let i = 0; i < Math.floor(s.length/2); i++) {
        if (s[i].localeCompare(s[s.length-1-offset++]) !== 0)
            return false;
    }

    return true;
}

console.log(validPalindrome("abccba")); // Until 2. String length = 6
console.log(validPalindrome("somoz")); // Until 1. String length = 5
console.log(validPalindrome("abba")); // Until 1
console.log(validPalindrome("sos")); // Until 0
console.log(validPalindrome("A man, a plan, a canal: Panama"));