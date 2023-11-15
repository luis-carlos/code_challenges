var reverseString = (s) => {
    let sLength = s.length;
    let temp = "";

    console.log(s, sLength);

    for (let i = 0; i < s.length/2; i++) {
        temp = s[i];
        console.log(`Switching ${i} for ${sLength - 1 - i}`);
        s[i] = s[sLength - 1 - i];
        s[sLength - 1 - i] = temp;
    }

    return s;
}

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));