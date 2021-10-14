

var reverse_string = function(s){
    let string_array = s.split('');
    for (let i = 0; i < string_array.length / 2; i++){
        let temp = string_array[i];
        string_array[i] = string_array[string_array.length - 1 - i];
        string_array[string_array.length - 1 - i] = temp;
    }
    return string_array.join('');
}

console.log(reverse_string(process.argv[2]));