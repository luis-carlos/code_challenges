const lo = require('lodash');

const sampleObject = {
    a: "Letter a",
    b: "letter b",
    c: "letter c",
}

console.log(lo.get(sampleObject,'a','Missing value'));
console.log(lo.get(sampleObject, 'd', null));