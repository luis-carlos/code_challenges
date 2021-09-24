var s = "cdeo";
var a = [3, 2, 0, 1];
var k = 0;
var return_s = s[0];

do {
    return_s = return_s.concat(s[a[k]]);
    k = a[k];
} while (a[k] !== 0)

console.log(return_s);

// This is just a test