var string_replacement = function(text, pattern, replacement){
    let silveRegex = new RegExp(pattern, "gi");
    return text.replace(silveRegex, replacement);
}

console.log(string_replacement(process.argv[2], process.argv[3], process.argv[4]));