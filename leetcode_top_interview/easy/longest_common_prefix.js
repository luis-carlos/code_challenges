var longestCommonPrefix = (strs) => {
    strs.sort();
    let commonPrefix = [''];

    for (let i = 0; i < Math.min(strs[0].length, strs[strs.length-1].length); i++) {
        if (strs[0][i] === strs[strs.length-1][i]) {
            commonPrefix.push(strs[0][i]);
        } else
            break;
    }

    return commonPrefix.join("");

}

console.log(longestCommonPrefix(["dog","racecar","car"]));