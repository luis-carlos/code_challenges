var enqueue = function(array, element){
    array.shift();
    array.push(element);
    return array;
}

var dequeue = function(array){
    array.push(array.shift());
    return array;
}

console.log(enqueue([1,2,3,4], 5));
console.log(dequeue([1,2,3,4]));