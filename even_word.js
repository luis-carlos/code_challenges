var solution = function(S){
    let og_array = S.split("");
    let map_array = new Map();
    let letters_to_remove = 0;
    for (i = 0; i < og_array.length; i++){
        if (!map_array.has(og_array[i])){
            map_array.set(og_array[i], 1);
        } else {
            map_array.set(og_array[i], Number(map_array.get(og_array[i]) + 1));
        }
         
    }
    for (let letter of map_array.values()){
        if (letter%2 !== 0)
            letters_to_remove++;
    }
    return letters_to_remove;

}

console.log(solution("aaaa"));