var reverse_string = function(input_string){
    let return_array = [];
    for (let i = 0; i <= input_string.length; i++)
        return_array.unshift(input_string[i]);
    return return_array.join("");
}

console.log(reverse_string(process.argv[2]));