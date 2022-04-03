// https://leetcode.com/problems/repeated-dna-sequences/
// http://www.faculty.ucr.edu/~mmaduro/random.htm

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

//     For example, "ACGAATTCCG" is a DNA sequence.

// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

var solution = function(dnaString, substringLength) {
    let set = new Set();
    let result = new Set();
    let numberSubstringLenght = Number(substringLength);
    
    for (let i = 0; i <= dnaString.length - numberSubstringLenght; i++){
        let str = dnaString.substring(i, i + numberSubstringLenght);
        set.has(str) ? result.add(str) : set.add(str);
    }

    return [...result];
}

console.log(solution(process.argv[2], process.argv[3]));